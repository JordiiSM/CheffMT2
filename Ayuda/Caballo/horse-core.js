const expNeeded = [12500, 12810, 13130, 13440, 14060, 14380, 14690, 15000, 18750, 37500, 48800, 63490, 66930, 82620, 107510, 139890, 182030, 236860, 308200];
const wheatExp = 225;
const wheatStackExp = 200 * wheatExp;
const wheatStackCostFlashSale = 349;
const horseCareSetCost = 399;
const horseCareSetCostFlashSale = 199;
const horseCareSetWheatAmount = 50;
const levelUpSuccessRate = 0.5;
const wheatPerLevelUpAttempt = 50;
const gayaPerFailureLow = 50;
const gayaPerFailureHigh = 100;
let currentLang = 'de';
document.addEventListener('DOMContentLoaded', function() {
const savedLang = localStorage.getItem('lang');
if (savedLang && ['de', 'en', 'tr'].includes(savedLang)) {
currentLang = savedLang;
}
populateLevelOptions();
setupEventListeners();
setupLanguageToggle();
document.getElementById('year').textContent = new Date().getFullYear();
const langIcon = document.getElementById('langIcon');
const langText = document.getElementById('langText');
const langConfig = {
de: { icon: '🇩🇪', text: 'Deutsch' },
en: { icon: '🇬🇧', text: 'English' },
tr: { icon: '🇹🇷', text: 'Türkçe' }
};
langIcon.textContent = langConfig[currentLang].icon;
langText.textContent = langConfig[currentLang].text;
updatePageLanguage();
});
function populateLevelOptions() {
const startLevelSelect = document.getElementById('startLevel');
const targetLevelSelect = document.getElementById('targetLevel');
startLevelSelect.innerHTML = '';
targetLevelSelect.innerHTML = '';
for (let level = 21; level <= 40; level++) {
const startOption = document.createElement('option');
startOption.value = level;
startOption.textContent = level;
startLevelSelect.appendChild(startOption);
const targetOption = document.createElement('option');
targetOption.value = level;
targetOption.textContent = level;
targetLevelSelect.appendChild(targetOption);
}
startLevelSelect.value = 21;
targetLevelSelect.value = 40;
}
function setupEventListeners() {
const calculateBtn = document.getElementById('calculate-btn');
const startLevelSelect = document.getElementById('startLevel');
const targetLevelSelect = document.getElementById('targetLevel');
calculateBtn.addEventListener('click', calculateHorseLevel);
startLevelSelect.addEventListener('change', function() {
updateTargetLevelOptions();
});
}
function updateTargetLevelOptions() {
const startLevel = parseInt(document.getElementById('startLevel').value);
const targetLevelSelect = document.getElementById('targetLevel');
targetLevelSelect.innerHTML = '';
for (let level = startLevel + 1; level <= 40; level++) {
const option = document.createElement('option');
option.value = level;
option.textContent = level;
targetLevelSelect.appendChild(option);
}
if (targetLevelSelect.options.length > 0) {
targetLevelSelect.value = targetLevelSelect.options[0].value;
}
}
function calculateLevelUpCosts(startLevel, targetLevel) {
let totalWheat = 0;
let totalGaya = 0;
for (let level = startLevel; level < targetLevel; level++) {
const expectedAttempts = 1 / levelUpSuccessRate;
totalWheat += expectedAttempts * wheatPerLevelUpAttempt;
const expectedFailures = expectedAttempts - 1;
if (expectedFailures > 0) {
const firstFailureCost = level >= 30 ? 100 : 50;
const additionalFailures = Math.max(0, expectedFailures - 1);
const additionalFailureCost = additionalFailures * 100;
totalGaya += firstFailureCost + additionalFailureCost;
}
}
return {
wheat: Math.round(totalWheat),
wheatStacks: totalWheat / 200,
gaya: Math.round(totalGaya),
flashSaleCost: Math.ceil(totalWheat / 200) * wheatStackCostFlashSale,
careSetCost: Math.ceil(totalWheat / horseCareSetWheatAmount) * horseCareSetCost,
careSetFlashSaleCost: Math.ceil(totalWheat / horseCareSetWheatAmount) * horseCareSetCostFlashSale
};
}
function calculateHorseLevel() {
const startLevel = parseInt(document.getElementById('startLevel').value);
const targetLevel = parseInt(document.getElementById('targetLevel').value);
if (startLevel >= targetLevel) {
const t = translations[currentLang];
alert(t.errorMessage);
return;
}
const startIndex = startLevel - 21;
const endIndex = targetLevel - 21;
let totalExp = 0;
for (let i = startIndex; i < endIndex; i++) {
totalExp += expNeeded[i];
}
const requiredStacksExact = totalExp / wheatStackExp;
const requiredStacks = Math.ceil(requiredStacksExact);
const flashSaleCost = requiredStacks * wheatStackCostFlashSale;
const expPerCareSet = horseCareSetWheatAmount * wheatExp;
const careSetsNeeded = Math.ceil(totalExp / expPerCareSet);
const careSetTotalCost = careSetsNeeded * horseCareSetCost;
const careSetFlashSaleTotalCost = careSetsNeeded * horseCareSetCostFlashSale;
const levelUpCosts = calculateLevelUpCosts(startLevel, targetLevel);
displayResults(totalExp, requiredStacksExact, flashSaleCost, careSetTotalCost, careSetFlashSaleTotalCost, levelUpCosts);
}
function displayResults(totalExp, requiredStacksExact, flashSaleCost, careSetCost, careSetFlashSaleCost, levelUpCosts) {
const resultsSection = document.getElementById('results');
resultsSection.classList.remove('hidden');
const t = translations[currentLang];
const currency = currentLang === 'tr' ? ' EP' : ' DR';
const totalWheatFromExp = totalExp / wheatExp;
const totalWheatNeeded = totalWheatFromExp + levelUpCosts.wheat;
const avgDailyWheat = 24.5;
const daysNeeded = Math.ceil(totalWheatNeeded / avgDailyWheat);
const totalStacks = requiredStacksExact + levelUpCosts.wheatStacks;
const totalCareSetCost = careSetCost + levelUpCosts.careSetCost;
const totalCareSetFlashSaleCost = careSetFlashSaleCost + levelUpCosts.careSetFlashSaleCost;
const totalFlashSaleCost = flashSaleCost + levelUpCosts.flashSaleCost;
document.getElementById('needed-exp').textContent = totalExp.toLocaleString();
document.getElementById('needed-stacks').textContent = requiredStacksExact.toFixed(1);
document.getElementById('levelup-wheat-stacks').textContent = levelUpCosts.wheatStacks.toFixed(1);
document.getElementById('levelup-gaya').textContent = levelUpCosts.gaya.toLocaleString();
document.getElementById('total-stacks').textContent = totalStacks.toFixed(1);
document.getElementById('careset-feeding-cost').textContent = careSetCost.toLocaleString() + currency;
document.getElementById('careset-levelup-cost').textContent = levelUpCosts.careSetCost.toLocaleString() + currency;
document.getElementById('careset-total-cost').textContent = totalCareSetCost.toLocaleString() + currency;
document.getElementById('careset-fs-feeding-cost').textContent = careSetFlashSaleCost.toLocaleString() + currency;
document.getElementById('careset-fs-levelup-cost').textContent = levelUpCosts.careSetFlashSaleCost.toLocaleString() + currency;
document.getElementById('careset-fs-total-cost').textContent = totalCareSetFlashSaleCost.toLocaleString() + currency;
document.getElementById('flashsale-feeding-cost').textContent = flashSaleCost.toLocaleString() + currency;
document.getElementById('flashsale-levelup-cost').textContent = levelUpCosts.flashSaleCost.toLocaleString() + currency;
document.getElementById('flashsale-total-cost').textContent = totalFlashSaleCost.toLocaleString() + currency;
const boxes = [
{ id: 'box-careset', total: totalCareSetCost },
{ id: 'box-careset-fs', total: totalCareSetFlashSaleCost },
{ id: 'box-flashsale', total: totalFlashSaleCost }
];
const minCost = Math.min(...boxes.map(b => b.total));
boxes.forEach(b => {
const el = document.getElementById(b.id);
if (b.total === minCost) {
el.style.border = '3px solid #FECE58';
el.style.boxShadow = '0 0 12px rgba(254, 206, 88, 0.4)';
} else {
el.style.border = '';
el.style.boxShadow = '';
}
});
resultsSection.dataset.daysNeeded = daysNeeded;
resultsSection.dataset.totalWheatStacks = (totalWheatNeeded / 200).toFixed(1);
updatePageLanguage();
resultsSection.scrollIntoView({ behavior: 'smooth' });
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
const lang = this.getAttribute('data-lang');
changeLanguage(lang);
langMenu.classList.add('hidden');
});
});
}
function changeLanguage(lang) {
currentLang = lang;
localStorage.setItem('lang', lang);
const langIcon = document.getElementById('langIcon');
const langText = document.getElementById('langText');
const langConfig = {
de: { icon: '🇩🇪', text: 'Deutsch' },
en: { icon: '🇬🇧', text: 'English' },
tr: { icon: '🇹🇷', text: 'Türkçe' }
};
langIcon.textContent = langConfig[lang].icon;
langText.textContent = langConfig[lang].text;
updatePageLanguage();
}
function updatePageLanguage() {
const t = translations[currentLang];
document.getElementById('lbl-startLevel').textContent = t.startLevel;
document.getElementById('lbl-targetLevel').textContent = t.targetLevel;
document.getElementById('calculate-btn').textContent = t.calculate;
document.getElementById('page-title').textContent = t.title;
const sectionDesc = document.getElementById('horse-section-desc');
if (sectionDesc) sectionDesc.textContent = t.sectionDesc;
const championNote = document.getElementById('champion-note');
if (championNote) {
championNote.textContent = t.championNote;
}
const wikiNote = document.getElementById('wiki-note');
const wikiLink = document.getElementById('wiki-link');
const wikiUrls = {
de: 'https://de.wiki.metin2.gameforge.com/index.php/Pferd',
en: 'https://en.wiki.metin2.gameforge.com/index.php/Horse',
tr: 'https://tr-wiki.metin2.gameforge.com/index.php/Binicilik'
};
if (wikiNote) {
wikiNote.innerHTML = `${t.wikiNote} <a id="wiki-link" href="${wikiUrls[currentLang]}" target="_blank" class="text-[#5D0505] hover:text-[#FECE58] font-semibold underline">${t.wikiText}</a>.`;
}
const resultsSection = document.getElementById('results');
if (!resultsSection.classList.contains('hidden')) {
const currency = currentLang === 'tr' ? ' EP' : ' DR';
document.getElementById('results-title').textContent = t.results;
const horseFeedText = document.getElementById('horsefeed-text');
if (horseFeedText) horseFeedText.textContent = t.horseFeed;
const thNeededExp = document.getElementById('th-needed-exp');
if (thNeededExp) thNeededExp.textContent = t.neededExp;
const thNeededStacks = document.getElementById('th-needed-stacks');
if (thNeededStacks) thNeededStacks.textContent = t.neededStacks;
const thLevelUpWheatStacks = document.getElementById('th-levelup-wheat-stacks');
if (thLevelUpWheatStacks) thLevelUpWheatStacks.textContent = t.levelUpWheatStacks;
const thLevelUpGaya = document.getElementById('th-levelup-gaya');
if (thLevelUpGaya) thLevelUpGaya.textContent = t.levelUpGaya;
const thTotalStacks = document.getElementById('th-total-stacks');
if (thTotalStacks) thTotalStacks.textContent = t.totalStacks;
const costsCaresetText = document.getElementById('costs-careset-text');
if (costsCaresetText) costsCaresetText.textContent = t.costsCareSet;
const costsCaresetFsText = document.getElementById('costs-careset-fs-text');
if (costsCaresetFsText) costsCaresetFsText.textContent = t.costsCareSetFlashSale;
const costsFlashsaleText = document.getElementById('costs-flashsale-text');
if (costsFlashsaleText) costsFlashsaleText.textContent = t.costsFlashSale;
const feedingIds = ['th-careset-feeding', 'th-careset-fs-feeding', 'th-flashsale-feeding'];
const levelupIds = ['th-careset-levelup', 'th-careset-fs-levelup', 'th-flashsale-levelup'];
const totalIds = ['th-careset-total', 'th-careset-fs-total', 'th-flashsale-total'];
feedingIds.forEach(id => {
const el = document.getElementById(id);
if (el) el.textContent = t.costFeeding;
});
levelupIds.forEach(id => {
const el = document.getElementById(id);
if (el) el.textContent = t.costLevelUp;
});
totalIds.forEach(id => {
const el = document.getElementById(id);
if (el) el.textContent = t.costTotal;
});
const costValueIds = [
'careset-feeding-cost', 'careset-levelup-cost', 'careset-total-cost',
'careset-fs-feeding-cost', 'careset-fs-levelup-cost', 'careset-fs-total-cost',
'flashsale-feeding-cost', 'flashsale-levelup-cost', 'flashsale-total-cost'
];
costValueIds.forEach(id => {
const el = document.getElementById(id);
if (el && el.textContent && el.textContent !== '-') {
const value = el.textContent.replace(/ (DR|EP)$/, '');
el.textContent = value + currency;
}
});
const notesSection = document.getElementById('notes-section');
if (notesSection) {
let noteContent = `<strong>${t.notes}</strong><br>${t.noteText}`;
const daysNeeded = resultsSection.dataset.daysNeeded;
const totalWheatStacks = resultsSection.dataset.totalWheatStacks;
if (daysNeeded && totalWheatStacks) {
noteContent += `${t.questNote} ${totalWheatStacks} ${t.wheatUnit} = ~${daysNeeded} ${t.daysUnit}`;
}
notesSection.innerHTML = noteContent;
}
}
}