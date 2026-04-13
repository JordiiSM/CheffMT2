// Schnapp den König Event functionality

/**
 * Initialize King-specific functionality
 */
let kingSelectedCard = null;
let kingSelectedField = null;
let kingSaveTimeout = null;
var kingZones = []; // Array of center keys, e.g. ["2-1", "0-4"]
var kingNoFiveZones = []; // Array of center keys where NO 5 is nearby
var kingUndoStack = []; // Array of state snapshots for undo

function initKingEvent() {
  initKingHelper();
}

/**
 * Update King-specific content during language changes
 * @param {Object} eventData - The translation data for the King event
 */
function updateKingContent(eventData) {
  // Update description content
  const descElement = document.getElementById('king-desc');
  if (descElement && eventData.desc) {
    descElement.innerHTML = eventData.desc;
  }

  // Update mechanics title (just title, no description)
  const mechanicsTitleElement = document.getElementById('king-mechanics-title');
  if (mechanicsTitleElement && eventData.mechanicsTitle) {
    mechanicsTitleElement.innerHTML = '';

    const titleDiv = document.createElement('h3');
    titleDiv.className = 'font-bold mb-2';
    titleDiv.innerHTML = eventData.mechanicsTitle;
    mechanicsTitleElement.appendChild(titleDiv);
  }

  // Update mechanics content: two-column layout
  // Left: description + comparison rules + special rules | Right: UI image + points table
  const mechanicsElement = document.getElementById('king-mechanics');
  if (mechanicsElement) {
    mechanicsElement.innerHTML = '';

    const twoColContainer = document.createElement('div');
    twoColContainer.className = 'ev-king-two-col';

    // === LEFT SIDE: Description + Rules ===
    const leftCol = document.createElement('div');
    leftCol.className = 'ev-king-left';

    // Mechanics description
    if (eventData.mechanicsDesc) {
      const descP = document.createElement('p');
      descP.className = 'mb-4 font-normal';
      descP.style.fontWeight = 'normal';
      descP.innerHTML = eventData.mechanicsDesc;
      leftCol.appendChild(descP);
    }

    // Comparison rules
    if (eventData.comparisonTitle && eventData.comparisonRules) {
      const compTitle = document.createElement('h4');
      compTitle.className = 'font-bold mb-2';
      compTitle.textContent = eventData.comparisonTitle;
      leftCol.appendChild(compTitle);

      const rulesList = document.createElement('ul');
      rulesList.className = 'ev-rules-list';

      eventData.comparisonRules.forEach(rule => {
        const li = document.createElement('li');
        li.className = 'ev-rule-item';
        li.innerHTML = '<span class="text-[#5D0505] font-bold mt-0.5">\u2022</span><span>' + rule + '</span>';
        rulesList.appendChild(li);
      });

      leftCol.appendChild(rulesList);
    }

    // Special rule Card 5
    if (eventData.specialRuleTitle && eventData.specialRuleDesc) {
      const specialSection = document.createElement('div');
      specialSection.className = 'ev-king-section';

      const specialTitle = document.createElement('h4');
      specialTitle.className = 'font-bold mb-1';
      specialTitle.textContent = eventData.specialRuleTitle;

      const specialDesc = document.createElement('p');
      specialDesc.className = 'text-sm';
      specialDesc.innerHTML = eventData.specialRuleDesc;

      specialSection.appendChild(specialTitle);
      specialSection.appendChild(specialDesc);
      leftCol.appendChild(specialSection);
    }

    // King card rule
    if (eventData.kingCardRuleTitle && eventData.kingCardRuleDesc) {
      const kingSection = document.createElement('div');
      kingSection.className = 'ev-king-section';

      const kingTitle = document.createElement('h4');
      kingTitle.className = 'font-bold mb-1';
      kingTitle.textContent = eventData.kingCardRuleTitle;

      const kingDesc = document.createElement('p');
      kingDesc.className = 'text-sm';
      kingDesc.innerHTML = eventData.kingCardRuleDesc;

      kingSection.appendChild(kingTitle);
      kingSection.appendChild(kingDesc);
      leftCol.appendChild(kingSection);
    }

    // === RIGHT SIDE: UI Image + Points Table ===
    const rightCol = document.createElement('div');
    rightCol.className = 'ev-king-right';

    // UI Image
    if (eventData.imageSrc) {
      const img = document.createElement('img');
      img.src = eventData.imageSrc;
      img.alt = eventData.imageAlt;
      img.className = 'event-showcase-image w-full h-auto rounded-lg border border-[#341002]/20 shadow-md mb-4';
      rightCol.appendChild(img);
    }

    // Points table below the image
    if (eventData.pointsTable) {
      const tableContainer = document.createElement('div');
      tableContainer.className = 'ev-table-center';

      const table = document.createElement('table');
      table.className = 'purity-flames-table';
      table.style.width = '100%';

      // Table header
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');

      const thCard = document.createElement('th');
      thCard.className = 'table-header-cell';
      thCard.textContent = eventData.pointsTableHeaderCard;
      headerRow.appendChild(thCard);

      const thField = document.createElement('th');
      thField.className = 'table-header-cell';
      thField.textContent = eventData.pointsTableHeaderField;
      headerRow.appendChild(thField);

      const thOwn = document.createElement('th');
      thOwn.className = 'table-header-cell';
      thOwn.textContent = eventData.pointsTableHeaderOwn;
      headerRow.appendChild(thOwn);

      const thPoints = document.createElement('th');
      thPoints.className = 'table-header-cell';
      thPoints.textContent = eventData.pointsTableHeaderPoints;
      headerRow.appendChild(thPoints);

      thead.appendChild(headerRow);
      table.appendChild(thead);

      // Table body
      const tbody = document.createElement('tbody');

      eventData.pointsTable.forEach(row => {
        const tr = document.createElement('tr');

        const tdCard = document.createElement('td');
        tdCard.className = 'table-icon-cell';
        tdCard.style.textAlign = 'center';
        const cardImg = document.createElement('img');
        cardImg.src = row.icon;
        cardImg.alt = '';
        cardImg.className = 'ev-table-card-img';
        tdCard.style.padding = '2px 4px';
        tdCard.appendChild(cardImg);

        const tdField = document.createElement('td');
        tdField.className = 'table-number-cell';
        tdField.textContent = row.field + 'x';

        const tdOwn = document.createElement('td');
        tdOwn.className = 'table-number-cell';
        tdOwn.textContent = row.own + 'x';

        const tdPoints = document.createElement('td');
        tdPoints.className = 'table-number-cell';
        tdPoints.style.fontWeight = 'bold';
        tdPoints.textContent = row.points;

        tr.appendChild(tdCard);
        tr.appendChild(tdField);
        tr.appendChild(tdOwn);
        tr.appendChild(tdPoints);
        tbody.appendChild(tr);
      });

      // Bonus row
      if (eventData.pointsBonusRow) {
        const bonusRow = document.createElement('tr');
        bonusRow.style.borderTop = '2px solid #FECE58';

        const bonusTd = document.createElement('td');
        bonusTd.className = 'table-row-header';
        bonusTd.innerHTML = '<strong>' + eventData.pointsBonusRow + '</strong>';

        const bonusEmpty1 = document.createElement('td');
        bonusEmpty1.className = 'table-number-cell';

        const bonusEmpty2 = document.createElement('td');
        bonusEmpty2.className = 'table-number-cell';

        const bonusPoints = document.createElement('td');
        bonusPoints.className = 'table-number-cell';
        bonusPoints.style.fontWeight = 'bold';
        bonusPoints.textContent = eventData.pointsBonusValue;

        bonusRow.appendChild(bonusTd);
        bonusRow.appendChild(bonusEmpty1);
        bonusRow.appendChild(bonusEmpty2);
        bonusRow.appendChild(bonusPoints);
        tbody.appendChild(bonusRow);
      }

      table.appendChild(tbody);
      tableContainer.appendChild(table);
      rightCol.appendChild(tableContainer);
    }

    twoColContainer.appendChild(leftCol);
    twoColContainer.appendChild(rightCol);
    mechanicsElement.appendChild(twoColContainer);
  }

  // Update rewards title
  const rewardsTitleElement = document.getElementById('king-rewards-title');
  if (rewardsTitleElement && eventData.rewardsTitle) {
    rewardsTitleElement.innerHTML = eventData.rewardsTitle;
  }

  // Update rewards: merged reward tiers + chest loot (Okey-style: threshold on top, image center, name below)
  const rewardsTableElement = document.querySelector('#king-rewards-table .rewards-grid-custom');
  if (rewardsTableElement && eventData.rewardTiers) {
    rewardsTableElement.innerHTML = '';

    // Find matching rewardsTable entry for each tier (by icon)
    eventData.rewardTiers.forEach(tier => {
      const chestDiv = document.createElement('div');
      chestDiv.className = 'ev-chest-card';

      // Threshold on top (like Okey points)
      const thresholdTitle = document.createElement('h6');
      thresholdTitle.className = 'ev-chest-header';
      thresholdTitle.textContent = tier.threshold;
      chestDiv.appendChild(thresholdTitle);

      // Chest content: image + name
      const chestContent = document.createElement('div');
      chestContent.className = 'ev-chest-content';

      const imgContainer = document.createElement('div');
      imgContainer.className = 'ev-relative';

      const img = document.createElement('img');
      img.src = tier.icon;
      img.alt = tier.reward;
      img.className = 'ev-chest-img';

      const nameSpan = document.createElement('span');
      nameSpan.className = 'ev-chest-name';
      nameSpan.textContent = tier.reward;

      imgContainer.appendChild(img);
      chestContent.appendChild(imgContainer);
      chestContent.appendChild(nameSpan);

      chestDiv.appendChild(chestContent);

      // Find matching loot data from rewardsTable
      const matchingChest = eventData.rewardsTable
        ? eventData.rewardsTable.find(c => c.icon === tier.icon)
        : null;

      if (matchingChest && matchingChest.contents && matchingChest.contents.length > 0) {
        const lootContainer = document.createElement('div');
        lootContainer.className = 'ev-loot-wrap';

        const lootButton = document.createElement('button');
        lootButton.className = 'ev-loot-btn';
        lootButton.innerHTML = '<span class="loot-text">Loot</span><span class="loot-arrow transition-transform duration-200">\u25BC</span>';

        const lootContent = document.createElement('div');
        lootContent.className = 'ev-loot-content hidden';

        const lootList = document.createElement('div');
        lootList.className = 'ev-loot-list';

        matchingChest.contents.forEach(item => {
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
        chestDiv.appendChild(lootContainer);
      }

      rewardsTableElement.appendChild(chestDiv);
    });

    // Add note
    if (eventData.rewardsTableNote) {
      const noteDiv = document.createElement('div');
      noteDiv.className = 'ev-rewards-note';
      noteDiv.textContent = eventData.rewardsTableNote;
      rewardsTableElement.appendChild(noteDiv);
    }
  }

  // Update King Helper texts
  const helperTitle = document.getElementById('king-helper-title');
  if (helperTitle && eventData.helperTitle) {
    helperTitle.textContent = eventData.helperTitle;
  }

  const helperDesc = document.getElementById('king-helper-desc');
  if (helperDesc && eventData.helperDesc) {
    helperDesc.innerHTML = eventData.helperDesc;
  }

  const resetText = document.getElementById('king-reset-text');
  if (resetText && eventData.resetText) {
    resetText.textContent = eventData.resetText;
  }

  const helperCredit = document.getElementById('king-helper-credit');
  if (helperCredit && eventData.helperCredit) {
    helperCredit.textContent = eventData.helperCredit;
  }
}

// === King Helper Functions ===

var KING_CARD_BACK = 'Events/images/Schnapp_den_König_verdeckt.png';

const KING_CARD_IMAGES = {
  '1': 'Events/images/Schnapp_den_König_Karte_1.png',
  '2': 'Events/images/Schnapp_den_König_Karte_2.png',
  '3': 'Events/images/Schnapp_den_König_Karte_3.png',
  '4': 'Events/images/Schnapp_den_König_Karte_4.png',
  '5': 'Events/images/Schnapp_den_König_Karte_5.png',
  'K': 'Events/images/Schnapp_den_König_Karte_K.png'
};

// === Probability Calculation for Hidden 5s (Inclusion-Exclusion Formula) ===

// Binomial coefficient C(n, k)
function binomCoeff(n, k) {
  if (k < 0 || k > n || n < 0) return 0;
  if (k === 0 || k === n) return 1;
  if (k > n - k) k = n - k;
  var result = 1;
  for (var i = 0; i < k; i++) {
    result = result * (n - i) / (i + 1);
  }
  return Math.round(result);
}

// === Zone Helper Functions ===

// Get unrevealed 8-neighbor field keys for a zone center
function getZoneFields(centerKey) {
  var parts = centerKey.split('-');
  var row = parseInt(parts[0]);
  var col = parseInt(parts[1]);
  var fields = [];
  for (var dr = -1; dr <= 1; dr++) {
    for (var dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      var nr = row + dr;
      var nc = col + dc;
      if (nr < 0 || nr > 4 || nc < 0 || nc > 4) continue;
      var field = document.querySelector('.king-field[data-row="' + nr + '"][data-col="' + nc + '"]');
      if (field && !field.classList.contains('revealed')) {
        fields.push(nr + '-' + nc);
      }
    }
  }
  return fields;
}

// Check if a zone is satisfied (a revealed 5 among its 8-neighbors)
function isZoneSatisfied(centerKey) {
  var parts = centerKey.split('-');
  var row = parseInt(parts[0]);
  var col = parseInt(parts[1]);
  for (var dr = -1; dr <= 1; dr++) {
    for (var dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      var nr = row + dr;
      var nc = col + dc;
      if (nr < 0 || nr > 4 || nc < 0 || nc > 4) continue;
      var field = document.querySelector('.king-field[data-row="' + nr + '"][data-col="' + nc + '"]');
      if (field && field.classList.contains('revealed') && field.getAttribute('data-value') === '5') {
        return true;
      }
    }
  }
  return false;
}

// Update five-nearby CSS classes based on active zones (excluding no-five fields)
function updateFiveNearbyDisplay() {
  document.querySelectorAll('.king-field').forEach(function(f) {
    f.classList.remove('five-nearby');
  });
  var excluded = getNoFiveExcludedFields();
  kingZones.forEach(function(centerKey) {
    var fields = getZoneFields(centerKey);
    fields.forEach(function(key) {
      if (excluded[key]) return;
      var parts = key.split('-');
      var field = document.querySelector('.king-field[data-row="' + parts[0] + '"][data-col="' + parts[1] + '"]');
      if (field) field.classList.add('five-nearby');
    });
  });
}

// Get set of field keys excluded by no-five zones (unrevealed neighbors of no-five centers)
function getNoFiveExcludedFields() {
  var excluded = {};
  kingNoFiveZones.forEach(function(centerKey) {
    var fields = getZoneFields(centerKey);
    fields.forEach(function(key) {
      excluded[key] = true;
    });
  });
  return excluded;
}

// Count set bits in a number
function popcount(n) {
  var count = 0;
  while (n) { count += n & 1; n >>= 1; }
  return count;
}

/**
 * Calculate P(I_i | E) using inclusion-exclusion formula:
 *
 *              Σ (-1)^k  Σ  C(N-1-|∪S_j\{i}|, K-1)
 * P(I_i|E) = ─────────────────────────────────────────
 *              Σ (-1)^k  Σ  C(N-|∪S_j|, K)
 *
 * Where zones S_j are the constraint sets (each must contain ≥1 five).
 * Zones CAN overlap — union sizes account for shared fields.
 */
function calculateFiveProbabilities() {
  // Count remaining hidden 5s
  var remaining5s = 3;
  document.querySelectorAll('.king-field.revealed').forEach(function(field) {
    if (field.getAttribute('data-value') === '5') {
      remaining5s--;
    }
  });

  if (remaining5s <= 0) return {};

  // All unrevealed fields, excluding no-five fields
  var excludedFields = getNoFiveExcludedFields();
  var allUnrevealedNodes = document.querySelectorAll('.king-field:not(.revealed)');
  var allUnrevealed = [];
  allUnrevealedNodes.forEach(function(f) {
    var key = f.getAttribute('data-row') + '-' + f.getAttribute('data-col');
    if (!excludedFields[key]) {
      allUnrevealed.push(f);
    }
  });
  var N = allUnrevealed.length;
  if (N === 0) return {};

  // Build unsatisfied zones (each zone = array of unrevealed field keys, excluding no-five fields)
  var zones = [];
  kingZones.forEach(function(centerKey) {
    if (isZoneSatisfied(centerKey)) return;
    var fields = getZoneFields(centerKey).filter(function(k) { return !excludedFields[k]; });
    if (fields.length > 0) {
      zones.push(fields);
    }
  });

  var m = zones.length;
  var r = remaining5s;

  // Helper: compute |union of zones in subset mask|
  function unionSize(mask) {
    var seen = {};
    var count = 0;
    for (var j = 0; j < m; j++) {
      if (mask & (1 << j)) {
        for (var k = 0; k < zones[j].length; k++) {
          if (!seen[zones[j][k]]) {
            seen[zones[j][k]] = true;
            count++;
          }
        }
      }
    }
    return count;
  }

  // Denominator: D = Σ_{S⊆zones} (-1)^|S| * C(N - |∪_{j∈S} Z_j|, r)
  // With overlapping zones, m > r is valid (one 5 can satisfy multiple zones)
  var D = 0;
  var useConstraints = (m > 0);
  if (useConstraints) {
    for (var mask = 0; mask < (1 << m); mask++) {
      var bits = popcount(mask);
      var sign = (bits % 2 === 0) ? 1 : -1;
      D += sign * binomCoeff(N - unionSize(mask), r);
    }
    // If D <= 0, constraints are contradictory — fall back to uniform
    if (D <= 0) {
      D = binomCoeff(N, r);
      useConstraints = false;
    }
  } else {
    D = binomCoeff(N, r);
  }

  if (D === 0) return {};

  // For each unrevealed field, determine which zones contain it
  var fieldZoneIndices = {}; // key -> array of zone indices
  allUnrevealed.forEach(function(f) {
    var key = f.getAttribute('data-row') + '-' + f.getAttribute('data-col');
    fieldZoneIndices[key] = [];
    for (var j = 0; j < m; j++) {
      if (zones[j].indexOf(key) >= 0) {
        fieldZoneIndices[key].push(j);
      }
    }
  });

  var probabilities = {};

  allUnrevealed.forEach(function(field) {
    var key = field.getAttribute('data-row') + '-' + field.getAttribute('data-col');
    var myZones = fieldZoneIndices[key];
    var Num = 0;

    if (useConstraints) {
      // Zones NOT containing this field = still unsatisfied after fixing field as 5
      var unsatisfied = [];
      for (var j = 0; j < m; j++) {
        if (myZones.indexOf(j) < 0) {
          unsatisfied.push(j);
        }
      }
      var um = unsatisfied.length;

      // Inclusion-exclusion over unsatisfied zones
      for (var mask = 0; mask < (1 << um); mask++) {
        var bits = popcount(mask);
        var sign = (bits % 2 === 0) ? 1 : -1;
        // Build actual zone mask and compute union size excluding field i
        var uSize = 0;
        var seen = {};
        for (var b = 0; b < um; b++) {
          if (mask & (1 << b)) {
            var zoneIdx = unsatisfied[b];
            for (var k = 0; k < zones[zoneIdx].length; k++) {
              var fk = zones[zoneIdx][k];
              if (fk !== key && !seen[fk]) {
                seen[fk] = true;
                uSize++;
              }
            }
          }
        }
        Num += sign * binomCoeff(N - 1 - uSize, r - 1);
      }
    } else {
      // No zone constraints: uniform P = r/N
      Num = binomCoeff(N - 1, r - 1);
    }

    probabilities[key] = Num / D;
  });

  return probabilities;
}

// Display probability overlays on unrevealed fields
function displayFiveProbabilities() {
  var probabilities = calculateFiveProbabilities();

  document.querySelectorAll('.king-field').forEach(function(field) {
    var existing = field.querySelector('.five-prob');
    if (existing) existing.remove();

    if (field.classList.contains('revealed')) return;

    var key = field.getAttribute('data-row') + '-' + field.getAttribute('data-col');
    var prob = probabilities[key];

    if (prob !== undefined && prob > 0.001) {
      var overlay = document.createElement('div');
      overlay.className = 'five-prob';
      overlay.textContent = Math.round(prob * 100) + '%';
      field.appendChild(overlay);
    } else {
      // No probability → remove red border too
      field.classList.remove('five-nearby');
    }
  });
}

function getNeighborFields(row, col) {
  var neighbors = [];
  for (var dr = -1; dr <= 1; dr++) {
    for (var dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      var nr = row + dr;
      var nc = col + dc;
      if (nr >= 0 && nr <= 4 && nc >= 0 && nc <= 4) {
        var neighbor = document.querySelector('.king-field[data-row="' + nr + '"][data-col="' + nc + '"]');
        if (neighbor) neighbors.push(neighbor);
      }
    }
  }
  return neighbors;
}

function setFieldToCardBack(field) {
  field.innerHTML = '';
  var img = document.createElement('img');
  img.src = KING_CARD_BACK;
  img.alt = '?';
  field.appendChild(img);
}

function updateCardCount(card) {
  var remaining = parseInt(card.getAttribute('data-remaining'));
  var countSpan = card.querySelector('.king-card-count');
  if (countSpan) {
    countSpan.textContent = remaining + 'x';
  }
  if (remaining <= 0) {
    card.classList.add('played');
    card.classList.remove('selected');
    if (kingSelectedCard === card) {
      kingSelectedCard = null;
    }
  } else {
    card.classList.remove('played');
  }
}

// Capture current board state as a snapshot for undo
function captureKingSnapshot() {
  var board = [];
  document.querySelectorAll('.king-field.revealed').forEach(function(field) {
    board.push({
      row: field.getAttribute('data-row'),
      col: field.getAttribute('data-col'),
      value: field.getAttribute('data-value')
    });
  });
  return {
    board: board,
    zones: kingZones.slice(),
    noFiveZones: kingNoFiveZones.slice()
  };
}

function pushKingUndo() {
  kingUndoStack.push(captureKingSnapshot());
  if (kingUndoStack.length > 50) kingUndoStack.shift();
  updateUndoButton();
}

function updateUndoButton() {
  var btn = document.getElementById('king-undo-btn');
  if (!btn) return;
  if (kingUndoStack.length > 0) {
    btn.disabled = false;
    btn.classList.remove('opacity-50', 'cursor-not-allowed');
  } else {
    btn.disabled = true;
    btn.classList.add('opacity-50', 'cursor-not-allowed');
  }
}

function restoreKingSnapshot(snapshot) {
  // Clear all fields
  document.querySelectorAll('.king-field').forEach(function(field) {
    field.classList.remove('revealed', 'five-nearby', 'field-selected');
    field.removeAttribute('data-value');
    setFieldToCardBack(field);
  });

  // Reset own card counters to max
  document.querySelectorAll('.king-own-card').forEach(function(card) {
    var max = card.getAttribute('data-max');
    card.setAttribute('data-remaining', max);
    updateCardCount(card);
  });

  // Restore board
  var placedCounts = {};
  snapshot.board.forEach(function(entry) {
    var field = document.querySelector('.king-field[data-row="' + entry.row + '"][data-col="' + entry.col + '"]');
    if (field && KING_CARD_IMAGES[entry.value]) {
      field.classList.add('revealed');
      field.setAttribute('data-value', entry.value);
      var img = document.createElement('img');
      img.src = KING_CARD_IMAGES[entry.value];
      img.alt = entry.value;
      field.innerHTML = '';
      field.appendChild(img);
      placedCounts[entry.value] = (placedCounts[entry.value] || 0) + 1;
    }
  });

  // Update own card counters based on placed cards
  document.querySelectorAll('.king-own-card').forEach(function(card) {
    var value = card.getAttribute('data-value');
    var max = parseInt(card.getAttribute('data-max'));
    var placed = placedCounts[value] || 0;
    card.setAttribute('data-remaining', max - placed);
    updateCardCount(card);
  });

  // Restore zones
  kingZones = snapshot.zones.slice();
  kingNoFiveZones = snapshot.noFiveZones ? snapshot.noFiveZones.slice() : [];

  // Deselect
  kingSelectedCard = null;
  kingSelectedField = null;
  document.querySelectorAll('.king-own-card.selected').forEach(function(c) {
    c.classList.remove('selected');
  });

  updateFiveNearbyDisplay();
  debouncedSaveKingState();
  displayFiveProbabilities();
  updateUndoButton();
}

function initKingHelper() {
  var boardGrid = document.getElementById('king-board-grid');
  var ownCards = document.getElementById('king-own-cards');
  var resetBtn = document.getElementById('king-reset-btn');
  var undoBtn = document.getElementById('king-undo-btn');

  if (!boardGrid || !ownCards || !resetBtn) return;

  // Click on own cards to select them
  ownCards.querySelectorAll('.king-own-card').forEach(function(card) {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.classList.contains('played')) return;

      // Deselect previous
      if (kingSelectedCard) {
        kingSelectedCard.classList.remove('selected');
      }

      // Select this card (or deselect if same)
      if (kingSelectedCard === this) {
        kingSelectedCard = null;
      } else {
        this.classList.add('selected');
        kingSelectedCard = this;
      }
    }, { passive: false });
  });

  // Helper: place a card value on a field
  function placeCardOnField(field, value) {
    if (!KING_CARD_IMAGES[value]) return false;

    var ownCard = document.querySelector('.king-own-card[data-value="' + value + '"]');
    if (!ownCard) return false;
    var remaining = parseInt(ownCard.getAttribute('data-remaining'));
    if (remaining <= 0) return false;

    pushKingUndo();

    field.classList.add('revealed');
    field.setAttribute('data-value', value);

    var img = document.createElement('img');
    img.src = KING_CARD_IMAGES[value];
    img.alt = value;
    field.innerHTML = '';
    field.appendChild(img);

    // Decrease counter
    ownCard.setAttribute('data-remaining', remaining - 1);
    updateCardCount(ownCard);

    // Deselect field
    if (kingSelectedField) {
      kingSelectedField.classList.remove('field-selected');
      kingSelectedField = null;
    }

    debouncedSaveKingState();
    updateFiveNearbyDisplay();
    displayFiveProbabilities();
    return true;
  }

  // Helper: remove card from a field
  function removeCardFromField(field) {
    pushKingUndo();
    var removedValue = field.getAttribute('data-value');
    field.classList.remove('revealed');
    field.removeAttribute('data-value');
    setFieldToCardBack(field);

    var ownCard = document.querySelector('.king-own-card[data-value="' + removedValue + '"]');
    if (ownCard) {
      var remaining = parseInt(ownCard.getAttribute('data-remaining'));
      ownCard.setAttribute('data-remaining', remaining + 1);
      updateCardCount(ownCard);
    }
    debouncedSaveKingState();
    updateFiveNearbyDisplay();
    displayFiveProbabilities();
  }

  // Left-click on board fields
  boardGrid.querySelectorAll('.king-field').forEach(function(field) {
    field.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      // If field is already revealed, select it for replacement via keyboard
      if (this.classList.contains('revealed')) {
        if (kingSelectedField) {
          kingSelectedField.classList.remove('field-selected');
        }
        if (kingSelectedField === this) {
          kingSelectedField = null;
        } else {
          this.classList.add('field-selected');
          kingSelectedField = this;
        }
        return;
      }

      // If an own card is selected, place it
      if (kingSelectedCard) {
        var value = kingSelectedCard.getAttribute('data-value');
        var row = parseInt(this.getAttribute('data-row'));
        var col = parseInt(this.getAttribute('data-col'));
        var centerKey = row + '-' + col;

        // Mark surrounding fields as "no 5 nearby"
        if (kingNoFiveZones.indexOf(centerKey) < 0) {
          kingNoFiveZones.push(centerKey);
        }

        placeCardOnField(this, value);

        // If card still has remaining, keep it selected; otherwise deselect
        var newRemaining = parseInt(kingSelectedCard.getAttribute('data-remaining'));
        if (newRemaining <= 0) {
          kingSelectedCard = null;
        }
        return;
      }

      // No own card selected: toggle no-five zone (opposite of right-click)
      pushKingUndo();
      var row = parseInt(this.getAttribute('data-row'));
      var col = parseInt(this.getAttribute('data-col'));
      var centerKey = row + '-' + col;

      var existingIdx = kingNoFiveZones.indexOf(centerKey);
      if (existingIdx >= 0) {
        kingNoFiveZones.splice(existingIdx, 1);
      } else {
        kingNoFiveZones.push(centerKey);
      }

      updateFiveNearbyDisplay();
      debouncedSaveKingState();
      displayFiveProbabilities();

      // Also select the field for keyboard input (blue border)
      if (kingSelectedField) {
        kingSelectedField.classList.remove('field-selected');
      }
      this.classList.add('field-selected');
      kingSelectedField = this;
    }, { passive: false });

    // Right-click: place selected card OR create/remove a zone
    field.addEventListener('contextmenu', function(e) {
      e.preventDefault();

      // If an own card is selected, place it + mark neighbors as "5 nearby"
      if (kingSelectedCard) {
        var value = kingSelectedCard.getAttribute('data-value');
        var row = parseInt(this.getAttribute('data-row'));
        var col = parseInt(this.getAttribute('data-col'));
        var centerKey = row + '-' + col;

        // Mark surrounding fields as "5 nearby" (five-nearby zone)
        if (kingZones.indexOf(centerKey) < 0) {
          kingZones.push(centerKey);
        }

        placeCardOnField(this, value);

        var newRemaining = parseInt(kingSelectedCard.getAttribute('data-remaining'));
        if (newRemaining <= 0) {
          kingSelectedCard = null;
        }
        return;
      }

      // No card selected: toggle zone (marks neighbors as potential 5 locations)
      var row = parseInt(this.getAttribute('data-row'));
      var col = parseInt(this.getAttribute('data-col'));
      var centerKey = row + '-' + col;

      pushKingUndo();
      var existingIdx = kingZones.indexOf(centerKey);
      if (existingIdx >= 0) {
        kingZones.splice(existingIdx, 1);
      } else {
        kingZones.push(centerKey);
      }

      updateFiveNearbyDisplay();
      debouncedSaveKingState();
      displayFiveProbabilities();

      // Also select the field for keyboard input (blue border)
      if (kingSelectedField) {
        kingSelectedField.classList.remove('field-selected');
      }
      this.classList.add('field-selected');
      kingSelectedField = this;
    });
  });

  // Keyboard input: press 1-5 or K to place card on focused field
  document.addEventListener('keydown', function(e) {
    if (!kingSelectedField) return;

    var key = e.key.toLowerCase();
    var value = null;

    if (key >= '1' && key <= '5') {
      value = key;
    } else if (key === 'k') {
      value = 'K';
    }

    if (value) {
      e.preventDefault();
      // If field is already revealed, remove old card first
      if (kingSelectedField.classList.contains('revealed')) {
        removeCardFromField(kingSelectedField);
      }
      placeCardOnField(kingSelectedField, value);
    }

    // Backspace: reset selected field back to face-down
    if (e.key === 'Backspace' && kingSelectedField.classList.contains('revealed')) {
      e.preventDefault();
      removeCardFromField(kingSelectedField);
      kingSelectedField.classList.remove('field-selected');
      kingSelectedField = null;
    }
  });

  // Undo button
  if (undoBtn) {
    undoBtn.addEventListener('click', function() {
      if (kingUndoStack.length === 0) return;
      var snapshot = kingUndoStack.pop();
      restoreKingSnapshot(snapshot);
    });
  }

  // Reset button
  resetBtn.addEventListener('click', function() {
    resetKingHelper();
  });
}

function resetKingHelper() {
  // Reset board
  document.querySelectorAll('.king-field').forEach(function(field) {
    field.classList.remove('revealed', 'five-nearby');
    field.removeAttribute('data-value');
    setFieldToCardBack(field);
  });

  // Reset own cards
  document.querySelectorAll('.king-own-card').forEach(function(card) {
    card.classList.remove('played', 'selected');
    var max = card.getAttribute('data-max');
    card.setAttribute('data-remaining', max);
    updateCardCount(card);
  });

  kingZones = [];
  kingNoFiveZones = [];
  kingUndoStack = [];
  kingSelectedCard = null;
  if (kingSelectedField) {
    kingSelectedField.classList.remove('field-selected');
    kingSelectedField = null;
  }
  localStorage.removeItem('kingHelperState');
  displayFiveProbabilities();
  updateUndoButton();
}

function saveKingState() {
  var state = {
    board: [],
    zones: kingZones.slice(),
    noFiveZones: kingNoFiveZones.slice()
  };

  document.querySelectorAll('.king-field.revealed').forEach(function(field) {
    state.board.push({
      row: field.getAttribute('data-row'),
      col: field.getAttribute('data-col'),
      value: field.getAttribute('data-value')
    });
  });

  localStorage.setItem('kingHelperState', JSON.stringify(state));
}

function debouncedSaveKingState() {
  clearTimeout(kingSaveTimeout);
  kingSaveTimeout = setTimeout(function() {
    saveKingState();
  }, 100);
}

function loadKingState() {
  var saved = localStorage.getItem('kingHelperState');
  if (!saved) return;

  try {
    var state = JSON.parse(saved);

    // Restore board and count placed cards per type
    var placedCounts = {};
    if (state.board) {
      state.board.forEach(function(entry) {
        var field = document.querySelector('.king-field[data-row="' + entry.row + '"][data-col="' + entry.col + '"]');
        if (field && KING_CARD_IMAGES[entry.value]) {
          field.classList.add('revealed');
          field.setAttribute('data-value', entry.value);

          var img = document.createElement('img');
          img.src = KING_CARD_IMAGES[entry.value];
          img.alt = entry.value;
          field.appendChild(img);

          placedCounts[entry.value] = (placedCounts[entry.value] || 0) + 1;
        }
      });
    }

    // Update own card counters
    document.querySelectorAll('.king-own-card').forEach(function(card) {
      var value = card.getAttribute('data-value');
      var max = parseInt(card.getAttribute('data-max'));
      var placed = placedCounts[value] || 0;
      card.setAttribute('data-remaining', max - placed);
      updateCardCount(card);
    });

    // Restore zones (new format) or ignore old fiveNearby format
    if (state.zones && Array.isArray(state.zones)) {
      kingZones = state.zones.slice();
    } else {
      kingZones = [];
    }
    if (state.noFiveZones && Array.isArray(state.noFiveZones)) {
      kingNoFiveZones = state.noFiveZones.slice();
    } else {
      kingNoFiveZones = [];
    }
    updateFiveNearbyDisplay();
    displayFiveProbabilities();
  } catch (error) {
    console.log('Error loading King Helper state:', error);
  }
}

// Initialize King event on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  initKingEvent();

  // Load saved state with delay
  setTimeout(function() {
    loadKingState();
  }, 100);
});

// Register with core event system
if (typeof window.eventModules === 'undefined') {
  window.eventModules = {};
}
window.eventModules.king = {
  updateContent: updateKingContent
};
