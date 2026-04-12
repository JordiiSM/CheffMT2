function getLang() {
const l = (localStorage.getItem('lang') || '').toLowerCase();
return VALID_LANGS.includes(l) ? l : 'de';
}
function setLang(l) {
localStorage.setItem('lang', l);
applyLang(l);
const languageChangeEvent = new CustomEvent('languageChanged', {
detail: { language: l }
});
document.dispatchEvent(languageChangeEvent);
}
function toggleEvent(eventId) {
const content = document.getElementById(eventId + '-content');
const header = content.previousElementSibling;
const icon = header.querySelector('.expand-icon');
if (content.classList.contains('open')) {
content.classList.remove('open');
header.classList.remove('open');
icon.classList.remove('rotated');
if (window.location.hash === `#${eventId}`) {
window.history.replaceState(null, null, window.location.pathname);
}
} else {
content.classList.add('open');
header.classList.add('open');
icon.classList.add('rotated');
window.history.replaceState(null, null, `#${eventId}`);
}
}
function handleInitialHash() {
if (window.location.hash) {
const eventId = window.location.hash.substring(1);
const eventContent = document.getElementById(eventId + '-content');
if (eventContent && !eventContent.classList.contains('open')) {
toggleEvent(eventId);
setTimeout(() => {
const eventCard = eventContent.closest('.event-card');
if (eventCard) {
eventCard.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
}
}, 300);
}
}
}
function handleHashChange() {
if (window.location.hash) {
const eventId = window.location.hash.substring(1);
const eventContent = document.getElementById(eventId + '-content');
if (eventContent && !eventContent.classList.contains('open')) {
toggleEvent(eventId);
setTimeout(() => {
const eventCard = eventContent.closest('.event-card');
if (eventCard) {
eventCard.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
}
}, 300);
}
}
}
function applyLang(l) {
const t = translations[l];
document.documentElement.lang = l;
if(document.getElementById('page-title')) document.getElementById('page-title').textContent = t.title;
if(document.getElementById('subtitle')) document.getElementById('subtitle').textContent = t.subtitle;
const langIcon = document.getElementById('langIcon');
const langText = document.getElementById('langText');
const flagMap = {
'de': 'de.svg',
'en': 'gb.svg',
'tr': 'tr.svg'
};
langIcon.src = `events/images/${flagMap[l] || 'de.svg'}`;
langIcon.alt = l.toUpperCase();
langText.textContent = t.label;
updateActiveEventLabels(t.activeLabel);
updateEventContent('underworld', t.events.underworld);
updateEventContent('king', t.events.king);
updateEventContent('seer', t.events.seer);
if (window.eventModules) {
if (window.eventModules.treasure) {
window.eventModules.treasure.updateContent(t.events.treasure);
}
if (window.eventModules.underworld) {
window.eventModules.underworld.updateContent(t.events.underworld);
}
if (window.eventModules.king) {
window.eventModules.king.updateContent(t.events.king);
}
if (window.eventModules.okey) {
window.eventModules.okey.updateContent(t.events.okey);
}
if (window.eventModules.tombola) {
window.eventModules.tombola.updateContent(t.events.tombola);
}
if (window.eventModules.yutnori) {
window.eventModules.yutnori.updateContent(t.events.yutnori);
}
}
}
function updateActiveEventLabels(activeLabel) {
const activeEvents = document.querySelectorAll('.card-active');
activeEvents.forEach(eventCard => {
eventCard.setAttribute('data-active', activeLabel);
});
}
function updateEventContent(eventKey, eventData) {
const titleElement = document.getElementById(`event-${eventKey}-title`);
if (titleElement) titleElement.textContent = eventData.title;
const summaryElement = document.getElementById(`event-${eventKey}-summary`);
if (summaryElement) summaryElement.innerHTML = eventData.summary;
const descTitleElement = document.getElementById(`${eventKey}-desc-title`);
if (descTitleElement) descTitleElement.textContent = eventData.descTitle;
const descElement = document.getElementById(`${eventKey}-desc`);
if (descElement) {
const tempDiv = document.createElement('div');
tempDiv.innerHTML = eventData.desc;
while (descElement.firstChild) {
descElement.removeChild(descElement.firstChild);
}
while (tempDiv.firstChild) {
descElement.appendChild(tempDiv.firstChild);
}
}
const tipsTitleElement = document.getElementById(`${eventKey}-tips-title`);
if (tipsTitleElement) tipsTitleElement.textContent = eventData.tipsTitle;
const tipsElement = document.getElementById(`${eventKey}-tips`);
if (tipsElement) {
while (tipsElement.firstChild) {
tipsElement.removeChild(tipsElement.firstChild);
}
eventData.tips.forEach(tip => {
const li = document.createElement('li');
li.innerHTML = tip;
tipsElement.appendChild(li);
});
}
const noteElement = document.getElementById(`${eventKey}-note`);
if (noteElement && eventData.note) {
const tempDiv = document.createElement('div');
tempDiv.innerHTML = eventData.note;
while (noteElement.firstChild) {
noteElement.removeChild(noteElement.firstChild);
}
while (tempDiv.firstChild) {
noteElement.appendChild(tempDiv.firstChild);
}
}
}
function setupLanguageToggle() {
const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');
const langButtons = document.querySelectorAll('[data-lang]');
langBtn.addEventListener('click', function() {
langMenu.classList.toggle('hidden');
});
document.addEventListener('click', function(e) {
if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
langMenu.classList.add('hidden');
}
});
langButtons.forEach(button => {
button.addEventListener('click', function() {
const selectedLang = this.getAttribute('data-lang');
setLang(selectedLang);
langMenu.classList.add('hidden');
});
});
}
function sortEventCards() {
const eventsContainer = document.querySelector('#events-main') || document.querySelector('main');
const eventCards = Array.from(eventsContainer.querySelectorAll('.event-card'));
eventCards.sort((a, b) => {
const aIsActive = a.classList.contains('card-active');
const bIsActive = b.classList.contains('card-active');
if (aIsActive && !bIsActive) return -1;
if (!aIsActive && bIsActive) return 1;
return 0;
});
eventCards.forEach(card => {
eventsContainer.appendChild(card);
});
}
document.addEventListener('DOMContentLoaded', function() {
if(document.getElementById('year')) document.getElementById('year').textContent = new Date().getFullYear();
setupLanguageToggle();
const savedLang = getLang();
applyLang(savedLang);
const initialLanguageEvent = new CustomEvent('languageChanged', {
detail: { language: savedLang }
});
document.dispatchEvent(initialLanguageEvent);
sortEventCards();
handleInitialHash();
window.addEventListener('hashchange', handleHashChange);
window.addEventListener('storage', function(e) {
if (e.key === 'lang' && e.newValue) {
const newLang = getLang();
applyLang(newLang);
const storageLanguageEvent = new CustomEvent('languageChanged', {
detail: { language: newLang }
});
document.dispatchEvent(storageLanguageEvent);
}
});
});