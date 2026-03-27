/**
 * APP LOGIC & STATE MANAGEMENT
 */
let tutorialSteps = [];
let currentStepIndex = 0;
let currentLevelName = "";

function startLevel(levelName, dataArray) {
    tutorialSteps = dataArray;
    currentStepIndex = 0;
    currentLevelName = levelName;
    
    // Switch Views
    document.getElementById('level-selector').classList.add('hidden');
    const appContainer = document.getElementById('app-container');
    appContainer.classList.remove('hidden');
    appContainer.classList.add('flex');
    
    // Update Header
    document.getElementById('level-title').innerText = `${levelName} Sandbox`;
    
    // Initialize App
    renderSidebar();
    renderWorkspace();
}

/**
 * UI CONTROLLERS
 */
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    icon.className = isLight ? "fa-solid fa-sun text-lg" : "fa-solid fa-moon text-lg";
}

function updateProgressBar() {
    const bar = document.getElementById('progressBar');
    const passedCount = tutorialSteps.filter(s => s.passed).length;
    const perc = (passedCount / tutorialSteps.length) * 100;
    bar.style.width = `${perc}%`;
}

function refreshControlState() {
    const step = tutorialSteps[currentStepIndex];
    const btnNext = document.getElementById('btn-next');
    const btnSubmit = document.getElementById('btn-submit');

    if (step && step.passed) {
        btnNext.disabled = false;
        btnNext.className = "px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold shadow-lg shadow-emerald-500/20 transition-all text-sm flex items-center";
        btnSubmit.disabled = true;
        btnSubmit.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        btnNext.disabled = true;
        btnNext.className = "px-6 py-2 bg-slate-400/20 text-slate-500 rounded-lg font-semibold transition-all text-sm flex items-center";
        if(btnSubmit) {
            btnSubmit.disabled = false;
            btnSubmit.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }
}

function renderWorkspace() {
    const workspace = document.getElementById('workspace-content');
    const actionPanel = document.getElementById('action-panel');
    
    if (currentStepIndex >= tutorialSteps.length) {
        renderCongratulations();
        return;
    }

    const step = tutorialSteps[currentStepIndex];
    actionPanel.classList.remove('hidden');
    actionPanel.classList.add('flex');

    workspace.innerHTML = `
        <div class="max-w-4xl mx-auto space-y-8 animate-fadeIn">
            <header class="space-y-2">
                <span class="text-xs font-bold text-indigo-500 uppercase tracking-widest">Level 0${step.id + 1}</span>
                <h2 class="text-3xl font-extrabold tracking-tight">${step.title}</h2>
                <p class="text-slate-500 text-sm max-w-2xl leading-relaxed">${step.concept}</p>
            </header>

            <div class="bg-indigo-500/5 p-5 rounded-xl border border-indigo-500/10 flex flex-wrap gap-3 items-center">
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mr-2">Syntax Tokens:</span>
                ${step.options.map((opt) => `
                    <div class="pill-draggable bg-indigo-600 text-white px-4 py-1.5 rounded-lg text-sm code-font shadow-md hover:bg-indigo-500" 
                         draggable="true" 
                         data-value="${opt.replace(/"/g, '&quot;')}">${opt}</div>
                `).join('')}
            </div>

            <div class="code-container border rounded-xl shadow-2xl overflow-hidden transition-all">
                <div class="bg-slate-800/20 px-4 py-3 border-b border-slate-500/10 flex items-center justify-between">
                    <div class="flex space-x-2">
                        <span class="h-3 w-3 rounded-full bg-red-500/50"></span>
                        <span class="h-3 w-3 rounded-full bg-amber-500/50"></span>
                        <span class="h-3 w-3 rounded-full bg-emerald-500/50"></span>
                    </div>
                    <span class="text-[10px] text-slate-500 font-mono tracking-widest">main.py</span>
                </div>
                <div class="p-8 text-sm code-font leading-loose tracking-wide"><pre class="whitespace-pre-wrap">${step.codeTemplate}</pre></div>
            </div>
        </div>
    `;

    bindDragEvents();
    updateProgressBar();
    refreshControlState();
    
    const zones = document.querySelectorAll('.drop-zone');
    zones.forEach(z => {
        const idx = z.getAttribute('data-index');
        if (step.userInputs[idx]) {
            z.innerText = step.userInputs[idx];
            z.classList.add('filled');
            if (step.passed) z.classList.add('success');
        }
    });
}

function renderSidebar() {
    const sidebar = document.getElementById('sidebar-nav');
    sidebar.innerHTML = tutorialSteps.map((step, idx) => {
        const isActive = idx === currentStepIndex;
        const isPassed = step.passed;
        
        let icon = '<i class="fa-regular fa-circle text-slate-500"></i>';
        if (isActive) icon = '<i class="fa-solid fa-circle-dot text-indigo-500"></i>';
        if (isPassed) icon = '<i class="fa-solid fa-circle-check text-emerald-500"></i>';

        return `
            <button onclick="${(idx <= tutorialSteps.findIndex(s => !s.passed) || isPassed) ? `jumpTo(${idx})` : ''}" 
                    class="w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between text-sm transition-all 
                    ${isActive ? 'bg-indigo-600/10 text-indigo-500 font-bold border border-indigo-500/20' : 'text-slate-500 hover:bg-slate-800/20'}">
                <div class="flex items-center space-x-3">
                    <span class="w-4 text-center">${icon}</span>
                    <span class="truncate">${step.title}</span>
                </div>
            </button>
        `;
    }).join('');
}

/**
 * CORE LOGIC: DRAG, DROP & VALIDATION
 */
function bindDragEvents() {
    const pills = document.querySelectorAll('.pill-draggable');
    const zones = document.querySelectorAll('.drop-zone');

    pills.forEach(pill => {
        pill.addEventListener('dragstart', (e) => {
            pill.classList.add('dragging');
            e.dataTransfer.setData('text/plain', pill.getAttribute('data-value'));
        });
        pill.addEventListener('dragend', () => pill.classList.remove('dragging'));
    });

    zones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });
        zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            const val = e.dataTransfer.getData('text/plain');
            zone.innerText = val;
            zone.classList.add('filled');
            tutorialSteps[currentStepIndex].userInputs[zone.dataset.index] = val;
        });
        zone.addEventListener('click', () => {
            if (tutorialSteps[currentStepIndex].passed) return;
            zone.innerText = "";
            zone.classList.remove('filled', 'error', 'success');
            tutorialSteps[currentStepIndex].userInputs[zone.dataset.index] = "";
        });
    });
}

function submitStep() {
    const step = tutorialSteps[currentStepIndex];
    const zones = document.querySelectorAll('.drop-zone');
    let isAllCorrect = true;

    zones.forEach(z => {
        const idx = z.dataset.index;
        if (step.userInputs[idx] === step.answers[idx]) {
            z.classList.remove('error');
            z.classList.add('success');
        } else {
            z.classList.add('error');
            isAllCorrect = false;
        }
    });

    const fb = document.getElementById('feedback-msg');
    fb.classList.remove('opacity-0');
    
    if (isAllCorrect) {
        step.passed = true;
        fb.innerHTML = `<i class="fa-solid fa-check text-emerald-500 mr-2"></i> Logic Validated!`;
        fb.className = "text-sm font-medium text-emerald-500 transition-all duration-300";
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.8 } });
        
        updateProgressBar(); 
        refreshControlState();
        renderSidebar();
    } else {
        fb.innerHTML = `<i class="fa-solid fa-xmark text-red-500 mr-2"></i> Syntactic Mismatch.`;
        fb.className = "text-sm font-medium text-red-500 transition-all duration-300";
    }
}

function showSolution() {
    const step = tutorialSteps[currentStepIndex];
    const zones = document.querySelectorAll('.drop-zone');
    zones.forEach(z => {
        const ans = step.answers[z.dataset.index];
        z.innerText = ans;
        z.classList.add('filled', 'success');
        step.userInputs[z.dataset.index] = ans;
    });
    step.passed = true;
    updateProgressBar();
    refreshControlState();
    renderSidebar();
}

function nextStep() {
    currentStepIndex++;
    renderWorkspace();
    renderSidebar();
    document.getElementById('feedback-msg').classList.add('opacity-0');
}

function jumpTo(idx) {
    currentStepIndex = idx;
    renderWorkspace();
    renderSidebar();
}

function renderCongratulations() {
    const workspace = document.getElementById('workspace-content');
    document.getElementById('action-panel').classList.add('hidden');
    document.getElementById('action-panel').classList.remove('flex');
    updateProgressBar();

    workspace.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center text-center px-4 animate-fadeIn">
            <div class="bg-gradient-to-br from-indigo-500 to-purple-600 h-24 w-24 rounded-3xl flex items-center justify-center shadow-2xl mb-8">
                <i class="fa-solid fa-crown text-4xl text-white"></i>
            </div>
            <h1 class="text-5xl font-black tracking-tighter mb-4">${currentLevelName} Complete!</h1>
            <p class="text-slate-500 text-lg max-w-xl mb-10 leading-relaxed">
                You have successfully mastered the ${currentLevelName.toLowerCase()} concepts in Python.
            </p>
            <button onclick="location.reload()" class="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-2xl hover:bg-indigo-500 transition-all flex items-center">
                <i class="fa-solid fa-house mr-3"></i> Return to Main Menu
            </button>
        </div>
    `;
    triggerHeavyConfetti();
}

function triggerHeavyConfetti() {
    const duration = 3000;
    const end = Date.now() + duration;
    (function frame() {
        confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());
}