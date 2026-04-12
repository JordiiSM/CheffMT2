function initUnderworldEvent() {
}
function updateUnderworldContent(eventData) {
const descElement = document.getElementById('underworld-desc');
if (descElement && eventData.desc) {
descElement.innerHTML = eventData.desc;
}
const mechanicsTitleElement = document.getElementById('underworld-mechanics-title');
if (mechanicsTitleElement && eventData.mechanicsTitle) {
const titleContainer = document.createElement('div');
titleContainer.className = 'ev-king-two-col';
const leftDiv = document.createElement('div');
leftDiv.className = 'ev-king-left';
const titleDiv = document.createElement('h3');
titleDiv.className = 'font-bold mb-2';
titleDiv.innerHTML = eventData.mechanicsTitle;
leftDiv.appendChild(titleDiv);
if (eventData.mechanicsDesc && eventData.mechanicsDesc[0]) {
const firstP = document.createElement('p');
firstP.className = 'mb-3 font-normal';
firstP.style.fontWeight = 'normal';
firstP.innerHTML = eventData.mechanicsDesc[0];
leftDiv.appendChild(firstP);
}
const imageContainer = document.createElement('div');
imageContainer.className = 'ev-king-right-img';
const img = document.createElement('img');
img.src = eventData.imageSrc;
img.alt = eventData.imageAlt;
img.className = 'event-showcase-image w-full h-auto rounded-lg border border-[#341002]/20 shadow-md';
imageContainer.appendChild(img);
titleContainer.appendChild(leftDiv);
titleContainer.appendChild(imageContainer);
mechanicsTitleElement.innerHTML = '';
mechanicsTitleElement.appendChild(titleContainer);
}
const mechanicsElement = document.getElementById('underworld-mechanics');
if (mechanicsElement && eventData.mechanicsDesc) {
mechanicsElement.innerHTML = '';
if (eventData.mechanicsDesc[1]) {
const p = document.createElement('p');
p.className = 'mb-3';
p.innerHTML = eventData.mechanicsDesc[1];
mechanicsElement.appendChild(p);
}
if (eventData.blackLetterTitle && eventData.blackLetterDesc) {
const blackLetterSection = document.createElement('div');
blackLetterSection.className = 'mt-6 mb-4';
const blackLetterTitle = document.createElement('h4');
blackLetterTitle.className = 'font-bold mb-2';
blackLetterTitle.innerHTML = eventData.blackLetterTitle;
const blackLetterDesc = document.createElement('p');
blackLetterDesc.className = 'mb-3';
blackLetterDesc.innerHTML = eventData.blackLetterDesc;
blackLetterSection.appendChild(blackLetterTitle);
blackLetterSection.appendChild(blackLetterDesc);
mechanicsElement.appendChild(blackLetterSection);
}
if (eventData.mechanicsDesc[2]) {
const p = document.createElement('p');
p.className = 'mb-3';
p.innerHTML = eventData.mechanicsDesc[2];
mechanicsElement.appendChild(p);
}
if (eventData.waterOfLifeTitle && eventData.waterOfLifeDesc && eventData.blackLetterTableHeader) {
const waterSection = createWaterOfLifePurityTable(
eventData.waterOfLifeTitle,
eventData.waterOfLifeDesc,
eventData.blackLetterTableHeader,
eventData.blackLetterTableValues,
eventData.tableHeaderDeaths,
eventData.tableHeaderWater
);
mechanicsElement.appendChild(waterSection);
}
if (eventData.mechanicsDesc[3]) {
const p = document.createElement('p');
p.className = 'mb-3';
p.innerHTML = eventData.mechanicsDesc[3];
mechanicsElement.appendChild(p);
}
if (eventData.deathSoulTitle && eventData.deathSoulDesc && eventData.deathSoulTableHeader) {
const deathSoulSection = createDeathSoulPurityTable(
eventData.deathSoulTitle,
eventData.deathSoulDesc,
eventData.deathSoulTableHeader,
eventData.deathSoulTableValues,
eventData.tableHeaderSouls,
eventData.tableHeaderReduction
);
mechanicsElement.appendChild(deathSoulSection);
}
if (eventData.asmodeusKeyTitle && eventData.asmodeusKeyDesc) {
const asmodeusKeySection = document.createElement('div');
asmodeusKeySection.className = 'mt-6 mb-4';
const asmodeusKeyTitle = document.createElement('h4');
asmodeusKeyTitle.className = 'font-bold mb-2';
asmodeusKeyTitle.innerHTML = eventData.asmodeusKeyTitle;
const asmodeusKeyDesc = document.createElement('p');
asmodeusKeyDesc.className = 'mb-3';
asmodeusKeyDesc.innerHTML = eventData.asmodeusKeyDesc;
asmodeusKeySection.appendChild(asmodeusKeyTitle);
asmodeusKeySection.appendChild(asmodeusKeyDesc);
mechanicsElement.appendChild(asmodeusKeySection);
}
if (eventData.phaseTitle && eventData.phaseDesc) {
const phaseSection = document.createElement('div');
phaseSection.className = 'mt-6 mb-4';
const phaseTitle = document.createElement('h4');
phaseTitle.className = 'font-bold mb-2';
phaseTitle.innerHTML = eventData.phaseTitle;
const phaseDesc = document.createElement('p');
phaseDesc.className = 'mb-3';
phaseDesc.innerHTML = eventData.phaseDesc;
phaseSection.appendChild(phaseTitle);
phaseSection.appendChild(phaseDesc);
mechanicsElement.appendChild(phaseSection);
}
}
function createWaterOfLifePurityTable(title, description, tableHeader, tableValues, headerLabel1, headerLabel2) {
const section = document.createElement('div');
section.className = 'mt-6 mb-4';
const sectionTitle = document.createElement('h4');
sectionTitle.className = 'font-bold mb-2';
sectionTitle.innerHTML = title;
const sectionDesc = document.createElement('p');
sectionDesc.className = 'mb-4';
sectionDesc.innerHTML = description;
section.appendChild(sectionTitle);
section.appendChild(sectionDesc);
const tableContainer = document.createElement('div');
tableContainer.className = 'ev-table-center';
tableContainer.style.padding = '0';
const table = document.createElement('table');
table.className = 'purity-flames-table';
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const firstHeader = document.createElement('th');
firstHeader.className = 'table-header-cell';
firstHeader.innerHTML = headerLabel1;
headerRow.appendChild(firstHeader);
tableHeader.forEach(death => {
const th = document.createElement('th');
th.className = 'table-icon-cell';
th.style.color = '#F1D9A3';
th.style.fontWeight = 'bold';
th.innerHTML = death;
headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);
const tbody = document.createElement('tbody');
const dataRow = document.createElement('tr');
const firstCell = document.createElement('td');
firstCell.className = 'table-row-header';
firstCell.innerHTML = headerLabel2;
dataRow.appendChild(firstCell);
tableValues.forEach(water => {
const td = document.createElement('td');
td.className = 'table-number-cell';
td.innerHTML = water;
dataRow.appendChild(td);
});
tbody.appendChild(dataRow);
table.appendChild(tbody);
tableContainer.appendChild(table);
section.appendChild(tableContainer);
return section;
}
function createDeathSoulPurityTable(title, description, tableHeader, tableValues, headerLabel1, headerLabel2) {
const section = document.createElement('div');
section.className = 'mt-6 mb-4';
const sectionTitle = document.createElement('h4');
sectionTitle.className = 'font-bold mb-2';
sectionTitle.innerHTML = title;
const sectionDesc = document.createElement('p');
sectionDesc.className = 'mb-4';
sectionDesc.innerHTML = description;
section.appendChild(sectionTitle);
section.appendChild(sectionDesc);
const tableContainer = document.createElement('div');
tableContainer.className = 'ev-table-center';
tableContainer.style.padding = '0';
const table = document.createElement('table');
table.className = 'purity-flames-table';
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const firstHeader = document.createElement('th');
firstHeader.className = 'table-header-cell';
firstHeader.innerHTML = headerLabel1;
headerRow.appendChild(firstHeader);
tableHeader.forEach(count => {
const th = document.createElement('th');
th.className = 'table-icon-cell';
th.style.color = '#F1D9A3';
th.style.fontWeight = 'bold';
th.innerHTML = count;
headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);
const tbody = document.createElement('tbody');
const dataRow = document.createElement('tr');
const firstCell = document.createElement('td');
firstCell.className = 'table-row-header';
firstCell.innerHTML = headerLabel2;
dataRow.appendChild(firstCell);
tableValues.forEach(reduction => {
const td = document.createElement('td');
td.className = 'table-number-cell';
td.innerHTML = reduction;
dataRow.appendChild(td);
});
tbody.appendChild(dataRow);
table.appendChild(tbody);
tableContainer.appendChild(table);
section.appendChild(tableContainer);
return section;
}
const rewardsTitleElement = document.getElementById('underworld-rewards-title');
if (rewardsTitleElement && eventData.rewardsTitle) {
rewardsTitleElement.innerHTML = eventData.rewardsTitle;
}
const rewardsTableElement = document.querySelector('#underworld-rewards-table .grid');
if (rewardsTableElement && eventData.rewardsTable) {
rewardsTableElement.innerHTML = '';
eventData.rewardsTable.forEach((chest, index) => {
const chestDiv = document.createElement('div');
chestDiv.className = 'ev-chest-card';
const chestTitle = document.createElement('h4');
chestTitle.className = 'ev-chest-title';
chestTitle.textContent = chest.category;
const imageContainer = document.createElement('div');
imageContainer.className = 'ev-chest-img-wrap';
const chestImage = document.createElement('img');
chestImage.src = chest.icon;
chestImage.alt = chest.category;
chestImage.className = 'ev-chest-img';
imageContainer.appendChild(chestImage);
const lootButton = document.createElement('button');
lootButton.className = 'ev-loot-btn';
lootButton.innerHTML = `
<span class="loot-text">Loot</span>
<span class="loot-arrow transition-transform duration-200">▼</span>
`;
const lootContent = document.createElement('div');
lootContent.className = 'ev-loot-content hidden';
lootContent.id = `loot-content-${index}`;
const lootList = document.createElement('div');
lootList.className = 'ev-loot-list';
chest.contents.forEach(item => {
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
chestDiv.appendChild(chestTitle);
chestDiv.appendChild(imageContainer);
chestDiv.appendChild(lootButton);
chestDiv.appendChild(lootContent);
rewardsTableElement.appendChild(chestDiv);
});
if (eventData.rewardsTableNote) {
const noteDiv = document.createElement('div');
noteDiv.className = 'ev-rewards-note';
noteDiv.textContent = eventData.rewardsTableNote;
rewardsTableElement.appendChild(noteDiv);
}
}
}
document.addEventListener('DOMContentLoaded', function() {
initUnderworldEvent();
});
if (typeof window.eventModules === 'undefined') {
window.eventModules = {};
}
window.eventModules.underworld = {
updateContent: updateUnderworldContent
};