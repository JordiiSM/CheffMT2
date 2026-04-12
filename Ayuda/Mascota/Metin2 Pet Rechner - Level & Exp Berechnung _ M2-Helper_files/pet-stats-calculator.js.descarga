const PET_STAT_DATA = [
{
hp: { interval: 6, min: 0.1, max: 0.5 },
def: { interval: 8, min: 0.1, max: 0.5 },
mp: { interval: 6, min: 0.1, max: 0.5 }
},
{
hp: { interval: 5, min: 0.2, max: 0.3 },
def: { interval: 7, min: 0.2, max: 0.3 },
mp: { interval: 4, min: 0.2, max: 0.3 }
},
{
hp: { interval: 6, min: 0.1, max: 0.7 },
def: { interval: 8, min: 0.1, max: 0.6 },
mp: { interval: 6, min: 0.1, max: 0.8 }
},
{
hp: { interval: 5, min: 0.3, max: 0.4 },
def: { interval: 7, min: 0.3, max: 0.4 },
mp: { interval: 4, min: 0.3, max: 0.4 }
},
{
hp: { interval: 6, min: 0.1, max: 0.8 },
def: { interval: 8, min: 0.1, max: 0.8 },
mp: { interval: 6, min: 0.1, max: 1.2 }
},
{
hp: { interval: 5, min: 0.5, max: 0.6 },
def: { interval: 7, min: 0.5, max: 0.6 },
mp: { interval: 4, min: 0.5, max: 0.6 }
},
{
hp: { interval: 6, min: 0.1, max: 1.0 },
def: { interval: 8, min: 0.1, max: 1.0 },
mp: { interval: 6, min: 0.1, max: 1.3 }
},
{
hp: { interval: 5, min: 0.5, max: 0.7 },
def: { interval: 7, min: 0.5, max: 0.7 },
mp: { interval: 4, min: 0.5, max: 0.7 }
}
];
const PET_STAT_DATA_MELEY = [
{
hp: { interval: 6, min: 0.2, max: 0.6 },
def: { interval: 8, min: 0.2, max: 0.6 },
mp: { interval: 6, min: 0.2, max: 0.6 }
},
{
hp: { interval: 5, min: 0.3, max: 0.4 },
def: { interval: 7, min: 0.3, max: 0.4 },
mp: { interval: 4, min: 0.3, max: 0.4 }
},
{
hp: { interval: 6, min: 0.2, max: 0.8 },
def: { interval: 8, min: 0.2, max: 0.7 },
mp: { interval: 6, min: 0.2, max: 0.9 }
},
{
hp: { interval: 5, min: 0.4, max: 0.5 },
def: { interval: 7, min: 0.4, max: 0.5 },
mp: { interval: 4, min: 0.4, max: 0.5 }
},
{
hp: { interval: 6, min: 0.2, max: 0.9 },
def: { interval: 8, min: 0.2, max: 0.9 },
mp: { interval: 6, min: 0.2, max: 1.4 }
},
{
hp: { interval: 5, min: 0.6, max: 0.7 },
def: { interval: 7, min: 0.6, max: 0.7 },
mp: { interval: 4, min: 0.6, max: 0.7 }
},
{
hp: { interval: 6, min: 0.2, max: 1.1 },
def: { interval: 8, min: 0.2, max: 1.1 },
mp: { interval: 6, min: 0.2, max: 1.4 }
},
{
hp: { interval: 5, min: 0.6, max: 0.8 },
def: { interval: 7, min: 0.6, max: 0.8 },
mp: { interval: 4, min: 0.6, max: 0.8 }
}
];
function showErrorModal(message) {
const modal = document.getElementById('error-modal');
const overlay = document.getElementById('error-overlay');
const messageEl = document.getElementById('error-modal-message');
if (modal && overlay && messageEl) {
messageEl.textContent = message;
modal.classList.remove('hidden');
overlay.classList.remove('hidden');
}
}
function closeErrorModal() {
const modal = document.getElementById('error-modal');
const overlay = document.getElementById('error-overlay');
if (modal && overlay) {
modal.classList.add('hidden');
overlay.classList.add('hidden');
}
}
function getAgeBonus(age) {
const min = Math.min(Math.floor(age / 100) * 0.1, 0.8);
const max = Math.min(Math.ceil(age / 100) * 0.1, 0.8);
const avg = Math.min(Math.round(age / 100) * 0.1, 0.8);
return { min, max, avg };
}
function calculateImprovementCount(currentLevel, targetLevel, interval) {
return Math.floor(targetLevel / interval) - Math.floor(currentLevel / interval);
}
function calculatePetStatGrowth(currentLevel, targetLevel, petType, currentHP, currentDEF, currentMP, age, isMeley = false) {
const petData = (isMeley ? PET_STAT_DATA_MELEY : PET_STAT_DATA)[petType - 1];
const ageBonus = getAgeBonus(age);
const hpCount = calculateImprovementCount(currentLevel, targetLevel, petData.hp.interval);
const defCount = calculateImprovementCount(currentLevel, targetLevel, petData.def.interval);
const mpCount = calculateImprovementCount(currentLevel, targetLevel, petData.mp.interval);
const results = {
hp: {
min: currentHP + (hpCount * (petData.hp.min + ageBonus.min)),
avg: currentHP + (hpCount * ((petData.hp.min + petData.hp.max) / 2 + ageBonus.avg)),
max: currentHP + (hpCount * (petData.hp.max + ageBonus.max)),
count: hpCount,
effectiveMin: petData.hp.min + ageBonus.min,
effectiveMax: petData.hp.max + ageBonus.max,
currentBase: currentHP
},
def: {
min: currentDEF + (defCount * (petData.def.min + ageBonus.min)),
avg: currentDEF + (defCount * ((petData.def.min + petData.def.max) / 2 + ageBonus.avg)),
max: currentDEF + (defCount * (petData.def.max + ageBonus.max)),
count: defCount,
effectiveMin: petData.def.min + ageBonus.min,
effectiveMax: petData.def.max + ageBonus.max,
currentBase: currentDEF
},
mp: {
min: currentMP + (mpCount * (petData.mp.min + ageBonus.min)),
avg: currentMP + (mpCount * ((petData.mp.min + petData.mp.max) / 2 + ageBonus.avg)),
max: currentMP + (mpCount * (petData.mp.max + ageBonus.max)),
count: mpCount,
effectiveMin: petData.mp.min + ageBonus.min,
effectiveMax: petData.mp.max + ageBonus.max,
currentBase: currentMP
}
};
return results;
}
function renderDynamicBoxplot(results) {
const resultsDiv = document.getElementById('stat-results');
const boxplotContainer = document.getElementById('boxplot-container');
const trans = t[getLang()]?.statCalculator;
const stats = ['hp', 'def', 'mp'];
const statLabels = {
hp: trans?.statLabels?.tp || 'TP',
def: trans?.statLabels?.def || 'Verteidigung',
mp: trans?.statLabels?.mp || 'MP'
};
let boxplotHTML = '<div class="bg-white bg-opacity-40 rounded-lg p-4 pb-8 mb-6">';
stats.forEach(stat => {
const data = results[stat];
const statMin = data.min;
const statMax = data.max;
const range = statMax - statMin;
const padding = range * 0.05;
const scaleMin = Math.max(0, statMin - padding);
const scaleMax = statMax + padding;
const scaleRange = scaleMax - scaleMin;
function getPosition(value) {
return ((value - scaleMin) / scaleRange) * 100;
}
const minPos = getPosition(data.min);
const avgPos = getPosition(data.avg);
const maxPos = getPosition(data.max);
const n = data.count;
let p95_lower, p95_upper, q1Value, q3Value;
if (n <= 1) {
const range = data.max - data.min;
p95_lower = data.min + (range * 0.025);
p95_upper = data.min + (range * 0.975);
q1Value = data.min + (range * 0.25);
q3Value = data.min + (range * 0.75);
} else {
const effectiveRange = data.effectiveMax - data.effectiveMin;
const stdDevAbsolute = effectiveRange * Math.sqrt(n / 12);
p95_lower = data.avg - (1.96 * stdDevAbsolute);
p95_upper = data.avg + (1.96 * stdDevAbsolute);
q1Value = data.avg - (0.6745 * stdDevAbsolute);
q3Value = data.avg + (0.6745 * stdDevAbsolute);
p95_lower = Math.max(data.min, Math.min(data.max, p95_lower));
p95_upper = Math.max(data.min, Math.min(data.max, p95_upper));
q1Value = Math.max(data.min, Math.min(data.max, q1Value));
q3Value = Math.max(data.min, Math.min(data.max, q3Value));
}
const p95_lowerPos = getPosition(p95_lower);
const p95_upperPos = getPosition(p95_upper);
const q1Pos = getPosition(q1Value);
const q3Pos = getPosition(q3Value);
const p95_width = p95_upperPos - p95_lowerPos;
const boxWidth = q3Pos - q1Pos;
const q1Formatted = q1Value.toFixed(1);
const q3Formatted = q3Value.toFixed(1);
const p50_tooltip = `${trans.tooltips.probability50}:<br>${q1Formatted} ${trans.tooltips.range} ${q3Formatted}`;
const p95_tooltip = `${trans.tooltips.probability95}:<br>${p95_lower.toFixed(1)} ${trans.tooltips.range} ${p95_upper.toFixed(1)}`;
boxplotHTML += `
<div class="mb-10 last:mb-0">
<div class="flex items-center mb-3">
<span class="font-bold text-[#5D0505] text-lg">${statLabels[stat]}:</span>
</div>
<div class="relative h-16 bg-gray-50 rounded-lg">
<!-- Min/Max Referenzlinie (dezent, aber sichtbar) -->
<div class="absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-400"
style="left: ${minPos}%; width: ${maxPos - minPos}%"></div>
<!-- Min Whisker -->
<div class="absolute top-1/2 transform -translate-y-1/2 h-8 w-0.5 bg-gray-600 cursor-help group"
style="left: ${minPos}%">
<div class="invisible group-hover:visible absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1.5 rounded text-xs whitespace-nowrap z-10 shadow-lg">
Minimaler Wert: ${data.min.toFixed(1)}
</div>
</div>
<!-- Max Whisker -->
<div class="absolute top-1/2 transform -translate-y-1/2 h-8 w-0.5 bg-gray-600 cursor-help group"
style="left: ${maxPos}%">
<div class="invisible group-hover:visible absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1.5 rounded text-xs whitespace-nowrap z-10 shadow-lg">
Maximaler Wert: ${data.max.toFixed(1)}
</div>
</div>
<!-- 95% Wahrscheinlichkeitsbereich (hell) -->
<div class="absolute top-1/2 transform -translate-y-1/2 h-12 bg-[#5D0505] bg-opacity-10 border border-[#5D0505] border-opacity-30 rounded cursor-help group"
style="left: ${p95_lowerPos}%; width: ${p95_width}%">
<div class="invisible group-hover:visible absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-3 py-1.5 rounded text-xs whitespace-nowrap z-10 shadow-lg">
${p95_tooltip}
</div>
</div>
<!-- 50% Wahrscheinlichkeitsbereich (dunkel) -->
<div class="absolute top-1/2 transform -translate-y-1/2 h-12 bg-[#5D0505] bg-opacity-30 border-2 border-[#5D0505] rounded cursor-help group"
style="left: ${q1Pos}%; width: ${boxWidth}%">
<div class="invisible group-hover:visible absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#5D0505] text-white px-3 py-1.5 rounded text-xs whitespace-nowrap z-10 shadow-lg">
${p50_tooltip}
</div>
</div>
<!-- Median/Mittelwert Linie -->
<div class="absolute top-1/2 transform -translate-y-1/2 h-14 w-0.5 bg-[#5D0505] z-10"
style="left: ${avgPos}%">
</div>
<!-- Value Labels -->
<div class="absolute -bottom-6 text-xs text-gray-700" style="left: ${minPos}%; transform: translateX(-50%)">
${data.min.toFixed(1)}
</div>
<div class="absolute -bottom-6 text-xs font-bold text-[#5D0505]" style="left: ${avgPos}%; transform: translateX(-50%)">
${data.avg.toFixed(1)}
</div>
<div class="absolute -bottom-6 text-xs text-gray-700" style="left: ${maxPos}%; transform: translateX(-50%)">
${data.max.toFixed(1)}
</div>
</div>
</div>
`;
});
boxplotHTML += '</div>';
if (trans?.legend) {
boxplotHTML += `
<div class="bg-white bg-opacity-40 rounded-lg p-3 mt-10">
<h4 class="font-semibold text-[#5D0505] mb-2 text-sm">${trans.legend.title}</h4>
<div class="space-y-1.5 text-xs">
<div class="flex items-center gap-2">
<div class="w-6 flex justify-center flex-shrink-0">
<div class="w-0.5 h-5 bg-gray-600"></div>
</div>
<span>${trans.legend.whiskers}</span>
</div>
<div class="flex items-center gap-2">
<div class="w-8 h-5 bg-[#5D0505] bg-opacity-10 border border-[#5D0505] border-opacity-30 rounded flex-shrink-0"></div>
<span>${trans.legend.p95}</span>
</div>
<div class="flex items-center gap-2">
<div class="w-8 h-5 bg-[#5D0505] bg-opacity-30 border-2 border-[#5D0505] rounded flex-shrink-0"></div>
<span>${trans.legend.p50}</span>
</div>
<div class="flex items-center gap-2">
<div class="w-6 flex justify-center flex-shrink-0">
<div class="w-0.5 h-5 bg-[#5D0505]"></div>
</div>
<span>${trans.legend.median}</span>
</div>
</div>
${trans.legend.assumption ? `<div class="mt-3 pt-2 border-t border-gray-300 text-xs text-gray-600 italic">${trans.legend.assumption}</div>` : ''}
</div>
`;
}
boxplotContainer.innerHTML = boxplotHTML;
resultsDiv.classList.remove('hidden');
}
function updatePetTypeInfoIcon() {
const petTypeSelect = document.getElementById('stat-pet-type');
const infoIcon = document.getElementById('pet-type-info-icon');
if (petTypeSelect && infoIcon) {
const selectedType = parseInt(petTypeSelect.value);
if (selectedType === 7 || selectedType === 8) {
infoIcon.classList.remove('hidden');
} else {
infoIcon.classList.add('hidden');
}
}
}
function initPetStatsCalculator() {
const currentLevelSelect = document.getElementById('stat-current-level');
const targetLevelSelect = document.getElementById('stat-target-level');
if (currentLevelSelect) {
for (let i = 1; i <= 104; i++) {
const option = document.createElement('option');
option.value = i;
option.textContent = i;
currentLevelSelect.appendChild(option);
}
currentLevelSelect.value = 1;
}
if (targetLevelSelect && currentLevelSelect) {
for (let i = 2; i <= 105; i++) {
const option = document.createElement('option');
option.value = i;
option.textContent = i;
targetLevelSelect.appendChild(option);
}
targetLevelSelect.value = 105;
currentLevelSelect.addEventListener('change', function() {
const currentLevel = parseInt(this.value);
targetLevelSelect.innerHTML = '';
for (let i = currentLevel + 1; i <= 105; i++) {
const option = document.createElement('option');
option.value = i;
option.textContent = i;
targetLevelSelect.appendChild(option);
}
});
}
const calculateBtn = document.getElementById('calculate-stat-btn');
if (!calculateBtn) return;
const petTypeSelect = document.getElementById('stat-pet-type');
if (petTypeSelect) {
petTypeSelect.addEventListener('change', updatePetTypeInfoIcon);
updatePetTypeInfoIcon();
}
calculateBtn.addEventListener('click', function() {
const currentLevel = parseInt(document.getElementById('stat-current-level').value);
const targetLevel = parseInt(document.getElementById('stat-target-level').value);
const petType = parseInt(document.getElementById('stat-pet-type').value);
const currentHP = parseFloat(document.getElementById('stat-current-hp').value);
const currentDEF = parseFloat(document.getElementById('stat-current-def').value);
const currentMP = parseFloat(document.getElementById('stat-current-mp').value);
const age = parseInt(document.getElementById('stat-age').value) || 0;
const isMeley = document.getElementById('stat-is-meley').checked;
if (isNaN(currentLevel) || isNaN(targetLevel) || isNaN(petType)) {
showErrorModal(t[getLang()]?.statCalculator?.errorSelectAll || 'Bitte alle Felder ausfüllen!');
return;
}
if (currentLevel < 1 || currentLevel > 104 || targetLevel < 1 || targetLevel > 105) {
showErrorModal(t[getLang()]?.statCalculator?.errorLevelRange || 'Aktuelles Level muss zwischen 1 und 104 liegen!');
return;
}
if (currentLevel >= targetLevel) {
showErrorModal(t[getLang()]?.statCalculator?.errorTargetHigher || 'Ziellevel muss höher als aktuelles Level sein!');
return;
}
if (isNaN(currentHP) || currentHP <= 0 || isNaN(currentDEF) || currentDEF <= 0 || isNaN(currentMP) || currentMP <= 0) {
showErrorModal(t[getLang()]?.statCalculator?.errorStatsPositive || 'Alle Werte müssen größer als 0 sein!');
return;
}
if (age < 0) {
showErrorModal(t[getLang()]?.statCalculator?.errorAgePositive || 'Alter muss 0 oder höher sein!');
return;
}
const results = calculatePetStatGrowth(currentLevel, targetLevel, petType, currentHP, currentDEF, currentMP, age, isMeley);
renderDynamicBoxplot(results);
});
if (currentLevelSelect && targetLevelSelect) {
currentLevelSelect.addEventListener('change', function() {
const currentLevel = parseInt(this.value);
targetLevelSelect.innerHTML = '';
for (let i = currentLevel + 1; i <= 105; i++) {
const option = document.createElement('option');
option.value = i;
option.textContent = i;
targetLevelSelect.appendChild(option);
}
});
}
}
function applyStatCalculatorTranslations() {
const lang = getLang();
const trans = t[lang]?.statCalculator;
if (!trans) return;
const titleEl = document.getElementById('stat-calculator-title');
if (titleEl) titleEl.textContent = trans.title;
const sectionDescEl = document.getElementById('stat-section-desc');
if (sectionDescEl) sectionDescEl.textContent = trans.sectionDesc;
const currentLevelLabel = document.getElementById('stat-current-level-label');
if (currentLevelLabel) currentLevelLabel.textContent = trans.currentLevel;
const targetLevelLabel = document.getElementById('stat-target-level-label');
if (targetLevelLabel) targetLevelLabel.textContent = trans.targetLevel;
const petTypeLabel = document.getElementById('stat-pet-type-label');
if (petTypeLabel) petTypeLabel.textContent = trans.petType;
const petTypeInfoTooltip = document.getElementById('pet-type-info-tooltip');
if (petTypeInfoTooltip) petTypeInfoTooltip.textContent = trans.petTypeInfoTooltip;
const hpLabel = document.getElementById('stat-current-hp-label');
if (hpLabel) hpLabel.textContent = trans.currentTP;
const defLabel = document.getElementById('stat-current-def-label');
if (defLabel) defLabel.textContent = trans.currentDEF;
const mpLabel = document.getElementById('stat-current-mp-label');
if (mpLabel) mpLabel.textContent = trans.currentMP;
const meleyLabel = document.getElementById('stat-is-meley-label');
if (meleyLabel) meleyLabel.textContent = trans.isMeley;
const ageLabel = document.getElementById('stat-age-label');
if (ageLabel) {
ageLabel.innerHTML = `
${trans.ageInDays}
<span class="relative group">
<svg class="w-4 h-4 text-[#5D0505] cursor-help" fill="currentColor" viewBox="0 0 20 20">
<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
</svg>
<span class="invisible group-hover:visible absolute left-0 top-6 bg-[#2d1a07] text-white text-xs rounded py-1 px-2 z-10 whitespace-nowrap" id="stat-age-tooltip">
${trans.ageTooltip}
</span>
</span>
`;
}
const calculateBtn = document.getElementById('calculate-stat-btn');
if (calculateBtn) calculateBtn.textContent = trans.calculateBtn;
const resultsTitle = document.getElementById('stat-results-title');
if (resultsTitle) resultsTitle.textContent = trans.resultsTitle;
const errorModalTitle = document.getElementById('error-modal-title');
if (errorModalTitle) errorModalTitle.textContent = trans.errorModalTitle;
const errorModalBtn = document.getElementById('error-modal-btn');
if (errorModalBtn) errorModalBtn.textContent = trans.errorModalBtn;
}
document.addEventListener('DOMContentLoaded', function() {
initPetStatsCalculator();
applyStatCalculatorTranslations();
});
document.addEventListener('languageChanged', function() {
applyStatCalculatorTranslations();
const resultsDiv = document.getElementById('stat-results');
if (resultsDiv && !resultsDiv.classList.contains('hidden')) {
const calculateBtn = document.getElementById('calculate-stat-btn');
if (calculateBtn) {
calculateBtn.click();
}
}
});