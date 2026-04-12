function initTreasureEvent() {
setupTreasureTooltipPositioning();
}
function updateTreasureBasicContent(eventData) {
const titleElement = document.getElementById('event-treasure-title');
if (titleElement) titleElement.textContent = eventData.title;
const summaryElement = document.getElementById('event-treasure-summary');
if (summaryElement) summaryElement.innerHTML = eventData.summary;
const descTitleElement = document.getElementById('treasure-desc-title');
if (descTitleElement) descTitleElement.textContent = eventData.descTitle;
const descElement = document.getElementById('treasure-desc');
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
const tipsTitleElement = document.getElementById('treasure-tips-title');
if (tipsTitleElement) tipsTitleElement.textContent = eventData.tipsTitle;
const tipsElement = document.getElementById('treasure-tips');
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
const noteElement = document.getElementById('treasure-note');
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
function updateTreasureContent(eventData) {
updateTreasureBasicContent(eventData);
const huntTitleElement = document.getElementById('treasure-hunt-title');
if (huntTitleElement && eventData.huntTitle) {
huntTitleElement.textContent = eventData.huntTitle;
}
const huntElement = document.getElementById('treasure-hunt');
if (huntElement && eventData.huntDesc) {
while (huntElement.firstChild) {
huntElement.removeChild(huntElement.firstChild);
}
eventData.huntDesc.forEach(paragraph => {
const p = document.createElement('p');
p.className = 'mb-3';
if (paragraph.includes('<strong>') || paragraph.includes('<img')) {
p.innerHTML = paragraph;
} else {
p.textContent = paragraph;
}
huntElement.appendChild(p);
});
setTimeout(setupTreasureTooltipPositioning, 100);
}
const roundRewardsTitleElement = document.getElementById('treasure-round-rewards-title');
if (roundRewardsTitleElement && eventData.roundRewardsTitle) {
roundRewardsTitleElement.textContent = eventData.roundRewardsTitle;
}
const roundRewardsElement = document.getElementById('treasure-round-rewards');
if (roundRewardsElement && eventData.roundRewards) {
while (roundRewardsElement.firstChild) {
roundRewardsElement.removeChild(roundRewardsElement.firstChild);
}
eventData.roundRewards.forEach((paragraph, index) => {
const p = document.createElement('p');
p.className = index === eventData.roundRewards.length - 1 ? 'mb-4' : 'mb-2';
if (paragraph.includes('<strong>') || paragraph.includes('<img')) {
p.innerHTML = paragraph;
} else {
p.textContent = paragraph;
}
roundRewardsElement.appendChild(p);
});
if (eventData.roundRewardsTable) {
const tableContainer = document.createElement('div');
tableContainer.className = 'ev-treasure-wrap';
tableContainer.id = 'treasure-round-rewards-table';
const grid = document.createElement('div');
grid.className = 'ev-treasure-grid';
for (let roundIndex = 0; roundIndex < 9 && roundIndex < eventData.roundRewardsTable.rounds.length; roundIndex++) {
const roundData = eventData.roundRewardsTable.rounds[roundIndex];
const roundDiv = document.createElement('div');
roundDiv.className = 'ev-treasure-round-card';
const roundTitle = document.createElement('h5');
roundTitle.className = 'ev-treasure-round-title';
const roundLabel = getLang() === 'de' ? 'Runde' : getLang() === 'en' ? 'Round' : getLang() === 'es' ? 'Ronda' : 'Tur';
roundTitle.textContent = `${roundLabel} ${roundData.number}`;
roundDiv.appendChild(roundTitle);
const rewardsDiv = document.createElement('div');
rewardsDiv.className = 'ev-treasure-rewards-list';
roundData.rewards.forEach(reward => {
const rewardDiv = document.createElement('div');
rewardDiv.className = 'ev-treasure-reward-item';
if (reward.tooltip) {
rewardDiv.className = 'ev-treasure-reward-item treasure-ticket-highlight';
const tooltipDiv = document.createElement('div');
tooltipDiv.className = 'tooltip';
tooltipDiv.innerHTML = reward.tooltip;
rewardDiv.appendChild(tooltipDiv);
}
const img = document.createElement('img');
img.src = `https://m2-helper.com/resources/events/${reward.icon}`;
img.alt = reward.name;
img.className = 'ev-reward-icon';
const span = document.createElement('span');
span.className = 'ev-reward-name';
span.textContent = reward.name;
rewardDiv.appendChild(img);
rewardDiv.appendChild(span);
rewardsDiv.appendChild(rewardDiv);
});
roundDiv.appendChild(rewardsDiv);
grid.appendChild(roundDiv);
}
tableContainer.appendChild(grid);
const round10Div = document.createElement('div');
round10Div.className = 'ev-treasure-round10';
const round10Title = document.createElement('h5');
round10Title.className = 'ev-treasure-round10-title';
round10Title.textContent = eventData.roundRewardsTable.round10.title;
round10Div.appendChild(round10Title);
const round10Grid = document.createElement('div');
round10Grid.className = 'ev-treasure-round10-grid';
eventData.roundRewardsTable.round10.rewards.forEach(reward => {
const rewardDiv = document.createElement('div');
rewardDiv.className = 'ev-treasure-reward-item';
if (reward.tooltip) {
rewardDiv.className = 'ev-treasure-reward-item treasure-ticket-highlight';
const tooltipDiv = document.createElement('div');
tooltipDiv.className = 'tooltip';
tooltipDiv.innerHTML = reward.tooltip;
rewardDiv.appendChild(tooltipDiv);
}
const img = document.createElement('img');
img.src = `https://m2-helper.com/resources/events/${reward.icon}`;
img.alt = reward.name;
img.className = 'ev-reward-icon';
const span = document.createElement('span');
span.className = 'ev-reward-name';
span.textContent = reward.name;
rewardDiv.appendChild(img);
rewardDiv.appendChild(span);
round10Grid.appendChild(rewardDiv);
});
round10Div.appendChild(round10Grid);
tableContainer.appendChild(round10Div);
roundRewardsElement.appendChild(tableContainer);
}
}
setTimeout(setupTreasureTooltipPositioning, 50);
}
function setupTreasureTooltipPositioning() {
const highlights = document.querySelectorAll('.treasure-ticket-highlight');
highlights.forEach(highlight => {
const tooltip = highlight.querySelector('.tooltip');
if (!tooltip) return;
highlight.removeEventListener('mouseenter', highlight._tooltipMouseEnter);
highlight.removeEventListener('mouseleave', highlight._tooltipMouseLeave);
highlight._tooltipMouseEnter = function() {
setTimeout(() => {
const tooltipRect = tooltip.getBoundingClientRect();
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
tooltip.style.left = '';
tooltip.style.right = '';
tooltip.style.top = '';
tooltip.style.bottom = '';
tooltip.style.transform = '';
tooltip.classList.remove('tooltip-above');
if (tooltipRect.right > viewportWidth - 10) {
tooltip.style.left = 'auto';
tooltip.style.right = '0';
tooltip.style.transform = 'none';
} else if (tooltipRect.left < 10) {
tooltip.style.left = '0';
tooltip.style.transform = 'none';
}
if (tooltipRect.bottom > viewportHeight - 10) {
tooltip.style.top = 'auto';
tooltip.style.bottom = '100%';
tooltip.style.marginTop = '0';
tooltip.style.marginBottom = '0.5rem';
tooltip.classList.add('tooltip-above');
}
}, 50);
};
highlight._tooltipMouseLeave = function() {
setTimeout(() => {
tooltip.style.left = '';
tooltip.style.right = '';
tooltip.style.top = '';
tooltip.style.bottom = '';
tooltip.style.transform = '';
tooltip.style.marginTop = '';
tooltip.style.marginBottom = '';
tooltip.classList.remove('tooltip-above');
}, 300);
};
highlight.addEventListener('mouseenter', highlight._tooltipMouseEnter);
highlight.addEventListener('mouseleave', highlight._tooltipMouseLeave);
});
}
document.addEventListener('DOMContentLoaded', function() {
initTreasureEvent();
const observer = new MutationObserver(function(mutations) {
let shouldResetup = false;
mutations.forEach(function(mutation) {
if (mutation.type === 'childList') {
mutation.addedNodes.forEach(function(node) {
if (node.nodeType === 1) {
if (node.classList && node.classList.contains('treasure-ticket-highlight') ||
node.querySelector && node.querySelector('.treasure-ticket-highlight')) {
shouldResetup = true;
}
}
});
}
});
if (shouldResetup) {
setTimeout(setupTreasureTooltipPositioning, 50);
}
});
const treasureContent = document.getElementById('treasure-island-content');
if (treasureContent) {
observer.observe(treasureContent, {
childList: true,
subtree: true
});
}
});
if (typeof window.eventModules === 'undefined') {
window.eventModules = {};
}
window.eventModules.treasure = {
updateContent: updateTreasureContent
};