window.tombolaInstances = {
'summer-2025': {
sortByPoints: false,
selectedPrizes: [],
prizeData: null,
canvasIconPositions: []
},
'winter-2025': {
sortByPoints: false,
selectedPrizes: [],
prizeData: null,
canvasIconPositions: []
},
'easter-2026': {
sortByPoints: false,
selectedPrizes: [],
prizeData: null,
canvasIconPositions: []
}
};
function updateTombolaContent(eventData) {
const eventKey = 'tombola';
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
const pricesTitleElement = document.getElementById(`${eventKey}-prices-title`);
if (pricesTitleElement && eventData.tombolaPricesTitle) {
pricesTitleElement.textContent = eventData.tombolaPricesTitle;
}
const pricesElement = document.getElementById(`${eventKey}-prices`);
if (pricesElement && eventData.tombolaPrices) {
const tempDiv = document.createElement('div');
tempDiv.innerHTML = eventData.tombolaPrices;
while (pricesElement.firstChild) {
pricesElement.removeChild(pricesElement.firstChild);
}
while (tempDiv.firstChild) {
pricesElement.appendChild(tempDiv.firstChild);
}
}
const symbolsTitleElement = document.getElementById(`${eventKey}-symbols-title`);
if (symbolsTitleElement && eventData.tombolaSymbolsTitle) {
symbolsTitleElement.textContent = eventData.tombolaSymbolsTitle;
}
const symbolsElement = document.getElementById(`${eventKey}-symbols`);
if (symbolsElement && eventData.tombolaSymbols) {
const tempDiv = document.createElement('div');
tempDiv.innerHTML = eventData.tombolaSymbols;
while (symbolsElement.firstChild) {
symbolsElement.removeChild(symbolsElement.firstChild);
}
while (tempDiv.firstChild) {
symbolsElement.appendChild(tempDiv.firstChild);
}
}
const symbolsTableElement = document.getElementById(`${eventKey}-symbols-table`);
if (symbolsTableElement && eventData.tombolaSummer2025SymbolsTable) {
const gridContainer = symbolsTableElement.querySelector('.grid');
if (gridContainer) {
while (gridContainer.firstChild) {
gridContainer.removeChild(gridContainer.firstChild);
}
eventData.tombolaSummer2025SymbolsTable.forEach(symbol => {
const symbolDiv = document.createElement('div');
symbolDiv.className = 'text-center flex-shrink-0';
const symbolImg = document.createElement('img');
symbolImg.src = symbol.icon;
symbolImg.alt = symbol.name;
symbolImg.className = 'w-18 h-18 sm:w-24 sm:h-24 mx-auto mb-1 rounded flex-shrink-0';
const symbolPoints = document.createElement('div');
symbolPoints.textContent = symbol.points;
symbolPoints.className = 'text-sm font-bold';
const symbolProbability = document.createElement('div');
symbolProbability.textContent = symbol.probability;
symbolProbability.className = 'text-xs text-gray-800 mt-1 text-center';
symbolDiv.appendChild(symbolImg);
symbolDiv.appendChild(symbolPoints);
symbolDiv.appendChild(symbolProbability);
gridContainer.appendChild(symbolDiv);
});
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
setupTombolaInstance('summer-2025', eventData.tombolaSummer2025PrizeTable, eventData.tombolaSummer2025SymbolsTable, eventData, false);
setupTombolaInstance('winter-2025', eventData.tombolaWinter2025PrizeTable, eventData.tombolaWinter2025SymbolsTable, eventData, false);
setupTombolaInstance('easter-2026', eventData.tombolaEaster2026PrizeTable, eventData.tombolaEaster2026SymbolsTable, eventData, true);
}
function setupTombolaInstance(instanceId, prizeTable, symbolsTable, eventData, isOpenByDefault) {
const titleElement = document.getElementById(`tombola-${instanceId}-title`);
if (titleElement) {
const keyMap = { 'summer-2025': 'tombolaSummer2025SectionTitle', 'winter-2025': 'tombolaWinter2025SectionTitle', 'easter-2026': 'tombolaEaster2026SectionTitle' };
const key = keyMap[instanceId] || 'tombolaWinter2025SectionTitle';
titleElement.textContent = eventData[key];
}
setupTombolaToggle(instanceId, isOpenByDefault, prizeTable, symbolsTable);
setupSortToggle(instanceId, prizeTable);
setupResetButton(instanceId, prizeTable);
setupPrizeSelection(instanceId, prizeTable, eventData);
if (isOpenByDefault) {
updateDistributionChart(instanceId, prizeTable, symbolsTable);
}
}
function setupTombolaToggle(instanceId, isOpenByDefault, prizeTable, symbolsTable) {
const btn = document.getElementById(`tombola-${instanceId}-toggle`);
const content = document.getElementById(`tombola-${instanceId}-content`);
const arrow = document.getElementById(`tombola-${instanceId}-arrow`);
if (!btn || !content || !arrow) return;
if (isOpenByDefault) {
content.classList.remove('hidden');
arrow.style.transform = 'rotate(180deg)';
} else {
content.classList.add('hidden');
arrow.style.transform = 'rotate(0deg)';
}
const newBtn = btn.cloneNode(true);
btn.parentNode.replaceChild(newBtn, btn);
const button = document.getElementById(`tombola-${instanceId}-toggle`);
const arrowEl = document.getElementById(`tombola-${instanceId}-arrow`);
const contentEl = document.getElementById(`tombola-${instanceId}-content`);
button.addEventListener('click', () => {
const isHidden = contentEl.classList.contains('hidden');
if (isHidden) {
contentEl.classList.remove('hidden');
arrowEl.style.transform = 'rotate(180deg)';
setTimeout(() => {
updateDistributionChart(instanceId, prizeTable, symbolsTable);
}, 100);
} else {
contentEl.classList.add('hidden');
arrowEl.style.transform = 'rotate(0deg)';
}
});
}
function calculatePointDistribution() {
const symbols = [
{ points: 1, probability: 0.06 },
{ points: 3, probability: 0.135 },
{ points: 5, probability: 0.216 },
{ points: 7, probability: 0.371 },
{ points: 10, probability: 0.145 },
{ points: 15, probability: 0.073 }
];
const pointCounts = {};
for (let i = 0; i < symbols.length; i++) {
for (let j = 0; j < symbols.length; j++) {
for (let k = 0; k < symbols.length; k++) {
const total = symbols[i].points + symbols[j].points + symbols[k].points;
const combinedProbability = symbols[i].probability * symbols[j].probability * symbols[k].probability;
pointCounts[total] = (pointCounts[total] || 0) + combinedProbability;
}
}
}
return pointCounts;
}
function updateDistributionChart(instanceId, prizeTable, symbolsTable) {
const canvas = document.getElementById(`tombola-${instanceId}-canvas`);
if (!canvas) return;
const ctx = canvas.getContext('2d');
const pointDistribution = calculatePointDistribution();
const rect = canvas.getBoundingClientRect();
const dpr = window.devicePixelRatio || 1;
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;
canvas.style.width = rect.width + 'px';
canvas.style.height = rect.height + 'px';
ctx.scale(dpr, dpr);
ctx.clearRect(0, 0, rect.width, rect.height);
const chartWidth = rect.width - 100;
const chartHeight = rect.height - 120;
const startX = 60;
const startY = 20;
const prizeDistribution = [];
for (const prize of prizeTable) {
let totalProbability = 0;
if (prize.pointRange.includes('-')) {
const [min, max] = prize.pointRange.split('-').map(Number);
for (let point = min; point <= max; point++) {
if (pointDistribution[point]) {
totalProbability += pointDistribution[point];
}
}
} else {
const point = Number(prize.pointRange);
if (pointDistribution[point]) {
totalProbability = pointDistribution[point];
}
}
if (totalProbability > 0) {
prizeDistribution.push({
prize: prize.prize,
pointRange: prize.pointRange,
icon: prize.icon,
probability: totalProbability
});
}
}
const sortByPoints = window.tombolaInstances[instanceId].sortByPoints || false;
if (sortByPoints) {
prizeDistribution.sort((a, b) => {
const getMinPoints = (range) => {
if (range.includes('-')) return Number(range.split('-')[0]);
return Number(range);
};
return getMinPoints(a.pointRange) - getMinPoints(b.pointRange);
});
} else {
prizeDistribution.sort((a, b) => b.probability - a.probability);
}
const maxProbability = Math.max(...prizeDistribution.map(p => p.probability));
ctx.fillStyle = '#000000';
ctx.font = 'bold 13px Arial';
ctx.textAlign = 'right';
ctx.textBaseline = 'middle';
const maxPercentage = maxProbability * 100;
for (let i = 0; i <= 5; i++) {
const percentage = (maxPercentage / 5) * i;
const y = startY + chartHeight - (i / 5) * chartHeight;
ctx.fillText(`${percentage.toFixed(1)}%`, startX - 10, y);
ctx.strokeStyle = '#666666';
ctx.globalAlpha = 0.3;
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(startX, y);
ctx.lineTo(startX + chartWidth, y);
ctx.stroke();
}
ctx.globalAlpha = 1;
ctx.strokeStyle = '#000000';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(startX, startY);
ctx.lineTo(startX, startY + chartHeight);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(startX, startY + chartHeight);
ctx.lineTo(startX + chartWidth, startY + chartHeight);
ctx.stroke();
const barWidth = chartWidth / prizeDistribution.length * 0.8;
const barSpacing = chartWidth / prizeDistribution.length;
const barPositions = [];
prizeDistribution.forEach((prizeData, index) => {
const barHeight = (prizeData.probability / maxProbability) * chartHeight;
const x = startX + (index * barSpacing) + (barSpacing - barWidth) / 2;
const y = startY + chartHeight - barHeight;
ctx.fillStyle = '#5D0505';
ctx.fillRect(x, y, barWidth, barHeight);
ctx.strokeStyle = '#000000';
ctx.lineWidth = 1;
ctx.strokeRect(x, y, barWidth, barHeight);
barPositions.push({
x: x,
y: y,
width: barWidth,
height: barHeight,
prizeData: prizeData
});
});
let tooltip = document.getElementById(`tombola-${instanceId}-tooltip`);
if (!tooltip) {
tooltip = document.createElement('div');
tooltip.id = `tombola-${instanceId}-tooltip`;
tooltip.className = 'fixed bg-[#341002] text-[#F1D9A3] px-3 py-2 rounded-lg text-xs shadow-xl border border-[#5D0505] pointer-events-none z-50 opacity-0 transition-opacity duration-200';
tooltip.style.maxWidth = '180px';
tooltip.style.whiteSpace = 'normal';
tooltip.style.lineHeight = '1.3';
document.body.appendChild(tooltip);
}
canvas.style.cursor = 'default';
canvas.onmousemove = function(event) {
const canvasRect = canvas.getBoundingClientRect();
const mouseX = event.clientX - canvasRect.left;
const mouseY = event.clientY - canvasRect.top;
let hoveredItem = null;
for (const bar of barPositions) {
if (mouseX >= bar.x && mouseX <= bar.x + bar.width &&
mouseY >= bar.y && mouseY <= bar.y + bar.height) {
hoveredItem = bar;
break;
}
}
if (!hoveredItem && window.tombolaInstances[instanceId].canvasIconPositions) {
for (const iconPos of window.tombolaInstances[instanceId].canvasIconPositions) {
if (mouseX >= iconPos.x && mouseX <= iconPos.x + iconPos.width &&
mouseY >= iconPos.y && mouseY <= iconPos.y + iconPos.height + 15) {
hoveredItem = {
prizeData: iconPos.prizeData
};
break;
}
}
}
if (hoveredItem) {
canvas.style.cursor = 'pointer';
const prizeData = hoveredItem.prizeData;
const currentLang = getLang();
const t = translations[currentLang];
tooltip.innerHTML = `
<div style="text-align: center;">
<div style="font-size: 12px; font-weight: bold; margin-bottom: 2px; color: #FECE58;">${prizeData.prize}</div>
<div style="font-size: 11px; margin-bottom: 1px; opacity: 0.9;">${prizeData.pointRange} ${t.events.tombola.tombolaTooltipPoints}</div>
<div style="font-size: 11px; font-weight: bold; color: #FECE58;">${t.events.tombola.tombolaTooltipProbability}: ${(prizeData.probability * 100).toFixed(2)}%</div>
</div>
`;
tooltip.style.left = `${event.clientX + 15}px`;
tooltip.style.top = `${event.clientY - 60}px`;
tooltip.style.opacity = '1';
} else {
canvas.style.cursor = 'default';
tooltip.style.opacity = '0';
}
};
canvas.onmouseleave = function() {
tooltip.style.opacity = '0';
canvas.style.cursor = 'default';
};
const isMobile = window.innerWidth <= 768;
const iconSize = isMobile ? 16 : 28;
const iconSpacing = chartWidth / prizeDistribution.length;
window.tombolaInstances[instanceId].canvasIconPositions = [];
const drawIcons = async () => {
prizeDistribution.forEach((prizeData, index) => {
const iconX = startX + (index * iconSpacing) + (iconSpacing / 2) - (iconSize / 2);
const iconY = startY + chartHeight + 10;
const originalIndex = prizeTable.findIndex(p =>
p.prize === prizeData.prize && p.pointRange === prizeData.pointRange
);
window.tombolaInstances[instanceId].canvasIconPositions.push({
x: iconX,
y: iconY,
width: iconSize,
height: iconSize,
prizeData: prizeData,
originalIndex: originalIndex,
displayIndex: index
});
try {
const img = new Image();
img.onload = function() {
const isSelected = window.tombolaInstances[instanceId].selectedPrizes.includes(originalIndex);
if (isSelected) {
ctx.strokeStyle = '#22c55e';
ctx.lineWidth = isMobile ? 2 : 3;
ctx.strokeRect(iconX - 2, iconY - 2, iconSize + 4, iconSize + 4);
}
ctx.drawImage(img, iconX, iconY, iconSize, iconSize);
if (isSelected) {
const checkmarkSize = isMobile ? 7 : 10;
const checkmarkFontSize = isMobile ? 6 : 8;
ctx.fillStyle = '#22c55e';
ctx.fillRect(iconX + iconSize - (checkmarkSize - 1), iconY - 2, checkmarkSize, checkmarkSize);
ctx.fillStyle = 'white';
ctx.font = `bold ${checkmarkFontSize}px Arial`;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
const checkmarkOffset = isMobile ? 2 : 3;
ctx.fillText('✓', iconX + iconSize - checkmarkOffset - 1, iconY + checkmarkOffset);
}
ctx.fillStyle = '#000000';
ctx.font = isMobile ? 'bold 5px Arial' : 'bold 11px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'top';
ctx.fillText(prizeData.pointRange, iconX + iconSize/2, iconY + iconSize + 1);
};
img.src = prizeData.icon;
} catch (error) {
console.warn('Could not load icon:', prizeData.icon);
}
});
};
canvas.onclick = function(event) {
const canvasRect = canvas.getBoundingClientRect();
const mouseX = event.clientX - canvasRect.left;
const mouseY = event.clientY - canvasRect.top;
if (window.tombolaInstances[instanceId].canvasIconPositions) {
for (const iconPos of window.tombolaInstances[instanceId].canvasIconPositions) {
if (mouseX >= iconPos.x && mouseX <= iconPos.x + iconPos.width &&
mouseY >= iconPos.y && mouseY <= iconPos.y + iconPos.height) {
toggleCanvasIconSelection(instanceId, iconPos.originalIndex, prizeTable);
break;
}
}
}
};
setTimeout(drawIcons, 100);
}
function setupSortToggle(instanceId, prizeTable) {
const toggleButton = document.getElementById(`tombola-${instanceId}-sort`);
const toggleText = document.getElementById(`tombola-${instanceId}-sort-text`);
if (!toggleButton || !toggleText) return;
const currentLang = getLang();
const t = translations[currentLang];
const newButton = toggleButton.cloneNode(true);
toggleButton.parentNode.replaceChild(newButton, toggleButton);
const button = document.getElementById(`tombola-${instanceId}-sort`);
const text = document.getElementById(`tombola-${instanceId}-sort-text`);
if (window.tombolaInstances[instanceId].sortByPoints) {
text.textContent = t.events.tombola.tombolaSortByProbability;
} else {
text.textContent = t.events.tombola.tombolaSortByPoints;
}
button.addEventListener('click', function() {
window.tombolaInstances[instanceId].sortByPoints = !window.tombolaInstances[instanceId].sortByPoints;
if (window.tombolaInstances[instanceId].sortByPoints) {
text.textContent = t.events.tombola.tombolaSortByProbability;
} else {
text.textContent = t.events.tombola.tombolaSortByPoints;
}
const symbolsTable = instanceId === 'summer-2025' ?
translations[currentLang].events.tombola.tombolaSummer2025SymbolsTable :
instanceId === 'winter-2025' ?
translations[currentLang].events.tombola.tombolaWinter2025SymbolsTable :
translations[currentLang].events.tombola.tombolaEaster2026SymbolsTable;
updateDistributionChart(instanceId, prizeTable, symbolsTable);
});
}
function setupResetButton(instanceId, prizeTable) {
const resetButton = document.getElementById(`tombola-${instanceId}-reset`);
if (!resetButton) return;
const newButton = resetButton.cloneNode(true);
resetButton.parentNode.replaceChild(newButton, resetButton);
const button = document.getElementById(`tombola-${instanceId}-reset`);
button.addEventListener('click', function() {
window.tombolaInstances[instanceId].selectedPrizes = [];
updateSelectionStats(instanceId, []);
const currentLang = getLang();
const symbolsTable = instanceId === 'summer-2025' ?
translations[currentLang].events.tombola.tombolaSummer2025SymbolsTable :
instanceId === 'winter-2025' ?
translations[currentLang].events.tombola.tombolaWinter2025SymbolsTable :
translations[currentLang].events.tombola.tombolaEaster2026SymbolsTable;
updateDistributionChart(instanceId, prizeTable, symbolsTable);
});
}
function setupPrizeSelection(instanceId, prizeTable, eventData) {
const currentLang = getLang();
const t = translations[currentLang];
const descriptionElement = document.getElementById(`tombola-${instanceId}-selection-desc`);
const chanceLabel = document.getElementById(`tombola-${instanceId}-talisman-label`);
const realCostLabel = document.getElementById(`tombola-${instanceId}-cost-label`);
if (descriptionElement) descriptionElement.textContent = t.events.tombola.tombolaSelectionDescription;
if (chanceLabel) chanceLabel.textContent = t.events.tombola.tombolaTalismanChanceLabel;
if (realCostLabel) realCostLabel.textContent = t.events.tombola.tombolaRealCostLabel;
window.tombolaInstances[instanceId].prizeData = prizeTable;
updateSelectionStats(instanceId, []);
}
function toggleCanvasIconSelection(instanceId, prizeIndex, prizeTable) {
if (window.tombolaInstances[instanceId].selectedPrizes.includes(prizeIndex)) {
window.tombolaInstances[instanceId].selectedPrizes =
window.tombolaInstances[instanceId].selectedPrizes.filter(i => i !== prizeIndex);
} else {
window.tombolaInstances[instanceId].selectedPrizes.push(prizeIndex);
}
const selectedPrizeData = window.tombolaInstances[instanceId].selectedPrizes.map(i => prizeTable[i]);
updateSelectionStats(instanceId, selectedPrizeData);
const currentLang = getLang();
const symbolsTable = instanceId === 'summer-2025' ?
translations[currentLang].events.tombola.tombolaSummer2025SymbolsTable :
instanceId === 'winter-2025' ?
translations[currentLang].events.tombola.tombolaWinter2025SymbolsTable :
translations[currentLang].events.tombola.tombolaEaster2026SymbolsTable;
updateDistributionChart(instanceId, prizeTable, symbolsTable);
}
function updateSelectionStats(instanceId, selectedPrizes) {
const pointDistribution = calculatePointDistribution();
const statsContainer = document.getElementById(`tombola-${instanceId}-stats`);
const chanceNote = document.getElementById(`tombola-${instanceId}-chance-note`);
if (selectedPrizes.length === 0) {
if (statsContainer) {
statsContainer.classList.add('opacity-0', 'max-h-0');
statsContainer.classList.remove('opacity-100', 'max-h-96');
}
if (chanceNote) {
chanceNote.textContent = '';
}
return;
}
if (statsContainer) {
statsContainer.classList.remove('opacity-0', 'max-h-0');
statsContainer.classList.add('opacity-100', 'max-h-96');
}
let totalProbability = 0;
for (const prize of selectedPrizes) {
if (prize.pointRange.includes('-')) {
const [min, max] = prize.pointRange.split('-').map(Number);
for (let point = min; point <= max; point++) {
if (pointDistribution[point]) {
totalProbability += pointDistribution[point];
}
}
} else {
const point = Number(prize.pointRange);
if (pointDistribution[point]) {
totalProbability += pointDistribution[point];
}
}
}
const attemptsFor50Percent = Math.ceil(Math.log(1 - 0.50) / Math.log(1 - totalProbability));
const attemptsFor75Percent = Math.ceil(Math.log(1 - 0.75) / Math.log(1 - totalProbability));
const attemptsFor90Percent = Math.ceil(Math.log(1 - 0.90) / Math.log(1 - totalProbability));
const costFor50 = Math.max(0, (attemptsFor50Percent - 1) * 6);
const costFor75 = Math.max(0, (attemptsFor75Percent - 1) * 6);
const costFor90 = Math.max(0, (attemptsFor90Percent - 1) * 6);
const chanceElement = document.getElementById(`tombola-${instanceId}-talisman-chance`);
const cost50Element = document.getElementById(`tombola-${instanceId}-cost-50`);
const cost75Element = document.getElementById(`tombola-${instanceId}-cost-75`);
const cost90Element = document.getElementById(`tombola-${instanceId}-cost-90`);
if (chanceElement) {
chanceElement.textContent = `${(totalProbability * 100).toFixed(2)}%`;
}
const formatCost = (cost) => {
const currentLang = getLang();
let currency = 'DR';
if (currentLang === 'en') {
currency = 'DC';
} else if (currentLang === 'tr') {
currency = 'EP';
}
if (cost > 1000) {
return `${(cost / 1000).toFixed(1)}k ${currency}`;
} else {
return `${cost} ${currency}`;
}
};
if (cost50Element) cost50Element.textContent = formatCost(costFor50);
if (cost75Element) cost75Element.textContent = formatCost(costFor75);
if (cost90Element) cost90Element.textContent = formatCost(costFor90);
if (chanceNote) {
const currentLang = getLang();
const t = translations[currentLang];
chanceNote.textContent = t.events.tombola.tombolaChanceNote.replace('X', '50/75/90');
}
}
function initializeTombola() {
console.log('Tombola event initialized');
}
function calculateTombolaRewards() {
console.log('Tombola calculations would be implemented here');
}
function displayTombolaStats() {
console.log('Tombola statistics would be displayed here');
}
if (!window.eventModules) {
window.eventModules = {};
}
window.eventModules.tombola = {
updateContent: updateTombolaContent,
initialize: initializeTombola,
calculateRewards: calculateTombolaRewards,
displayStats: displayTombolaStats
};
if (typeof module !== 'undefined' && module.exports) {
module.exports = {
updateContent: updateTombolaContent,
initializeTombola,
calculateTombolaRewards,
displayTombolaStats
};
}