function initYutnoriEvent() {
initYutnoriHelper();
updatePuzzlePiecesLabel();
}
function updateYutnoriBasicContent(eventData) {
const titleElement = document.getElementById('event-yutnori-title');
if (titleElement) titleElement.textContent = eventData.title;
const summaryElement = document.getElementById('event-yutnori-summary');
if (summaryElement) summaryElement.innerHTML = eventData.summary;
const descTitleElement = document.getElementById('yutnori-desc-title');
if (descTitleElement) descTitleElement.textContent = eventData.descTitle;
const descElement = document.getElementById('yutnori-desc');
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
const tipsTitleElement = document.getElementById('yutnori-tips-title');
if (tipsTitleElement) tipsTitleElement.textContent = eventData.tipsTitle;
const tipsElement = document.getElementById('yutnori-tips');
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
const noteElement = document.getElementById('yutnori-note');
if (noteElement) {
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
function updateYutnoriGameplayContent(eventData) {
const gameplayTitleElement = document.getElementById('yutnori-gameplay-title');
if (gameplayTitleElement && eventData.gameplayTitle) {
gameplayTitleElement.textContent = eventData.gameplayTitle;
}
const gameplayElement = document.getElementById('yutnori-gameplay');
if (gameplayElement && eventData.gameplayDesc) {
while (gameplayElement.firstChild) {
gameplayElement.removeChild(gameplayElement.firstChild);
}
eventData.gameplayDesc.forEach(paragraph => {
const p = document.createElement('p');
p.className = 'mb-3';
if (paragraph.includes('<strong>') || paragraph.includes('<img')) {
p.innerHTML = paragraph;
} else {
p.textContent = paragraph;
}
gameplayElement.appendChild(p);
});
}
if (eventData.gameplayImage) {
const yutnoriSection = document.getElementById('yutnori-content');
if (yutnoriSection) {
const yutnoriImage = yutnoriSection.querySelector('.event-showcase-image');
const yutnoriCaption = yutnoriSection.querySelector('.event-showcase-image + p');
if (yutnoriImage) {
yutnoriImage.src = eventData.gameplayImage.src;
yutnoriImage.alt = eventData.gameplayImage.alt;
}
if (yutnoriCaption) {
yutnoriCaption.textContent = eventData.gameplayImage.caption;
}
}
}
const probabilityTitleElement = document.getElementById('yutnori-probability-title');
if (probabilityTitleElement && eventData.probabilityTitle) {
probabilityTitleElement.textContent = eventData.probabilityTitle;
}
const probabilityDescElement = document.getElementById('yutnori-probability-desc');
if (probabilityDescElement && eventData.probabilityDesc) {
probabilityDescElement.textContent = eventData.probabilityDesc;
}
const probabilityTableElement = document.getElementById('yutnori-probability-table');
if (probabilityTableElement && eventData.probabilityTable) {
while (probabilityTableElement.firstChild) {
probabilityTableElement.removeChild(probabilityTableElement.firstChild);
}
const tableContainer = document.createElement('div');
tableContainer.className = 'flex justify-center mb-4';
const table = document.createElement('table');
table.className = 'purity-flames-table';
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const firstHeader = document.createElement('th');
firstHeader.className = 'table-header-cell';
firstHeader.innerHTML = eventData.probabilityTableHeaders ? eventData.probabilityTableHeaders.throws : 'Wurf';
headerRow.appendChild(firstHeader);
eventData.probabilityTable.forEach(item => {
const throwHeader = document.createElement('th');
throwHeader.className = 'table-icon-cell';
throwHeader.style.color = '#F1D9A3';
throwHeader.style.fontWeight = 'bold';
throwHeader.innerHTML = item.throw;
headerRow.appendChild(throwHeader);
});
thead.appendChild(headerRow);
table.appendChild(thead);
const tbody = document.createElement('tbody');
const dataRow = document.createElement('tr');
const firstCell = document.createElement('td');
firstCell.className = 'table-row-header';
firstCell.innerHTML = eventData.probabilityTableHeaders ? eventData.probabilityTableHeaders.rowLabel : 'Züge';
dataRow.appendChild(firstCell);
eventData.probabilityTable.forEach(item => {
const moveCell = document.createElement('td');
moveCell.className = 'table-number-cell';
moveCell.innerHTML = item.moves;
dataRow.appendChild(moveCell);
});
tbody.appendChild(dataRow);
table.appendChild(tbody);
tableContainer.appendChild(table);
probabilityTableElement.appendChild(tableContainer);
}
const goalTitleElement = document.getElementById('yutnori-goal-title');
if (goalTitleElement && eventData.goalTitle) {
goalTitleElement.textContent = eventData.goalTitle;
}
const goalDescElement = document.getElementById('yutnori-goal-desc');
if (goalDescElement && eventData.goalDesc) {
if (eventData.goalDesc.includes('<strong>') || eventData.goalDesc.includes('<img')) {
goalDescElement.innerHTML = eventData.goalDesc;
} else {
goalDescElement.textContent = eventData.goalDesc;
}
}
}
function updateYutnoriRewardsContent(eventData) {
const rewardsTitleElement = document.getElementById('yutnori-rewards-title');
if (rewardsTitleElement && eventData.rewardsTitle) {
rewardsTitleElement.textContent = eventData.rewardsTitle;
}
const rewardsElement = document.getElementById('yutnori-rewards');
if (rewardsElement && eventData.rewardsTable) {
while (rewardsElement.firstChild) {
rewardsElement.removeChild(rewardsElement.firstChild);
}
const tableContainer = document.createElement('div');
tableContainer.className = 'ev-treasure-wrap';
tableContainer.id = 'yutnori-rewards-table';
eventData.rewardsTable.versions.forEach(version => {
const versionDiv = document.createElement('div');
versionDiv.className = 'mb-4 last:mb-0';
const versionTitle = document.createElement('h5');
versionTitle.className = 'ev-okey-version-title';
versionTitle.textContent = version.name;
versionDiv.appendChild(versionTitle);
const chestsGrid = document.createElement('div');
chestsGrid.className = 'rewards-grid-custom';
version.chests.forEach((chest, index) => {
const chestDiv = document.createElement('div');
chestDiv.className = 'ev-chest-card';
const pointsTitle = document.createElement('h6');
pointsTitle.className = 'ev-chest-header';
pointsTitle.textContent = chest.points;
chestDiv.appendChild(pointsTitle);
const chestContent = document.createElement('div');
chestContent.className = 'ev-chest-content';
const imgContainer = document.createElement('div');
imgContainer.className = 'ev-relative';
const chestImage = document.createElement('img');
chestImage.src = chest.icon;
chestImage.alt = chest.name;
chestImage.className = 'ev-chest-img';
const chestName = document.createElement('span');
chestName.className = 'ev-chest-name';
chestName.textContent = chest.name;
imgContainer.appendChild(chestImage);
chestContent.appendChild(imgContainer);
chestContent.appendChild(chestName);
const lootContainer = document.createElement('div');
lootContainer.className = 'ev-loot-wrap';
const lootButton = document.createElement('button');
lootButton.className = 'ev-loot-btn';
lootButton.innerHTML = `
<span class="loot-text">Loot</span>
<span class="loot-arrow transition-transform duration-200">▼</span>
`;
if ((chest.contents && chest.contents.length > 0) || (chest.lootList && chest.lootList.length > 0)) {
const lootContent = document.createElement('div');
lootContent.className = 'ev-loot-content hidden';
const isYutnoriChest = chest.name && (chest.name.includes('Yutnori-Trophäe') || chest.name.includes('Yutnori Trophy'));
if (isYutnoriChest) {
const raetselsplitterSection = document.createElement('div');
raetselsplitterSection.className = 'ev-raetsel-section';
const raetselsplitterItem = document.createElement('div');
raetselsplitterItem.className = 'ev-loot-item';
const itemInfo = document.createElement('div');
itemInfo.className = 'ev-item-info';
const itemIcon = document.createElement('img');
itemIcon.src = 'Events/images/Rätselsplitter.png';
itemIcon.alt = getPuzzlePiecesTranslation();
itemIcon.className = 'ev-item-icon-lg';
const itemName = document.createElement('span');
itemName.className = 'ev-item-name';
itemName.textContent = getPuzzlePiecesTranslation();
itemInfo.appendChild(itemIcon);
itemInfo.appendChild(itemName);
const itemChance = document.createElement('span');
itemChance.className = 'ev-item-chance';
if (chest.name.includes('Silberne') || chest.name.includes('Silver')) {
itemChance.textContent = '?%';
} else if (chest.name.includes('Goldene') || chest.name.includes('Golden')) {
itemChance.textContent = '100%';
} else {
itemChance.textContent = '?%';
}
raetselsplitterItem.appendChild(itemInfo);
raetselsplitterItem.appendChild(itemChance);
raetselsplitterSection.appendChild(raetselsplitterItem);
const plusSymbol = document.createElement('div');
plusSymbol.className = 'ev-plus-wrap';
plusSymbol.innerHTML = '<span class="ev-plus-icon">+</span>';
raetselsplitterSection.appendChild(plusSymbol);
lootContent.appendChild(raetselsplitterSection);
}
const lootList = document.createElement('div');
lootList.className = 'ev-loot-list';
const itemsToDisplay = chest.contents || chest.lootList || [];
itemsToDisplay.forEach(item => {
const lootItem = document.createElement('div');
lootItem.className = 'ev-loot-item';
const itemInfo = document.createElement('div');
itemInfo.className = 'ev-item-info';
const itemIcon = document.createElement('img');
itemIcon.src = item.icon;
itemIcon.alt = item.name;
itemIcon.className = 'ev-item-icon';
const itemName = document.createElement('span');
itemName.className = 'ev-item-name';
itemName.textContent = item.name;
itemInfo.appendChild(itemIcon);
itemInfo.appendChild(itemName);
const itemChance = document.createElement('span');
itemChance.className = 'ev-item-chance';
itemChance.textContent = item.probability;
lootItem.appendChild(itemInfo);
lootItem.appendChild(itemChance);
lootList.appendChild(lootItem);
});
lootContent.appendChild(lootList);
lootButton.addEventListener('click', () => {
const isHidden = lootContent.classList.contains('hidden');
const arrow = lootButton.querySelector('.loot-arrow');
if (isHidden) {
lootContent.classList.remove('hidden');
arrow.style.transform = 'rotate(180deg)';
} else {
lootContent.classList.add('hidden');
arrow.style.transform = 'rotate(0deg)';
}
});
lootContainer.appendChild(lootButton);
lootContainer.appendChild(lootContent);
} else {
const contentDiv = document.createElement('div');
contentDiv.className = 'ev-loot-content-anim';
contentDiv.style.maxHeight = '0px';
contentDiv.style.padding = '0';
contentDiv.innerHTML = chest.content || '<p style="padding:12px;font-size:12px;">Loot-Details folgen bald...</p>';
lootButton.addEventListener('click', function() {
const arrow = lootButton.querySelector('.loot-arrow');
if (contentDiv.style.maxHeight === '0px') {
contentDiv.style.maxHeight = contentDiv.scrollHeight + 'px';
contentDiv.style.padding = '12px';
arrow.style.transform = 'rotate(180deg)';
} else {
contentDiv.style.maxHeight = '0px';
contentDiv.style.padding = '0';
arrow.style.transform = 'rotate(0deg)';
}
});
lootContainer.appendChild(lootButton);
lootContainer.appendChild(contentDiv);
}
chestContent.appendChild(lootContainer);
chestDiv.appendChild(chestContent);
chestsGrid.appendChild(chestDiv);
});
versionDiv.appendChild(chestsGrid);
tableContainer.appendChild(versionDiv);
});
if (eventData.rewardsTableNote) {
const tableNoteP = document.createElement('p');
tableNoteP.className = 'ev-rewards-note';
tableNoteP.textContent = eventData.rewardsTableNote;
tableContainer.appendChild(tableNoteP);
}
rewardsElement.appendChild(tableContainer);
}
if (eventData.rewardsNote) {
const noteP = document.createElement('p');
noteP.className = 'mt-4';
noteP.innerHTML = eventData.rewardsNote;
rewardsElement.appendChild(noteP);
}
}
function updateYutnoriPuzzleChests(eventData) {
if (!eventData.puzzleChests) return;
const dropdownLabelElement = document.getElementById('yutnori-puzzle-chests-label');
if (dropdownLabelElement) {
dropdownLabelElement.textContent = eventData.puzzleChests.dropdownLabel;
}
const selectedChestTitleElement = document.getElementById('yutnori-selected-chest-title');
if (selectedChestTitleElement) {
selectedChestTitleElement.textContent = eventData.puzzleChests.selectedChestTitle;
}
const lootToggleTextElement = document.getElementById('yutnori-loot-toggle-text');
if (lootToggleTextElement) {
lootToggleTextElement.textContent = eventData.puzzleChests.collapsibleLabel;
}
const dropdownText = document.getElementById('yutnori-chest-dropdown-text');
if (dropdownText) {
dropdownText.textContent = `-- ${eventData.puzzleChests.dropdownLabel.replace(':', '')} --`;
}
const dropdownMenu = document.getElementById('yutnori-chest-dropdown-menu');
if (dropdownMenu && eventData.puzzleChests.chests) {
while (dropdownMenu.firstChild) {
dropdownMenu.removeChild(dropdownMenu.firstChild);
}
eventData.puzzleChests.chests.forEach(chest => {
const option = document.createElement('div');
option.className = 'px-4 py-2 hover:bg-[#FECE58] cursor-pointer transition-colors flex items-center gap-3';
option.setAttribute('data-chest-id', chest.id);
const icon = document.createElement('img');
icon.src = chest.icon;
icon.alt = chest.name;
icon.className = 'w-6 h-6 object-contain flex-shrink-0';
const name = document.createElement('span');
name.textContent = chest.name;
name.className = 'text-sm font-medium';
option.appendChild(icon);
option.appendChild(name);
option.addEventListener('click', () => {
handleChestSelection({ target: { value: chest.id } });
closeDropdown();
});
dropdownMenu.appendChild(option);
});
initCustomDropdown();
}
initLootToggle();
}
function handleChestSelection(event) {
const selectedChestId = event.target.value;
const selectedChestContainer = document.getElementById('yutnori-selected-chest');
if (!selectedChestId) {
selectedChestContainer.classList.add('hidden');
currentSelectedChestId = null;
return;
}
currentSelectedChestId = selectedChestId;
const currentLang = getCurrentLanguage();
const currentTranslations = translations[currentLang];
if (!currentTranslations || !currentTranslations.events || !currentTranslations.events.yutnori || !currentTranslations.events.yutnori.puzzleChests) {
console.error('Puzzle chests translations not found for language:', currentLang);
return;
}
const selectedChest = currentTranslations.events.yutnori.puzzleChests.chests.find(chest => chest.id === selectedChestId);
if (!selectedChest) {
console.error('Selected chest not found:', selectedChestId);
return;
}
const dropdownText = document.getElementById('yutnori-chest-dropdown-text');
if (dropdownText) {
dropdownText.textContent = selectedChest.name;
}
const chestIcon = document.getElementById('yutnori-selected-chest-icon');
const chestName = document.getElementById('yutnori-selected-chest-name');
const chestPieces = document.getElementById('yutnori-selected-chest-pieces');
if (chestIcon) {
chestIcon.src = selectedChest.icon;
chestIcon.alt = selectedChest.name;
}
if (chestName) {
chestName.textContent = selectedChest.name;
}
if (chestPieces) {
chestPieces.textContent = selectedChest.puzzlePieces;
}
selectedChestContainer.classList.remove('hidden');
updatePuzzleChestLootList(selectedChest);
const lootList = document.getElementById('yutnori-loot-list');
const lootArrow = document.getElementById('yutnori-loot-arrow');
if (lootList) {
lootList.classList.add('hidden');
}
if (lootArrow) {
lootArrow.style.transform = 'rotate(0deg)';
}
}
function initLootToggle() {
const lootToggle = document.getElementById('yutnori-loot-toggle');
if (lootToggle) {
lootToggle.removeEventListener('click', handleLootToggle);
lootToggle.addEventListener('click', handleLootToggle);
}
}
function handleLootToggle() {
const lootList = document.getElementById('yutnori-loot-list');
const lootArrow = document.getElementById('yutnori-loot-arrow');
if (lootList && lootArrow) {
const isHidden = lootList.classList.contains('hidden');
if (isHidden) {
lootList.classList.remove('hidden');
lootArrow.style.transform = 'rotate(180deg)';
} else {
lootList.classList.add('hidden');
lootArrow.style.transform = 'rotate(0deg)';
}
}
}
function initCustomDropdown() {
const dropdownBtn = document.getElementById('yutnori-chest-dropdown-btn');
const dropdownMenu = document.getElementById('yutnori-chest-dropdown-menu');
const dropdownArrow = document.getElementById('yutnori-chest-dropdown-arrow');
if (dropdownBtn && dropdownMenu && dropdownArrow) {
dropdownBtn.removeEventListener('click', toggleDropdown);
dropdownBtn.addEventListener('click', toggleDropdown);
document.addEventListener('click', (event) => {
if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
closeDropdown();
}
});
}
}
function toggleDropdown() {
const dropdownMenu = document.getElementById('yutnori-chest-dropdown-menu');
const dropdownArrow = document.getElementById('yutnori-chest-dropdown-arrow');
if (dropdownMenu && dropdownArrow) {
const isHidden = dropdownMenu.classList.contains('hidden');
if (isHidden) {
dropdownMenu.classList.remove('hidden');
dropdownArrow.style.transform = 'rotate(180deg)';
} else {
dropdownMenu.classList.add('hidden');
dropdownArrow.style.transform = 'rotate(0deg)';
}
}
}
function closeDropdown() {
const dropdownMenu = document.getElementById('yutnori-chest-dropdown-menu');
const dropdownArrow = document.getElementById('yutnori-chest-dropdown-arrow');
if (dropdownMenu && dropdownArrow) {
dropdownMenu.classList.add('hidden');
dropdownArrow.style.transform = 'rotate(0deg)';
}
}
function updateYutnoriSecretCalculator(eventData) {
if (!eventData.secretCalculator) return;
const calculatorTitleElement = document.getElementById('yutnori-calculator-title');
if (calculatorTitleElement) {
calculatorTitleElement.textContent = eventData.secretCalculator.title;
}
const minutesLabelElement = document.getElementById('yutnori-minutes-label');
if (minutesLabelElement) {
minutesLabelElement.textContent = eventData.secretCalculator.minutesLabel;
}
const secretsLabelElement = document.getElementById('yutnori-secrets-label');
if (secretsLabelElement) {
secretsLabelElement.textContent = eventData.secretCalculator.secretsLabel;
}
const calculateBtnElement = document.getElementById('yutnori-calculate-btn');
if (calculateBtnElement) {
calculateBtnElement.textContent = eventData.secretCalculator.calculateBtn;
}
const resultLabelElement = document.getElementById('yutnori-result-label');
if (resultLabelElement) {
resultLabelElement.textContent = eventData.secretCalculator.resultLabel;
}
initSecretCalculator();
}
function initSecretCalculator() {
const calculateBtn = document.getElementById('yutnori-calculate-btn');
const minutesInput = document.getElementById('yutnori-minutes-input');
const secretsInput = document.getElementById('yutnori-secrets-input');
if (calculateBtn && minutesInput && secretsInput) {
calculateBtn.removeEventListener('click', calculateSecrets);
calculateBtn.addEventListener('click', calculateSecrets);
minutesInput.removeEventListener('keypress', handleEnterKey);
secretsInput.removeEventListener('keypress', handleEnterKey);
minutesInput.addEventListener('keypress', handleEnterKey);
secretsInput.addEventListener('keypress', handleEnterKey);
}
}
function handleEnterKey(event) {
if (event.key === 'Enter') {
calculateSecrets();
}
}
function calculateSecrets() {
const minutesInput = document.getElementById('yutnori-minutes-input');
const secretsInput = document.getElementById('yutnori-secrets-input');
const resultDiv = document.getElementById('yutnori-result');
const resultValue = document.getElementById('yutnori-result-value');
if (!minutesInput || !secretsInput || !resultDiv || !resultValue) return;
const minutesPerRun = parseInt(minutesInput.value);
const numberOfSecrets = parseInt(secretsInput.value);
if (!minutesPerRun || minutesPerRun < 1) {
alert('Bitte gebe eine gültige Anzahl Minuten pro Run ein (mindestens 1).');
return;
}
if (!numberOfSecrets || numberOfSecrets < 1) {
alert('Bitte gebe eine gültige Anzahl Yutnori-Geheimnisse ein (mindestens 1).');
return;
}
const totalTimeMinutes = numberOfSecrets * 30;
const possibleRuns = Math.floor(totalTimeMinutes / minutesPerRun);
resultValue.textContent = possibleRuns;
resultDiv.classList.remove('hidden');
}
function updatePuzzleChestLootList(chest) {
const lootListContainer = document.getElementById('yutnori-loot-list');
if (!lootListContainer) return;
while (lootListContainer.firstChild) {
lootListContainer.removeChild(lootListContainer.firstChild);
}
if (!chest.lootList || chest.lootList.length === 0) {
const placeholder = document.createElement('p');
placeholder.className = 'text-center text-[#341002]/70 italic';
placeholder.textContent = 'Loot-Liste wird in einem zukünftigen Update hinzugefügt';
lootListContainer.appendChild(placeholder);
return;
}
const lootContainer = document.createElement('div');
lootContainer.className = 'space-y-2';
chest.lootList.forEach(item => {
if (item.isDescription) {
const description = document.createElement('div');
description.className = 'description-text text-center text-[#341002] font-medium mb-4 py-2 px-4 bg-[#F1D9A3]/50 rounded-md border border-[#FECE58]/50';
description.textContent = item.name;
lootContainer.appendChild(description);
return;
}
const lootItem = document.createElement('div');
lootItem.className = 'ev-loot-item';
const itemInfo = document.createElement('div');
itemInfo.className = 'ev-item-info';
const itemIcon = document.createElement('img');
itemIcon.src = item.icon;
itemIcon.alt = item.name;
itemIcon.className = 'ev-item-icon-lg';
const itemName = document.createElement('span');
itemName.className = 'ev-item-name';
itemName.textContent = item.name;
itemInfo.appendChild(itemIcon);
itemInfo.appendChild(itemName);
if (item.probability) {
const itemChance = document.createElement('span');
itemChance.className = 'ev-item-chance';
itemChance.textContent = item.probability;
lootItem.appendChild(itemInfo);
lootItem.appendChild(itemChance);
} else {
lootItem.appendChild(itemInfo);
}
lootContainer.appendChild(lootItem);
});
lootListContainer.appendChild(lootContainer);
}
function getCurrentLanguage() {
return localStorage.getItem('lang') || 'de';
}
function getPuzzlePiecesTranslation() {
const currentLang = getCurrentLanguage();
if (currentLang === 'en') {
return 'Mysterious Shard';
} else if (currentLang === 'tr') {
return 'Puzzle Parçaları';
} else {
return 'Rätselsplitter';
}
}
function updateYutnoriContent(eventData) {
updateYutnoriBasicContent(eventData);
updateYutnoriGameplayContent(eventData);
updateYutnoriRewardsContent(eventData);
updateYutnoriPuzzleChests(eventData);
updateYutnoriSecretCalculator(eventData);
}
function initYutnoriHelper() {
console.log('Yutnori Helper initialized');
}
let currentSelectedChestId = null;
function refreshSelectedChest() {
if (currentSelectedChestId) {
handleChestSelection({ target: { value: currentSelectedChestId } });
}
}
function updatePuzzlePiecesLabel() {
const translatedText = getPuzzlePiecesTranslation();
const puzzlePiecesElements = document.querySelectorAll('[data-translate="puzzle-pieces"]');
puzzlePiecesElements.forEach(el => {
el.textContent = translatedText;
});
const puzzlePiecesAltElements = document.querySelectorAll('[data-translate-alt="puzzle-pieces"]');
puzzlePiecesAltElements.forEach(el => {
el.alt = translatedText;
});
}
function handleYutnoriLanguageChange(event) {
const newLanguage = event.detail.language;
const currentTranslations = translations[newLanguage];
if (!currentTranslations || !currentTranslations.events || !currentTranslations.events.yutnori) {
console.error('Yutnori translations not found for language:', newLanguage);
return;
}
updateYutnoriContent(currentTranslations.events.yutnori);
updatePuzzlePiecesLabel();
refreshSelectedChest();
}
document.addEventListener('DOMContentLoaded', function() {
initYutnoriEvent();
document.addEventListener('languageChanged', handleYutnoriLanguageChange);
});
if (typeof window.eventModules === 'undefined') {
window.eventModules = {};
}
window.eventModules.yutnori = {
updateContent: updateYutnoriContent
};