// ===== DATA =====
const STEPS = [
  { title:"ELECTION ANNOUNCEMENT", time:"DAY 0", desc:"The Election Commission announces the schedule — dates for nominations, campaigning, polling, and counting are set. The Model Code of Conduct takes effect immediately, restricting government from announcing new policies." },
  { title:"VOTER REGISTRATION & ROLL REVISION", time:"DAY 1–15", desc:"Electoral rolls are revised and updated. Citizens verify their names, register as new voters, or request corrections. Voter ID cards (EPIC) are issued. You can check your status online or via the Voter Helpline App." },
  { title:"CANDIDATE NOMINATIONS", time:"DAY 10–20", desc:"Candidates file nomination papers with the Returning Officer. Papers are scrutinized for eligibility — age, citizenship, criminal record. Security deposits are paid. Candidates may withdraw before the deadline. Symbols are allotted." },
  { title:"CAMPAIGNING PERIOD", time:"DAY 20–45", desc:"Parties and candidates campaign through rallies, media, social media, and door-to-door outreach. Spending limits are enforced. Religious/caste-based appeals are banned. A 48-hour silence period begins before polling." },
  { title:"ELECTION DAY (POLLING)", time:"DAY 45–50", desc:"Voters cast ballots at designated polling stations using EVMs. Identity is verified, ink is applied, and votes are cast privately. VVPAT slips allow verification. NOTA (None of the Above) is available. Postal ballots serve armed forces." },
  { title:"VOTE COUNTING", time:"DAY 50–53", desc:"Sealed EVMs are transported to counting centers under strict security. Votes are tallied round by round with party agents observing. VVPAT paper slips are cross-verified. Any discrepancy triggers a full recount of that unit." },
  { title:"RESULT DECLARATION", time:"DAY 53+", desc:"The Returning Officer declares winners per constituency. Certificates of Election are issued. The majority party/coalition is invited to form the government. Disputes can be filed as election petitions in court." }
];

const TOPICS = [
  { icon:"📝", title:"VOTER REGISTRATION", summary:"Registration, eligibility & Voter ID",
    detail:`<h4>ELIGIBILITY</h4><ul><li>Citizen <strong>18 years or older</strong> on qualifying date</li><li>Must be a <strong>resident</strong> of the constituency</li><li>Not disqualified (unsound mind, corrupt practices)</li></ul><h4>HOW TO REGISTER</h4><ul><li><strong>Online:</strong> Election Commission portal → Form 6 → upload docs → submit</li><li><strong>Offline:</strong> Form 6 at Electoral Registration Office</li><li><strong>Documents:</strong> Age proof, address proof, passport photo</li></ul><h4>CHECK STATUS</h4><ul><li>Search by name or EPIC number online</li><li>Voter Helpline App</li><li>Toll-free helpline</li></ul>` },
  { icon:"🎯", title:"CANDIDATE NOMINATIONS", summary:"Filing, eligibility & symbols",
    detail:`<h4>ELIGIBILITY</h4><ul><li>Citizen, registered voter</li><li><strong>Min age:</strong> 25 (lower house), 30 (upper house)</li><li>No office of profit under government</li><li>No conviction of certain offenses</li></ul><h4>FILING PROCESS</h4><ul><li>Submit papers to <strong>Returning Officer</strong></li><li>Pay <strong>security deposit</strong></li><li>Papers <strong>scrutinized</strong> for validity</li><li>Withdrawal allowed before deadline</li></ul><h4>SYMBOLS</h4><ul><li>Recognized parties → <strong>reserved symbols</strong></li><li>Independents → choose from <strong>free symbols</strong></li></ul>` },
  { icon:"📢", title:"CAMPAIGNING RULES", summary:"Code of conduct & restrictions",
    detail:`<h4>PERMITTED</h4><ul><li>Public rallies & meetings (with permission)</li><li>Media advertisements</li><li>Social media campaigns</li><li>Door-to-door canvassing</li></ul><h4>RESTRICTED</h4><ul><li><strong>Model Code of Conduct</strong> enforced from announcement</li><li>No <strong>religious/caste appeals</strong></li><li>No <strong>bribery or intimidation</strong></li><li><strong>48-hour silence</strong> before polling</li><li>Expenditure limits per candidate</li></ul>` },
  { icon:"🗳️", title:"ELECTION DAY", summary:"Polling procedures & special provisions",
    detail:`<h4>BEFORE POLLING</h4><ul><li>Locate <strong>polling station</strong> via portal/app</li><li>Carry <strong>Voter ID</strong> or approved photo ID</li></ul><h4>AT THE STATION</h4><ul><li><strong>1.</strong> Queue up → present ID at verification desk</li><li><strong>2.</strong> Name checked against electoral roll</li><li><strong>3.</strong> Indelible ink applied on finger</li><li><strong>4.</strong> Cast vote on EVM in polling booth</li><li><strong>5.</strong> Verify via VVPAT slip</li></ul><h4>SPECIAL PROVISIONS</h4><ul><li><strong>Postal ballots</strong> for armed forces & diplomats</li><li><strong>Accessible voting</strong> for disabled persons</li><li><strong>NOTA</strong> option available</li></ul>` },
  { icon:"🔢", title:"VOTE COUNTING", summary:"Counting process & verification",
    detail:`<h4>PROCESS</h4><ul><li>Counting on designated <strong>counting day</strong></li><li>EVMs in <strong>secure strong rooms</strong> under surveillance</li><li>All party agents can <strong>observe</strong></li><li>Round-by-round counting from batches of EVMs</li></ul><h4>VVPAT VERIFICATION</h4><ul><li>Percentage of slips <strong>cross-verified</strong></li><li>Discrepancy → full VVPAT count for that unit</li></ul><h4>COMPILATION</h4><ul><li>Round-by-round results shared live</li><li><strong>Returning Officer</strong> declares final result</li></ul>` },
  { icon:"🏛️", title:"RESULT DECLARATION", summary:"Winners, government formation & disputes",
    detail:`<h4>OFFICIAL DECLARATION</h4><ul><li>Returning Officer announces <strong>winner per constituency</strong></li><li>Winners get <strong>Certificate of Election</strong></li><li>Results published on EC website</li></ul><h4>GOVERNMENT FORMATION</h4><ul><li><strong>Majority</strong> party/coalition invited to form government</li><li>Head of state appoints <strong>leader</strong></li><li>No majority → coalition negotiations</li></ul><h4>DISPUTES</h4><ul><li><strong>Election petitions</strong> in courts</li><li>Grounds: corrupt practices, rule violations</li></ul>` },
  { icon:"⚖️", title:"ELECTION COMMISSION", summary:"Powers, role & independence",
    detail:`<h4>RESPONSIBILITIES</h4><ul><li>Conduct <strong>free and fair elections</strong></li><li>Prepare & update <strong>electoral rolls</strong></li><li>Schedule elections, announce <strong>dates</strong></li><li>Enforce <strong>Model Code of Conduct</strong></li></ul><h4>POWERS</h4><ul><li><strong>Postpone or cancel</strong> elections</li><li><strong>Disqualify</strong> violating candidates</li><li>Order <strong>re-polling</strong></li><li>Monitor <strong>expenditure</strong></li></ul><h4>INDEPENDENCE</h4><ul><li><strong>Autonomous constitutional body</strong></li><li>Fixed tenure & service security</li><li><strong>Impartial</strong> — free from government control</li></ul>` }
];

const QUIZ_DATA = [
  { q:"What is the minimum voting age?", opts:["16 years","18 years","21 years","25 years"], correct:1, explain:"The minimum age to vote is 18 years on the qualifying date." },
  { q:"What does NOTA stand for?", opts:["Not On The Agenda","None of the Above","National Open Tally Association","No Official Turnout Allowed"], correct:1, explain:"NOTA = None of the Above — lets you reject all candidates." },
  { q:"How long before polling must campaigning stop?", opts:["24 hours","36 hours","48 hours","72 hours"], correct:2, explain:"A 48-hour silence period is mandated before polling begins." },
  { q:"What is the security deposit for?", opts:["Voter registration fee","Candidate nomination filing","Polling booth rental","Campaign funding"], correct:1, explain:"Candidates pay a security deposit when filing nominations, refundable if they win enough votes." },
  { q:"What is VVPAT?", opts:["Very Valid Paper Audit Trail","Voter Verifiable Paper Audit Trail","Vote Validation Process And Tally","Verified Voter Paper Authentication"], correct:1, explain:"VVPAT prints a paper slip of your vote for verification." },
  { q:"Who declares the election result for a constituency?", opts:["Prime Minister","Election Commissioner","Returning Officer","Chief Justice"], correct:2, explain:"The Returning Officer officially declares results per constituency." },
  { q:"What comes into effect when elections are announced?", opts:["Emergency provisions","Model Code of Conduct","Martial law","Budget freeze"], correct:1, explain:"The Model Code of Conduct governs party and government behavior once elections are announced." },
  { q:"Which body conducts elections in India?", opts:["Supreme Court","Parliament","Election Commission","NITI Aayog"], correct:2, explain:"The Election Commission is an autonomous constitutional body that conducts all elections." }
];

const CHAT_KB = [
  { keys:["register","registration","enroll","voter id","epic","form 6"], answer:`<strong>VOTER REGISTRATION</strong><ul><li><strong>Eligibility:</strong> 18+ citizen residing in the constituency</li><li><strong>Online:</strong> EC portal → Form 6 → upload docs → submit</li><li><strong>Offline:</strong> Form 6 at Electoral Registration Office</li><li><strong>Documents:</strong> Age proof, address proof, passport photo</li><li><strong>Check Status:</strong> Voter Helpline App or online search</li></ul>` },
  { keys:["nomination","candidate","contest","eligibility","stand for"], answer:`<strong>CANDIDATE NOMINATIONS</strong><ul><li><strong>Age:</strong> 25+ (lower house), 30+ (upper house)</li><li><strong>Filing:</strong> Submit papers to Returning Officer</li><li><strong>Deposit:</strong> Security deposit required</li><li><strong>Scrutiny:</strong> Papers reviewed for validity</li><li><strong>Symbols:</strong> Reserved for parties, free for independents</li></ul>` },
  { keys:["campaign","rally","code of conduct","model code","advertis"], answer:`<strong>CAMPAIGNING RULES</strong><ul><li><strong>Allowed:</strong> Rallies, media ads, social media, canvassing</li><li><strong>Banned:</strong> Religious appeals, bribery, intimidation</li><li><strong>Silence:</strong> 48 hours before polling</li><li><strong>Spending:</strong> Expenditure limits enforced</li></ul>` },
  { keys:["election day","polling","vote","booth","evm","ballot","how to vote"], answer:`<strong>ELECTION DAY</strong><ul><li><strong>1.</strong> Locate polling station via portal/app</li><li><strong>2.</strong> Present Voter ID at verification desk</li><li><strong>3.</strong> Get ink mark on finger</li><li><strong>4.</strong> Cast vote on EVM in private booth</li><li><strong>5.</strong> Verify via VVPAT slip</li><li><strong>NOTA:</strong> Available to reject all candidates</li></ul>` },
  { keys:["count","counting","tally","result","winner","declare"], answer:`<strong>VOTE COUNTING & RESULTS</strong><ul><li><strong>Security:</strong> EVMs in sealed strong rooms with 24/7 surveillance</li><li><strong>Process:</strong> Round-by-round counting with party agents</li><li><strong>VVPAT:</strong> Cross-verified against EVM tallies</li><li><strong>Declaration:</strong> Returning Officer announces winner</li><li><strong>Government:</strong> Majority party invited to form govt</li></ul>` },
  { keys:["election commission","ec","eci","commissioner","autonomous"], answer:`<strong>ELECTION COMMISSION</strong><ul><li><strong>Role:</strong> Conducts free & fair elections at all levels</li><li><strong>Powers:</strong> Schedule, enforce code, monitor spending, disqualify</li><li><strong>Independence:</strong> Autonomous constitutional body</li><li><strong>Special:</strong> Can postpone/cancel polls, order re-polling</li></ul>` },
  { keys:["nota","none of the above"], answer:`<strong>NOTA</strong><ul><li>Stands for "None of the Above"</li><li>Last option on the EVM</li><li>Lets you formally reject all candidates</li><li>Even if NOTA wins most votes, next highest candidate wins</li><li>Measures voter dissatisfaction</li></ul>` },
  { keys:["postal","mail","absentee","overseas","nri"], answer:`<strong>POSTAL VOTING</strong><ul><li>Available for armed forces & their families</li><li>Government officials on election duty</li><li>Diplomats posted abroad</li><li>Essential service workers</li><li>NRIs can register as overseas voters</li></ul>` },
  { keys:["vvpat","paper trail","audit"], answer:`<strong>VVPAT</strong><ul><li>Voter Verifiable Paper Audit Trail</li><li>Prints a paper slip showing your vote</li><li>Visible for 7 seconds behind glass</li><li>Drops into sealed box</li><li>Cross-verified during counting</li></ul>` }
];

const DEFAULT_ANSWER = `I don't have a specific answer for that query.<br>Try asking about: <strong>register, nomination, campaign, voting, counting, results, commission, nota, vvpat</strong>`;

// ===== STATE =====
let currentStep = 0;
let currentTopic = -1;
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let startTime = Date.now();

// ===== CLOCK & UPTIME =====
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');
  document.getElementById('sb-clock').textContent = `${h}:${m}:${s}`;
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const em = String(Math.floor(elapsed / 60)).padStart(2,'0');
  const es = String(elapsed % 60).padStart(2,'0');
  document.getElementById('uptime').textContent = `${em}:${es}`;
}

// ===== SIDEBAR NAV =====
function switchPanel(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-' + name).classList.add('active');
  document.querySelector(`[data-panel="${name}"]`).classList.add('active');
}

// ===== ASCII BANNER =====
function renderAscii() {
  const art = `
 ███████╗██╗     ███████╗ ██████╗████████╗██╗ ██████╗ 
 ██╔════╝██║     ██╔════╝██╔════╝╚══██╔══╝██║██╔═══██╗
 █████╗  ██║     █████╗  ██║        ██║   ██║██║   ██║
 ██╔══╝  ██║     ██╔══╝  ██║        ██║   ██║██║   ██║
 ███████╗███████╗███████╗╚██████╗   ██║   ██║╚██████╔╝
 ╚══════╝╚══════╝╚══════╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝`;
  document.getElementById('ascii-banner').textContent = art;
}

// ===== COUNTER ANIM =====
function animateCounters() {
  document.querySelectorAll('.dc-num').forEach(el => {
    const target = +el.dataset.count;
    let cur = 0;
    const step = Math.max(1, Math.floor(target / 30));
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(t); }
      el.textContent = cur;
    }, 40);
  });
}

// ===== PROCESS VIEWER =====
function renderStep() {
  const s = STEPS[currentStep];
  document.getElementById('pv-badge').textContent = `STEP ${String(currentStep+1).padStart(2,'0')}`;
  document.getElementById('pv-title').textContent = s.title;
  document.getElementById('pv-time').textContent = `// ${s.time}`;
  document.getElementById('pv-desc').textContent = s.desc;
  document.getElementById('pv-current').textContent = currentStep + 1;
  document.getElementById('pv-fill').style.width = ((currentStep + 1) / STEPS.length * 100) + '%';
  // dots
  const dotsEl = document.getElementById('pv-dots');
  dotsEl.innerHTML = STEPS.map((_, i) =>
    `<div class="pv-dot ${i === currentStep ? 'active' : ''}" data-step="${i}"></div>`
  ).join('');
  dotsEl.querySelectorAll('.pv-dot').forEach(d => {
    d.addEventListener('click', () => { currentStep = +d.dataset.step; renderStep(); });
  });
  // re-animate card
  const card = document.getElementById('pv-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = 'fadeIn 0.4s ease';
}

// ===== DATABASE =====
function renderDatabase() {
  const list = document.getElementById('db-list');
  list.innerHTML = TOPICS.map((t, i) =>
    `<div class="db-item" data-index="${i}">
       <span class="db-ico">${t.icon}</span>
       <div class="db-item-info"><h4>${t.title}</h4><p>${t.summary}</p></div>
     </div>`
  ).join('');
  list.querySelectorAll('.db-item').forEach(item => {
    item.addEventListener('click', () => {
      const idx = +item.dataset.index;
      currentTopic = idx;
      list.querySelectorAll('.db-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      showTopicDetail(idx);
    });
  });
}

function showTopicDetail(idx) {
  const t = TOPICS[idx];
  const detail = document.getElementById('db-detail');
  detail.innerHTML = `<div class="db-detail-content"><h3>${t.icon} ${t.title}</h3>${t.detail}</div>`;
}

// ===== TERMINAL CHAT =====
function termAddLine(html, cls) {
  const output = document.getElementById('term-output');
  const div = document.createElement('div');
  div.className = 'term-line ' + cls;
  div.innerHTML = html;
  output.appendChild(div);
  output.scrollTop = output.scrollHeight;
}

function findAnswer(q) {
  const lower = q.toLowerCase();
  for (const entry of CHAT_KB) {
    if (entry.keys.some(k => lower.includes(k))) return entry.answer;
  }
  return DEFAULT_ANSWER;
}

function handleTerminal(query) {
  if (!query.trim()) return;
  termAddLine(query, 'usr');
  setTimeout(() => {
    termAddLine(findAnswer(query), 'bot');
    termAddLine('───────────────────────────────────────────────────', 'sys');
  }, 300);
}

// ===== QUIZ =====
function renderQuiz() {
  const q = QUIZ_DATA[quizIndex];
  document.getElementById('quiz-num').textContent = `Q.${String(quizIndex+1).padStart(2,'0')} / ${QUIZ_DATA.length}`;
  document.getElementById('quiz-question').textContent = q.q;
  document.getElementById('quiz-score-display').textContent = `Score: ${quizScore}/${quizIndex}`;
  document.getElementById('qp-fill').style.width = ((quizIndex) / QUIZ_DATA.length * 100) + '%';
  const fb = document.getElementById('quiz-feedback');
  fb.className = 'quiz-feedback';
  fb.textContent = '';
  quizAnswered = false;

  const optsEl = document.getElementById('quiz-options');
  optsEl.innerHTML = q.opts.map((o, i) =>
    `<button class="quiz-opt" data-idx="${i}">${String.fromCharCode(65+i)}. ${o}</button>`
  ).join('');

  optsEl.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      if (quizAnswered) return;
      quizAnswered = true;
      const chosen = +btn.dataset.idx;
      const isCorrect = chosen === q.correct;
      if (isCorrect) quizScore++;

      optsEl.querySelectorAll('.quiz-opt').forEach(b => {
        b.classList.add('disabled');
        if (+b.dataset.idx === q.correct) b.classList.add('correct');
        if (+b.dataset.idx === chosen && !isCorrect) b.classList.add('wrong');
      });

      fb.textContent = (isCorrect ? '✓ CORRECT — ' : '✗ WRONG — ') + q.explain;
      fb.className = 'quiz-feedback show ' + (isCorrect ? 'correct-fb' : 'wrong-fb');
      document.getElementById('quiz-score-display').textContent = `Score: ${quizScore}/${quizIndex+1}`;
    });
  });

  // Show restart if last question
  document.getElementById('quiz-next').style.display = quizIndex < QUIZ_DATA.length - 1 ? '' : 'none';
  document.getElementById('quiz-restart').style.display = quizIndex >= QUIZ_DATA.length - 1 ? '' : 'none';
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Clock
  updateClock();
  setInterval(updateClock, 1000);

  // ASCII
  renderAscii();
  animateCounters();

  // Sidebar
  document.querySelectorAll('.sidebar-btn').forEach(btn => {
    btn.addEventListener('click', () => switchPanel(btn.dataset.panel));
  });

  // Quick access
  document.querySelectorAll('.qa-btn').forEach(btn => {
    btn.addEventListener('click', () => switchPanel(btn.dataset.goto));
  });

  // Process
  document.getElementById('pv-total').textContent = STEPS.length;
  renderStep();
  document.getElementById('pv-prev').addEventListener('click', () => {
    currentStep = (currentStep - 1 + STEPS.length) % STEPS.length;
    renderStep();
  });
  document.getElementById('pv-next').addEventListener('click', () => {
    currentStep = (currentStep + 1) % STEPS.length;
    renderStep();
  });
  document.addEventListener('keydown', e => {
    if (document.getElementById('panel-process').classList.contains('active')) {
      if (e.key === 'ArrowLeft') { currentStep = (currentStep - 1 + STEPS.length) % STEPS.length; renderStep(); }
      if (e.key === 'ArrowRight') { currentStep = (currentStep + 1) % STEPS.length; renderStep(); }
    }
  });

  // Database
  renderDatabase();

  // Terminal
  document.getElementById('term-form').addEventListener('submit', e => {
    e.preventDefault();
    const input = document.getElementById('term-cmd');
    handleTerminal(input.value);
    input.value = '';
  });
  document.querySelectorAll('.t-chip').forEach(c => {
    c.addEventListener('click', () => handleTerminal(c.dataset.q));
  });

  // Quiz
  renderQuiz();
  document.getElementById('quiz-next').addEventListener('click', () => {
    if (!quizAnswered) return;
    quizIndex++;
    renderQuiz();
  });
  document.getElementById('quiz-restart').addEventListener('click', () => {
    quizIndex = 0;
    quizScore = 0;
    quizAnswered = false;
    renderQuiz();
  });

  // ===== GANGSTER EFFECTS =====
  initMatrixRain();
  initParticles();
  initGlitchText();
  initRippleEffect();
  initCardSlam();
  initExtremeEffects();
  initGodMode();
});

let mouseX = 0, mouseY = 0;

// ===== GOD MODE LOGIC =====
function initGodMode() {
  document.documentElement.classList.add('js-active');
  initStartupSequence();
  initCustomCursor();
  initCardGlows();
}

function initStartupSequence() {
  const overlay = document.getElementById('startup-overlay');
  const fill = overlay.querySelector('.startup-fill');
  const pct = document.getElementById('load-pct');
  const status = document.getElementById('load-status');
  
  const statuses = [
    "BYPASSING FIREWALLS...",
    "DECRYPTING ELECTIO_PROTOCOLS...",
    "INJECTING NEURAL OVERLAY...",
    "BYPASSING BIOMETRICS...",
    "ACCESS GRANTED."
  ];

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 8;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      status.textContent = statuses[statuses.length - 1];
      setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 1000);
      }, 500);
    }
    fill.style.width = progress + '%';
    pct.textContent = Math.floor(progress) + '%';
    status.textContent = statuses[Math.floor((progress/100) * (statuses.length - 1))];
  }, 150);
}

function initCustomCursor() {
  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  cursor.classList.add('active');
  cursor.innerHTML = '<div class="dot"></div>';
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
  });

  document.addEventListener('mousedown', () => cursor.style.transform += ' scale(0.8)');
  document.addEventListener('mouseup', () => cursor.style.transform = cursor.style.transform.replace(' scale(0.8)', ''));
}

function initCardGlows() {
  document.querySelectorAll('.dash-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });
  });
}

function triggerRandomGlitches() {
  setInterval(() => {
    const chance = Math.random();
    if (chance > 0.95) {
      const el = document.body;
      const type = Math.random() > 0.5 ? 'extreme-glitch' : 'god-glitch';
      el.classList.add(type);
      setTimeout(() => el.classList.remove(type), 100 + Math.random() * 200);
    }
  }, 2000);
}

// ===== EXTREME EFFECTS =====
function initExtremeEffects() {
  init3DTilt();
  triggerRandomGlitches();
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  document.addEventListener('mousedown', () => {
    document.body.classList.add('red-alert-active');
    setTimeout(() => document.body.classList.remove('red-alert-active'), 500);
  });
}

function init3DTilt() {
  const layout = document.querySelector('.app-layout');
  document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;
    layout.style.transform = `rotateY(${-x}deg) rotateX(${y}deg) translateZ(0)`;
  });
}

// ===== MATRIX RAIN (REACTION UPGRADE) =====
function initMatrixRain() {
  const canvas = document.getElementById('matrix-rain');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const cols = Math.floor(canvas.width / 18);
  const drops = Array(cols).fill(1);
  const chars = 'ELECTIO01アイウエオカキクケコ▓░▒█♦♣♠♥VOTE'.split('');

  function draw() {
    ctx.fillStyle = 'rgba(5,5,5,0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < drops.length; i++) {
      const x = i * 18;
      const y = drops[i] * 18;
      
      // Mouse Reaction
      const dist = Math.hypot(x - mouseX, y - mouseY);
      if (dist < 100) {
        ctx.fillStyle = '#fff'; // Brighten near mouse
        ctx.font = 'bold 16px "Fira Code"';
      } else {
        ctx.fillStyle = '#dc2626';
        ctx.font = '14px "Fira Code"';
      }

      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.globalAlpha = dist < 100 ? 0.8 : (Math.random() * 0.4 + 0.1);
      ctx.fillText(char, x, y);
      
      if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    ctx.globalAlpha = 1;
  }
  setInterval(draw, 40);
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ===== FLOATING PARTICLES =====
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  function spawnParticle() {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (4 + Math.random() * 6) + 's';
    p.style.animationDelay = Math.random() * 2 + 's';
    p.style.width = (2 + Math.random() * 3) + 'px';
    p.style.height = p.style.width;
    container.appendChild(p);
    setTimeout(() => p.remove(), 12000);
  }
  setInterval(spawnParticle, 400);
}

// ===== GLITCH TEXT =====
function initGlitchText() {
  document.querySelectorAll('.panel-header h1').forEach(h1 => {
    const redSpan = h1.querySelector('.red-text');
    if (redSpan) {
      redSpan.classList.add('glitch-text');
      redSpan.setAttribute('data-text', redSpan.textContent);
    }
  });
}

// ===== RIPPLE EFFECT =====
function initRippleEffect() {
  const targets = '.qa-btn, .sidebar-btn, .pv-arrow, .t-chip, .btn-quiz, .term-send';
  document.querySelectorAll(targets).forEach(el => {
    el.style.position = 'relative';
    el.style.overflow = 'hidden';
    el.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const rect = this.getBoundingClientRect();
      ripple.style.left = (e.clientX - rect.left) + 'px';
      ripple.style.top = (e.clientY - rect.top) + 'px';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// ===== CARD SLAM ON NAV =====
function initCardSlam() {
  const origRenderStep = renderStep;
  window.renderStepOrig = origRenderStep;
  // Override renderStep to add slam animation
  window.renderStep = function() {
    origRenderStep();
    const card = document.getElementById('pv-card');
    card.style.animation = 'none';
    card.offsetHeight;
    card.style.animation = 'cardSlam 0.5s cubic-bezier(0.25,0.46,0.45,0.94)';
  };
  // Re-bind nav buttons
  document.getElementById('pv-prev').onclick = () => {
    currentStep = (currentStep - 1 + STEPS.length) % STEPS.length;
    window.renderStep();
  };
  document.getElementById('pv-next').onclick = () => {
    currentStep = (currentStep + 1) % STEPS.length;
    window.renderStep();
  };
}

