class M2HelperSearch {
constructor() {
this.currentLang = 'de';
this.searchIndex = [];
this.selectedIndex = -1;
this.isOpen = false;
this.isMobileSearchOpen = false;
this.searchContainer = null;
this.searchInput = null;
this.resultsContainer = null;
this.overlay = null;
this.mobileToggleBtn = null;
this.searchInputContainer = null;
this.searchTimeout = null;
this.handleInput = this.handleInput.bind(this);
this.handleKeyDown = this.handleKeyDown.bind(this);
this.handleClickOutside = this.handleClickOutside.bind(this);
this.close = this.close.bind(this);
this.toggleMobileSearch = this.toggleMobileSearch.bind(this);
}
init() {
if (typeof SEARCH_INDEX !== 'undefined') {
this.updateLanguage(this.getCurrentLanguage());
} else {
console.error('Search index not loaded. Make sure search-index.js is included.');
return;
}
this.render();
document.addEventListener('languageChanged', (e) => {
this.updateLanguage(e.detail.language);
});
document.addEventListener('keydown', (e) => {
if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
e.preventDefault();
this.focus();
}
if (e.key === 'Escape') {
if (this.isOpen) {
this.close();
} else if (this.isMobileSearchOpen) {
this.toggleMobileSearch();
}
}
});
}
getCurrentLanguage() {
const stored = localStorage.getItem('lang');
return (stored && ['de', 'en', 'tr'].includes(stored)) ? stored : 'de';
}
mapLanguageForSearch(lang) {
if (['de', 'en', 'tr'].includes(lang)) {
return lang;
}
return 'en';
}
updateLanguage(lang) {
const mappedLang = this.mapLanguageForSearch(lang);
this.currentLang = mappedLang;
if (typeof SEARCH_INDEX !== 'undefined' && SEARCH_INDEX[mappedLang]) {
this.searchIndex = SEARCH_INDEX[mappedLang];
}
if (this.searchInput) {
const placeholders = {
de: 'Suche...',
en: 'Search...',
tr: 'Ara...'
};
this.searchInput.placeholder = placeholders[mappedLang] || placeholders.en;
}
}
toggleMobileSearch() {
this.isMobileSearchOpen = !this.isMobileSearchOpen;
if (this.isMobileSearchOpen) {
this.searchInputContainer.classList.add('mobile-open');
this.mobileToggleBtn.classList.add('mobile-open');
setTimeout(() => {
this.searchInput.focus();
}, 300);
} else {
this.searchInputContainer.classList.remove('mobile-open');
this.mobileToggleBtn.classList.remove('mobile-open');
this.searchInput.value = '';
this.clearButton.classList.add('hidden');
this.hideResults();
}
}
render() {
const container = document.createElement('div');
container.className = 'search-component';
container.innerHTML = `
<div class="search-overlay hidden"></div>
<button class="mobile-search-toggle" aria-label="Toggle search">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.35-4.35"></path>
</svg>
</button>
<div class="search-wrapper">
<div class="search-input-container">
<svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.35-4.35"></path>
</svg>
<input
type="text"
class="search-input"
placeholder="Suche..."
autocomplete="off"
spellcheck="false"
/>
<button class="search-clear hidden" aria-label="Clear search">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<line x1="18" y1="6" x2="6" y2="18"></line>
<line x1="6" y1="6" x2="18" y2="18"></line>
</svg>
</button>
</div>
<div class="search-results hidden"></div>
</div>
`;
const targetContainer = document.getElementById('search-bar-container');
if (targetContainer) {
targetContainer.appendChild(container);
} else {
const dropdown = document.querySelector('.dropdown');
if (dropdown) {
dropdown.parentElement.insertBefore(container, dropdown.nextSibling);
} else {
document.body.insertBefore(container, document.body.firstChild);
}
}
this.searchContainer = container;
this.searchInput = container.querySelector('.search-input');
this.searchInputContainer = container.querySelector('.search-input-container');
this.resultsContainer = container.querySelector('.search-results');
this.clearButton = container.querySelector('.search-clear');
this.overlay = container.querySelector('.search-overlay');
this.mobileToggleBtn = container.querySelector('.mobile-search-toggle');
this.searchInput.addEventListener('input', this.handleInput);
this.searchInput.addEventListener('keydown', this.handleKeyDown);
this.searchInput.addEventListener('focus', () => {
if (this.searchInput.value.trim()) {
this.showResults();
}
});
this.clearButton.addEventListener('click', () => {
this.searchInput.value = '';
this.clearButton.classList.add('hidden');
this.hideResults();
this.searchInput.focus();
});
this.mobileToggleBtn.addEventListener('click', this.toggleMobileSearch);
this.overlay.addEventListener('click', () => {
this.close();
if (this.isMobileSearchOpen) {
this.toggleMobileSearch();
}
});
this.updateLanguage(this.currentLang);
}
handleInput(e) {
const query = e.target.value.trim();
if (query) {
this.clearButton.classList.remove('hidden');
} else {
this.clearButton.classList.add('hidden');
}
clearTimeout(this.searchTimeout);
if (!query) {
this.hideResults();
return;
}
if (query.length < 2) {
this.hideResults();
return;
}
this.searchTimeout = setTimeout(() => {
this.performSearch(query);
}, 150);
}
handleKeyDown(e) {
if (!this.isOpen) return;
const results = this.resultsContainer.querySelectorAll('.search-result-item');
const maxIndex = results.length - 1;
switch(e.key) {
case 'ArrowDown':
e.preventDefault();
this.selectedIndex = Math.min(this.selectedIndex + 1, maxIndex);
this.updateSelection(results);
break;
case 'ArrowUp':
e.preventDefault();
this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
this.updateSelection(results);
break;
case 'Enter':
e.preventDefault();
if (this.selectedIndex >= 0 && results[this.selectedIndex]) {
const link = results[this.selectedIndex].querySelector('a');
if (link) {
this.close();
window.location.href = link.href;
}
}
break;
case 'Escape':
e.preventDefault();
this.close();
break;
}
}
updateSelection(results) {
results.forEach((item, index) => {
if (index === this.selectedIndex) {
item.classList.add('selected');
item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
} else {
item.classList.remove('selected');
}
});
}
performSearch(query) {
const lowerQuery = query.toLowerCase();
const resultsMap = new Map();
['de', 'en', 'tr'].forEach(lang => {
if (!SEARCH_INDEX[lang]) return;
SEARCH_INDEX[lang].forEach(item => {
const existingResult = resultsMap.get(item.id);
let score = 0;
if (item.title.toLowerCase() === lowerQuery) {
score += 100;
}
else if (item.title.toLowerCase().startsWith(lowerQuery)) {
score += 50;
}
else if (item.title.toLowerCase().includes(lowerQuery)) {
score += 30;
}
if (item.keywords.some(keyword => keyword.includes(lowerQuery))) {
score += 20;
}
if (item.description.toLowerCase().includes(lowerQuery)) {
score += 10;
}
if (score > 0 && (!existingResult || score > existingResult.maxScore)) {
const displayItem = SEARCH_INDEX[this.currentLang].find(i => i.id === item.id);
if (displayItem) {
resultsMap.set(item.id, { ...displayItem, maxScore: score });
}
}
});
});
const results = Array.from(resultsMap.values());
results.sort((a, b) => b.maxScore - a.maxScore);
this.displayResults(results.slice(0, 8), query);
}
displayResults(results, query) {
this.selectedIndex = -1;
if (results.length === 0) {
const noResultsText = {
de: 'Keine Ergebnisse gefunden',
en: 'No results found',
tr: 'Sonuç bulunamadı'
};
this.resultsContainer.innerHTML = `
<div class="search-no-results">
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.35-4.35"></path>
</svg>
<p>${noResultsText[this.currentLang]}</p>
</div>
`;
this.showResults();
return;
}
const resultsHTML = results.map(result => {
const highlightedTitle = this.highlightMatch(result.title, query);
const highlightedDescription = this.highlightMatch(result.description, query);
const iconHTML = result.icon
? `<img src="${result.icon}" alt="" class="search-result-icon" />`
: '<span class="search-result-icon-placeholder"></span>';
return `
<div class="search-result-item">
<a href="${result.page}" class="search-result-link">
${iconHTML}
<div class="search-result-content">
<div class="search-result-title">${highlightedTitle}</div>
<div class="search-result-description">${highlightedDescription}</div>
</div>
</a>
</div>
`;
}).join('');
this.resultsContainer.innerHTML = resultsHTML;
this.showResults();
const resultLinks = this.resultsContainer.querySelectorAll('.search-result-link');
resultLinks.forEach(link => {
link.addEventListener('click', () => {
this.close();
});
});
}
highlightMatch(text, query) {
const regex = new RegExp(`(${this.escapeRegex(query)})`, 'gi');
return text.replace(regex, '<mark>$1</mark>');
}
escapeRegex(str) {
return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
showResults() {
requestAnimationFrame(() => {
this.resultsContainer.classList.remove('hidden');
this.overlay.classList.remove('hidden');
});
this.isOpen = true;
}
hideResults() {
this.resultsContainer.classList.add('hidden');
this.overlay.classList.add('hidden');
this.isOpen = false;
this.selectedIndex = -1;
}
close() {
this.hideResults();
this.searchInput.blur();
this.searchInput.value = '';
if (this.clearButton) {
this.clearButton.classList.add('hidden');
}
if (this.isMobileSearchOpen) {
this.toggleMobileSearch();
}
}
focus() {
if (window.innerWidth <= 768 && !this.isMobileSearchOpen) {
this.toggleMobileSearch();
} else {
this.searchInput.focus();
if (this.searchInput.value.trim()) {
this.showResults();
}
}
}
handleClickOutside(e) {
if (this.isOpen && !this.searchContainer.contains(e.target)) {
this.hideResults();
}
}
}
document.addEventListener('DOMContentLoaded', () => {
if (typeof SEARCH_INDEX !== 'undefined') {
window.m2Search = new M2HelperSearch();
window.m2Search.init();
}
});