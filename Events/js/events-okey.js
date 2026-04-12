// Okey Event functionality
let saveTimeout = null;

/**
 * Initialize Okey-specific functionality
 */
function initOkeyEvent() {
  // Initialize Okey Helper functionality
  initOkeyHelper();
}

/**
 * Update basic Okey event content (title, summary, description, tips, note)
 * @param {Object} eventData - The translation data for the Okey event
 */
function updateOkeyBasicContent(eventData) {
  // Update title
  const titleElement = document.getElementById('event-okey-title');
  if (titleElement) titleElement.textContent = eventData.title;
  
  // Update summary
  const summaryElement = document.getElementById('event-okey-summary');
  if (summaryElement) summaryElement.innerHTML = eventData.summary;
  
  // Update description title and content
  const descTitleElement = document.getElementById('okey-desc-title');
  if (descTitleElement) descTitleElement.textContent = eventData.descTitle;
  
  const descElement = document.getElementById('okey-desc');
  if (descElement) {
    // Use a temporary div to safely parse HTML content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = eventData.desc;
    
    // Clear existing content and add new content
    while (descElement.firstChild) {
      descElement.removeChild(descElement.firstChild);
    }
    
    while (tempDiv.firstChild) {
      descElement.appendChild(tempDiv.firstChild);
    }
  }
  
  // Update tips title
  const tipsTitleElement = document.getElementById('okey-tips-title');
  if (tipsTitleElement) tipsTitleElement.textContent = eventData.tipsTitle;
  
  // Update tips list
  const tipsElement = document.getElementById('okey-tips');
  if (tipsElement) {
    // Clear existing tips
    while (tipsElement.firstChild) {
      tipsElement.removeChild(tipsElement.firstChild);
    }
    
    // Add new tips
    eventData.tips.forEach(tip => {
      const li = document.createElement('li');
      // Always render tips as HTML so anchor tags and other HTML are interpreted
      li.innerHTML = tip;
      tipsElement.appendChild(li);
    });
  }
  
  // Update note
  const noteElement = document.getElementById('okey-note');
  if (noteElement) {
    // Use a temporary div to safely parse HTML content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = eventData.note;
    
    // Clear existing content and add new content
    while (noteElement.firstChild) {
      noteElement.removeChild(noteElement.firstChild);
    }
    
    while (tempDiv.firstChild) {
      noteElement.appendChild(tempDiv.firstChild);
    }
  }
}

/**
 * Update Okey-specific gameplay content
 * @param {Object} eventData - The translation data for the Okey event
 */
function updateOkeyGameplayContent(eventData) {
  // Update gameplay title and content (for okey)
  const gameplayTitleElement = document.getElementById('okey-gameplay-title');
  if (gameplayTitleElement && eventData.gameplayTitle) {
    gameplayTitleElement.textContent = eventData.gameplayTitle;
  }
  
  const gameplayElement = document.getElementById('okey-gameplay');
  if (gameplayElement && eventData.gameplayDesc) {
    // Clear existing content
    while (gameplayElement.firstChild) {
      gameplayElement.removeChild(gameplayElement.firstChild);
    }
    
    // Add new gameplay description paragraphs
    eventData.gameplayDesc.forEach(paragraph => {
      const p = document.createElement('p');
      p.className = 'mb-3';
      
      // Check if paragraph contains HTML
      if (paragraph.includes('<strong>') || paragraph.includes('<img')) {
        p.innerHTML = paragraph;
      } else {
        p.textContent = paragraph;
      }
      gameplayElement.appendChild(p);
    });
  }
}

/**
 * Update Okey-specific rewards content
 * @param {Object} eventData - The translation data for the Okey event  
 */
function updateOkeyRewardsContent(eventData) {
  // Update rewards title and content (for okey)
  const rewardsTitleElement = document.getElementById('okey-rewards-title');
  if (rewardsTitleElement && eventData.rewardsTitle) {
    rewardsTitleElement.textContent = eventData.rewardsTitle;
  }
  
  const rewardsElement = document.getElementById('okey-rewards');
  if (rewardsElement && eventData.rewardsDesc) {
    // Clear existing content
    while (rewardsElement.firstChild) {
      rewardsElement.removeChild(rewardsElement.firstChild);
    }
    
    // Add new rewards description paragraphs
    eventData.rewardsDesc.forEach(paragraph => {
      const p = document.createElement('p');
      p.className = 'mb-3';
      
      // Check if paragraph contains HTML
      if (paragraph.includes('<strong>') || paragraph.includes('<img')) {
        p.innerHTML = paragraph;
      } else {
        p.textContent = paragraph;
      }
      rewardsElement.appendChild(p);
    });
    
    // Generate rewards table if data exists
    if (eventData.rewardsTable) {
      const tableContainer = document.createElement('div');
      tableContainer.className = 'ev-okey-rewards-wrap';
      tableContainer.id = 'okey-rewards-table';

      // Create grid for each version (Summer/Winter)
      eventData.rewardsTable.versions.forEach(version => {
        const versionDiv = document.createElement('div');
        versionDiv.className = 'ev-okey-version';

        const versionTitle = document.createElement('h5');
        versionTitle.className = 'ev-okey-version-title';
        versionTitle.textContent = version.name;
        versionDiv.appendChild(versionTitle);

        const chestsGrid = document.createElement('div');
        chestsGrid.className = 'ev-okey-chests-grid';

        version.chests.forEach(chest => {
          const chestDiv = document.createElement('div');
          chestDiv.className = 'ev-okey-chest-card';

          const pointsTitle = document.createElement('h6');
          pointsTitle.className = 'ev-okey-points';
          pointsTitle.textContent = chest.points;
          chestDiv.appendChild(pointsTitle);

          const chestContent = document.createElement('div');
          chestContent.className = 'ev-okey-chest-content';

          const img = document.createElement('img');
          // Use remote URL: icon is e.g. "events/okey/Bronzene_Okey-Truhe.png"
          img.src = `https://m2-helper.com/resources/${chest.icon}`;
          img.alt = chest.name;
          img.className = 'ev-okey-chest-img';

          const span = document.createElement('span');
          span.className = 'ev-okey-chest-name';
          span.textContent = chest.name;

          chestContent.appendChild(img);
          chestContent.appendChild(span);

          // Loot dropdown
          if (chest.content) {
            const lootContainer = document.createElement('div');
            lootContainer.className = 'ev-okey-loot-wrap';

            const lootHeader = document.createElement('button');
            lootHeader.className = 'ev-okey-loot-btn';
            lootHeader.innerHTML = '<span class="loot-text">Loot</span><span class="loot-arrow">▼</span>';

            const contentDiv = document.createElement('div');
            contentDiv.className = 'ev-okey-loot-content hidden';
            contentDiv.innerHTML = chest.content;

            lootHeader.addEventListener('click', function() {
              const arrow = lootHeader.querySelector('.loot-arrow');
              const isHidden = contentDiv.classList.contains('hidden');
              if (isHidden) {
                contentDiv.classList.remove('hidden');
                arrow.style.transform = 'rotate(180deg)';
              } else {
                contentDiv.classList.add('hidden');
                arrow.style.transform = 'rotate(0deg)';
              }
            });

            lootContainer.appendChild(lootHeader);
            lootContainer.appendChild(contentDiv);
            chestContent.appendChild(lootContainer);
          }

          chestDiv.appendChild(chestContent);
          chestsGrid.appendChild(chestDiv);
        });

        versionDiv.appendChild(chestsGrid);

        if (version.note) {
          const noteDiv = document.createElement('div');
          noteDiv.className = 'ev-okey-version-note';
          noteDiv.textContent = version.note;
          versionDiv.appendChild(noteDiv);
        }

        tableContainer.appendChild(versionDiv);
      });

      if (eventData.rewardsTable.note) {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'ev-okey-rewards-note';
        noteDiv.textContent = eventData.rewardsTable.note;
        tableContainer.appendChild(noteDiv);
      }

      rewardsElement.appendChild(tableContainer);
    }
  }
}

/**
 * Update Okey-specific content during language changes
 * @param {Object} eventData - The translation data for the Okey event
 */
function updateOkeyContent(eventData) {
  // Update basic Okey event content first
  updateOkeyBasicContent(eventData);
  
  // Update Okey-specific gameplay and rewards content
  updateOkeyGameplayContent(eventData);
  updateOkeyRewardsContent(eventData);
  // Update Okey Helper title and description (specific to Okey event)
  const okeyHelperTitleElement = document.getElementById('okey-helper-title');
  if (okeyHelperTitleElement && eventData.okeyHelperTitle) {
    okeyHelperTitleElement.textContent = eventData.okeyHelperTitle;
  }
  
  const okeyHelperDescElement = document.getElementById('okey-helper-desc');
  if (okeyHelperDescElement && eventData.okeyHelperDesc) {
    okeyHelperDescElement.textContent = eventData.okeyHelperDesc;
  }
  
  const okeyResetTextElement = document.getElementById('okey-reset-text');
  if (okeyResetTextElement && eventData.okeyResetText) {
    okeyResetTextElement.textContent = eventData.okeyResetText;
  }
  
  // Update Okey gameplay image for language-specific versions
  if (eventData.gameplayImage) {
    // Use more specific selector for Okey image within the Okey section
    const okeySection = document.getElementById('okey-content');
    if (okeySection) {
      const okeyImage = okeySection.querySelector('.event-showcase-image');
      const okeyCaption = okeySection.querySelector('.event-showcase-image + p');
      
      if (okeyImage) {
        okeyImage.src = eventData.gameplayImage.src;
        okeyImage.alt = eventData.gameplayImage.alt;
      }
      
      if (okeyCaption) {
        okeyCaption.textContent = eventData.gameplayImage.caption;
      }
    }
  }
}

// Okey Helper Card Functionality
function initOkeyHelper() {
  const cardGrid = document.getElementById('okey-card-grid');
  const resetBtn = document.getElementById('okey-reset-btn');
  
  if (!cardGrid || !resetBtn) return;

  // Add click event to all cards with improved event handling
  const cards = cardGrid.querySelectorAll('.okey-card');
  cards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleCard(this);
    }, { passive: false });
  });

  // Add reset functionality
  resetBtn.addEventListener('click', function() {
    resetAllCards();
  });
}

function toggleCard(cardElement) {
  // Sofortige DOM-Änderung
  cardElement.classList.toggle('played');
  
  // Debounced localStorage save to prevent excessive calls
  debouncedSaveCardState();
}

function resetAllCards() {
  const cards = document.querySelectorAll('.okey-card');
  cards.forEach(card => {
    card.classList.remove('played');
  });
  
  // Clear localStorage
  localStorage.removeItem('okeyHelperState');
}

function saveCardState() {
  const playedCards = [];
  const cards = document.querySelectorAll('.okey-card.played');
  
  cards.forEach(card => {
    const color = card.getAttribute('data-color');
    const number = card.getAttribute('data-number');
    playedCards.push(`${color}-${number}`);
  });
  
  localStorage.setItem('okeyHelperState', JSON.stringify(playedCards));
}

// Debounced version of saveCardState to prevent excessive localStorage calls
function debouncedSaveCardState() {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    saveCardState();
  }, 100);
}

function loadCardState() {
  const savedState = localStorage.getItem('okeyHelperState');
  if (!savedState) return;
  
  try {
    const playedCards = JSON.parse(savedState);
    playedCards.forEach(cardId => {
      const [color, number] = cardId.split('-');
      const card = document.querySelector(`[data-color="${color}"][data-number="${number}"]`);
      if (card) {
        card.classList.add('played');
      }
    });
  } catch (error) {
    console.log('Error loading Okey Helper state:', error);
  }
}

// Initialize Okey event on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  initOkeyEvent();
  
  // Load saved card state with delay
  setTimeout(() => {
    loadCardState();
  }, 100);
});

// Register with core event system
if (typeof window.eventModules === 'undefined') {
  window.eventModules = {};
}
window.eventModules.okey = {
  updateContent: updateOkeyContent
};