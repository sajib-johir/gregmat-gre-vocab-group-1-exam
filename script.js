const wordList = [
  "Abound", "Amorphous", "Austere", "Belie", "Capricious", "Cerebral", "Congenial", "Conspicuous", "Cursory", "Daunting",
  "Deify", "Didactic", "Disseminate", "Feasible", "Flout", "Homogeneous", "Humdrum", "Insipid", "Loquacious", "Misanthropic",
  "Misnomer", "Negligent", "Obsequious", "Placate", "Proclivity", "Puerile", "Quixotic", "Spendthrift", "Taciturn", "Wary"
];

const examInfo = {
  basic: {
    order: 1,
    title: "Basic Easy Recall Exam",
    difficulty: "Easy to lower-medium",
    marks: 40,
    timeMinutes: 25,
    purpose: "Meaning, synonym, antonym, and simple usage recall",
    bestFor: "Best for first revision. This exam checks meaning, GRE synonyms, antonyms, simple usage, and single-blank recall from today’s 30 words.",
    partSize: 10
  },
  medium: {
    order: 2,
    title: "Medium Mixed Exam",
    difficulty: "Medium",
    marks: 35,
    timeMinutes: 25,
    purpose: "Balanced mixed practice with all major question types",
    bestFor: "Best for balanced practice. This exam includes MCQ, single blank, double blank, triple blank, sentence equivalence, typed answer, and confusing-word questions.",
    partSize: 9
  },
  hard: {
    order: 3,
    title: "Hard GRE-Like Exam",
    difficulty: "Hard",
    marks: 30,
    timeMinutes: 20,
    purpose: "Real GRE-style challenge under tighter time pressure",
    bestFor: "Best for serious GRE-style practice. This exam focuses on sentence logic, double blanks, triple blanks, sentence equivalence, subtle vocabulary choices, tone, and advanced contextual reasoning.",
    partSize: 9
  }
};

function makeMcq(id, word, prompt, options, correct, label = "MCQ") {
  return { id, type: "mcq", label, word, prompt, options, correct, marks: 1 };
}
function makeSingle(id, word, prompt, options, correct) {
  return { id, type: "single", label: "Single Blank", word, prompt, options, correct, marks: 1 };
}
function makeTyped(id, word, prompt, answers) {
  return { id, type: "typed", label: "Typed Answer", word, prompt, answers, marks: 1 };
}
function makeMulti(id, type, word, prompt, blanks) {
  const marks = blanks.length;
  return { id, type, label: type === "double" ? "Double Blank" : "Triple Blank", word, prompt, blanks, marks };
}
function makeSE(id, word, prompt, options, correct) {
  return { id, type: "se", label: "Sentence Equivalence", word, prompt, options, correct, marks: 2 };
}

const exams = {
  basic: [
    makeMcq("b1", "Abound", "Choose the word that means to exist in large numbers or large quantity.", ["Belie", "Abound", "Flout", "Placate"], 1),
    makeMcq("b2", "Amorphous", "Choose the word that means without clear shape, form, or structure.", ["Austere", "Homogeneous", "Amorphous", "Wary"], 2),
    makeMcq("b3", "Austere", "Choose the word that best means strict, plain, and without luxury.", ["Austere", "Congenial", "Loquacious", "Insipid"], 0),
    makeMcq("b4", "Belie", "Choose the word that means to give a false impression or contradict the truth.", ["Disseminate", "Belie", "Deify", "Abound"], 1),
    makeMcq("b5", "Capricious", "Choose the vocabulary word closest to fickle, mercurial, or unpredictable.", ["Capricious", "Feasible", "Taciturn", "Negligent"], 0),
    makeMcq("b6", "Cerebral", "Choose the vocabulary word closest to intellectual, analytical, or brain-related.", ["Puerile", "Cerebral", "Humdrum", "Spendthrift"], 1),
    makeMcq("b7", "Congenial", "Choose the vocabulary word closest to agreeable, pleasant, or compatible.", ["Misanthropic", "Conspicuous", "Congenial", "Quixotic"], 2),
    makeMcq("b8", "Conspicuous", "Choose the vocabulary word closest to noticeable, obvious, or prominent.", ["Cursory", "Conspicuous", "Obsequious", "Amorphous"], 1),
    makeMcq("b9", "Cursory", "Choose the best opposite of quick, shallow, and superficial.", ["Cursory", "Thorough", "Perfunctory", "Hasty"], 1),
    makeMcq("b10", "Daunting", "Choose the best opposite of intimidatingly difficult.", ["Formidable", "Forbidding", "Manageable", "Dismaying"], 2),

    makeMcq("b11", "Deify", "Choose the word that means to treat someone as god-like or glorify excessively.", ["Vilify", "Deify", "Neglect", "Flout"], 1),
    makeMcq("b12", "Didactic", "Choose the word that means intended to teach, sometimes too preachy.", ["Didactic", "Insipid", "Wary", "Capricious"], 0),
    makeMcq("b13", "Disseminate", "Choose the vocabulary word closest to circulate, spread, or propagate.", ["Suppress", "Disseminate", "Placate", "Belie"], 1),
    makeMcq("b14", "Feasible", "Choose the vocabulary word closest to practicable, viable, or doable.", ["Quixotic", "Austere", "Feasible", "Puerile"], 2),
    makeMcq("b15", "Flout", "Choose the vocabulary word closest to defy, disregard, or openly disobey.", ["Flout", "Flaunt", "Placate", "Disseminate"], 0),
    makeMcq("b16", "Homogeneous", "Choose the word that means of the same kind throughout; uniform.", ["Homogeneous", "Amorphous", "Capricious", "Conspicuous"], 0),
    makeMcq("b17", "Humdrum", "Choose the word that means dull, ordinary, and monotonous.", ["Daunting", "Humdrum", "Congenial", "Loquacious"], 1),
    makeMcq("b18", "Insipid", "Choose the vocabulary word closest to bland, dull, or lacking flavor/interest.", ["Insipid", "Austere", "Wary", "Obsequious"], 0),
    makeMcq("b19", "Loquacious", "Choose the best opposite of very talkative.", ["Verbose", "Garrulous", "Taciturn", "Prolific"], 2),
    makeMcq("b20", "Misanthropic", "Choose the word that means distrustful of or hating humankind.", ["Congenial", "Misanthropic", "Cerebral", "Feasible"], 1),

    makeMcq("b21", "Misnomer", "Choose the word that means an inaccurate or inappropriate name.", ["Misnomer", "Proclivity", "Dissemination", "Austerity"], 0),
    makeMcq("b22", "Negligent", "Choose the best opposite of careless or failing to take proper care.", ["Obsequious", "Careful", "Spendthrift", "Quixotic"], 1),
    makeMcq("b23", "Obsequious", "Choose the vocabulary word closest to servile, fawning, or excessively obedient.", ["Taciturn", "Puerile", "Obsequious", "Wary"], 2),
    makeMcq("b24", "Placate", "Choose the vocabulary word closest to appease, mollify, or calm someone down.", ["Placate", "Flout", "Belie", "Deify"], 0),
    makeMcq("b25", "Proclivity", "Choose the word that means a natural tendency or inclination.", ["Proclivity", "Misnomer", "Conspicuousness", "Austerity"], 0),

    makeSingle("b26", "Puerile", "The committee dismissed the proposal because its reasoning was childish and _____.", ["puerile", "cerebral", "feasible", "wary"], 0),
    makeSingle("b27", "Quixotic", "His plan to solve the crisis overnight was noble but _____.", ["homogeneous", "quixotic", "congenial", "negligent"], 1),
    makeSingle("b28", "Spendthrift", "After wasting his inheritance on luxuries, he earned a reputation as a _____.", ["misanthrope", "spendthrift", "pedant", "misnomer"], 1),
    makeSingle("b29", "Taciturn", "Unlike his loquacious sister, he was quiet and _____.", ["obsequious", "taciturn", "capricious", "humdrum"], 1),
    makeSingle("b30", "Wary", "After being misled once, the investors became _____ of the company’s promises.", ["wary", "insipid", "puerile", "austere"], 0),
    makeSingle("b31", "Amorphous", "The plan was too _____ to evaluate; no one knew its steps, timeline, or goal.", ["conspicuous", "amorphous", "homogeneous", "loquacious"], 1),
    makeSingle("b32", "Austere", "During the recession, the family adopted an _____ budget and bought only necessities.", ["austere", "obsequious", "capricious", "insipid"], 0),
    makeSingle("b33", "Belie", "Her cheerful tone seemed to _____ the anxiety visible in her trembling hands.", ["placate", "belie", "abound", "deify"], 1),
    makeSingle("b34", "Disseminate", "The agency used radio alerts to _____ evacuation instructions before the cyclone.", ["flout", "disseminate", "neglect", "misname"], 1),

    makeTyped("b35", "Flout", "Type the word that means to openly disobey a law, rule, or convention.", ["flout"]),
    makeTyped("b36", "Feasible", "Type the word that means possible and practical to do.", ["feasible"]),
    makeTyped("b37", "Congenial", "Type the word that means pleasant, suitable, or compatible.", ["congenial"]),
    makeTyped("b38", "Insipid", "Type the word that means bland, dull, or lacking interest.", ["insipid"]),
    makeTyped("b39", "Homogeneous", "Type the word that means uniform or of the same kind throughout.", ["homogeneous"]),
    makeTyped("b40", "Wary", "Type the word that means cautious, watchful, or careful because of possible danger.", ["wary"])
  ],

  medium: [
    makeMcq("m1", "Misnomer", "Which word best describes the name “silent alarm” when the device actually makes a loud sound?", ["Misnomer", "Proclivity", "Flout", "Abound"], 0),
    makeMcq("m2", "Austere", "Choose the vocabulary word closest to severe, stern, and unadorned.", ["Congenial", "Austere", "Insipid", "Spendthrift"], 1),
    makeMcq("m3", "Capricious", "Choose the best opposite of erratic and unpredictable.", ["Fickle", "Mercurial", "Stable", "Whimsical"], 2),
    makeMcq("m4", "Obsequious", "Choose the vocabulary word closest to servile and excessively flattering.", ["Obsequious", "Taciturn", "Misanthropic", "Puerile"], 0),
    makeMcq("m5", "Proclivity", "Which word best means a natural inclination toward a behavior?", ["Misnomer", "Proclivity", "Feasibility", "Conspicuousness"], 1),
    makeMcq("m6", "Taciturn", "Choose the word closest to reserved, reticent, or habitually quiet.", ["Loquacious", "Taciturn", "Didactic", "Humdrum"], 1),
    makeMcq("m7", "Insipid", "Choose the best opposite of bland and uninteresting.", ["Tedious", "Vivid", "Dull", "Flat"], 1),
    makeMcq("m8", "Flout", "Which sentence uses the correct word?", ["The influencer flouted her expensive watch online.", "The official flaunted the law by ignoring it.", "The company flouted safety rules despite repeated warnings.", "The singer flouted her new album cover proudly."], 2),

    makeSingle("m9", "Belie", "The chart’s simple appearance _____ the complex statistical assumptions behind it.", ["belied", "placated", "abounded", "deified"], 0),
    makeSingle("m10", "Loquacious", "The host’s _____ style kept the interview lively but left little time for the guest.", ["taciturn", "loquacious", "austere", "wary"], 1),
    makeSingle("m11", "Quixotic", "The proposal was inspiring but _____, relying on unlimited funding and perfect cooperation.", ["quixotic", "homogeneous", "conspicuous", "negligent"], 0),
    makeSingle("m12", "Abound", "In the archive, examples of early mechanical innovation _____.", ["abound", "flout", "placate", "belie"], 0),
    makeSingle("m13", "Cursory", "A _____ inspection may miss hairline cracks in a load-bearing component.", ["cursory", "cerebral", "congenial", "feasible"], 0),
    makeSingle("m14", "Negligent", "The lab assistant was deemed _____ after leaving the samples unlabeled overnight.", ["negligent", "obsequious", "taciturn", "didactic"], 0),
    makeSingle("m15", "Spendthrift", "Even after repeated losses, the _____ heir continued to waste money on luxuries.", ["spendthrift", "wary", "homogeneous", "misanthropic"], 0),

    makeMulti("m16", "double", "Congenial", "Although the committee’s public statement sounded _____, the leaked notes _____ serious tension among its members.", [
      { title: "Blank 1", options: ["congenial", "misanthropic", "puerile", "cursory"], correct: 0 },
      { title: "Blank 2", options: ["belied", "placated", "abounded", "deified"], correct: 0 }
    ]),
    makeMulti("m17", "double", "Feasible", "The design appeared _____ at first, but the implementation plan remained so _____ that the engineers could not estimate cost.", [
      { title: "Blank 1", options: ["feasible", "insipid", "obsequious", "taciturn"], correct: 0 },
      { title: "Blank 2", options: ["amorphous", "homogeneous", "conspicuous", "austere"], correct: 0 }
    ]),
    makeMulti("m18", "double", "Capricious", "The manager’s _____ instructions made the already _____ assignment feel even more discouraging.", [
      { title: "Blank 1", options: ["capricious", "cerebral", "congenial", "homogeneous"], correct: 0 },
      { title: "Blank 2", options: ["daunting", "feasible", "insipid", "taciturn"], correct: 0 }
    ]),

    makeMulti("m19", "triple", "Didactic", "The critic found the lecture overly _____: its examples were _____, and its final moral seemed almost _____.", [
      { title: "Blank 1", options: ["didactic", "wary", "homogeneous"], correct: 0 },
      { title: "Blank 2", options: ["insipid", "conspicuous", "feasible"], correct: 0 },
      { title: "Blank 3", options: ["puerile", "cerebral", "congenial"], correct: 0 }
    ]),

    makeSE("m20", "Austere", "The director’s office was _____, containing only a desk, a chair, and a single lamp.", ["austere", "ornate", "severe", "lavish", "capricious", "loquacious"], [0,2]),
    makeSE("m21", "Placate", "The minister tried to _____ angry residents by promising an independent investigation.", ["appease", "provoke", "mollify", "flout", "deify", "neglect"], [0,2]),
    makeSE("m22", "Disseminate", "The organization used local volunteers to _____ accurate health information in remote districts.", ["suppress", "circulate", "conceal", "propagate", "belie", "misname"], [1,3]),

    makeTyped("m23", "Misnomer", "Type the word that means a wrong or inappropriate name.", ["misnomer"]),
    makeTyped("m24", "Homogeneous", "Type the word that means uniform or composed of similar parts.", ["homogeneous"]),
    makeMcq("m25", "Flout", "Choose the sentence that correctly uses the word for showing off.", ["He flouted his new certificate on social media.", "She flaunted her designer bag at the party.", "They flaunted the safety law by ignoring it.", "The factory flaunted the pollution limit."], 1, "MCQ"),
    makeTyped("m26", "Misanthropic", "Type the word that means distrustful of or hostile toward humankind.", ["misanthropic"]),
    makeMcq("m27", "Obsequious", "A person who flatters a powerful official excessively in order to gain favor is best described as _____.", ["congenial", "obsequious", "taciturn", "wary"], 1)
  ],

  hard: [
    makeSingle("h1", "Belie", "The report’s calm executive summary _____ the severity of the failures documented in the appendices.", ["belied", "placated", "abounded", "flouted"], 0),
    makeSingle("h2", "Capricious", "Because enforcement was _____, firms could not predict whether the same practice would be punished or ignored.", ["homogeneous", "capricious", "congenial", "austere"], 1),
    makeSingle("h3", "Austere", "The historian’s prose was _____, avoiding ornament and sentiment even while describing dramatic events.", ["austere", "loquacious", "puerile", "insipid"], 0),
    makeSingle("h4", "Didactic", "The novel’s final chapters became less exploratory than _____, telling readers exactly what moral to draw.", ["didactic", "wary", "homogeneous", "obsequious"], 0),
    makeSingle("h5", "Feasible", "The proposal was elegant in theory, but without funding or infrastructure it was not _____.", ["feasible", "conspicuous", "taciturn", "misanthropic"], 0),

    makeMulti("h6", "double", "Cursory", "Although the presentation sounded carefully researched, its literature review was merely _____, and its conclusions were therefore _____.", [
      { title: "Blank 1", options: ["cursory", "cerebral", "congenial", "homogeneous"], correct: 0 },
      { title: "Blank 2", options: ["dubious", "feasible", "austere", "placating"], correct: 0 }
    ]),
    makeMulti("h7", "double", "Amorphous", "Because the committee’s mandate was _____, no one could determine whether its recommendations were actually _____.", [
      { title: "Blank 1", options: ["amorphous", "conspicuous", "obsequious", "insipid"], correct: 0 },
      { title: "Blank 2", options: ["feasible", "humdrum", "loquacious", "misanthropic"], correct: 0 }
    ]),
    makeMulti("h8", "double", "Homogeneous", "The sample initially appeared _____, yet a _____ subgroup emerged after closer statistical analysis.", [
      { title: "Blank 1", options: ["homogeneous", "capricious", "spendthrift", "puerile"], correct: 0 },
      { title: "Blank 2", options: ["conspicuous", "austere", "taciturn", "quixotic"], correct: 0 }
    ]),
    makeMulti("h9", "double", "Placate", "The leader tried to _____ critics with concessions, but his _____ reversals only deepened their distrust.", [
      { title: "Blank 1", options: ["placate", "flout", "deify", "belie"], correct: 0 },
      { title: "Blank 2", options: ["capricious", "cerebral", "congenial", "homogeneous"], correct: 0 }
    ]),

    makeMulti("h10", "triple", "Deify", "By _____ the founder, the film _____ the contributions of the wider team and _____ a misleading myth of solitary genius.", [
      { title: "Blank 1", options: ["deifying", "vilifying", "placating"], correct: 0 },
      { title: "Blank 2", options: ["belied", "confirmed", "abounded"], correct: 0 },
      { title: "Blank 3", options: ["disseminated", "suppressed", "flouted"], correct: 0 }
    ]),
    makeMulti("h11", "triple", "Quixotic", "What began as a _____ aspiration became less _____ after the team replaced its _____ assumptions with measurable constraints.", [
      { title: "Blank 1", options: ["quixotic", "homogeneous", "taciturn"], correct: 0 },
      { title: "Blank 2", options: ["daunting", "congenial", "loquacious"], correct: 0 },
      { title: "Blank 3", options: ["amorphous", "conspicuous", "austere"], correct: 0 }
    ]),

    makeSE("h12", "Belie", "The appendix did not support the report’s claims; rather, it _____ them by presenting contrary data.", ["belied", "confirmed", "contradicted", "placated", "deified", "abounded"], [0,2]),
    makeSE("h13", "Austere", "The judge’s manner was _____, leaving little room for warmth or informality.", ["stern", "congenial", "severe", "insipid", "loquacious", "quixotic"], [0,2]),
    makeSE("h14", "Placate", "To prevent panic, officials tried to _____ the crowd with clear information and visible safety measures.", ["appease", "provoke", "mollify", "flout", "neglect", "misname"], [0,2]),
    makeSE("h15", "Cerebral", "The essay is deliberately _____, more interested in abstract principles than emotional anecdotes.", ["cerebral", "puerile", "intellectual", "spendthrift", "humdrum", "obsequious"], [0,2]),

    makeMcq("h16", "Flout", "Which option best completes the sentence? The official did not merely ignore protocol quietly; he openly _____ it before the cameras.", ["flaunted", "flouted", "placated", "deified"], 1),
    makeMcq("h17", "Quixotic", "In the sentence “The plan was admirable but quixotic,” the word most nearly means:", ["practical and immediately workable", "idealistic but unrealistic", "ordinary and monotonous", "excessively obedient"], 1),
    makeMcq("h18", "Misanthropic", "An essay that portrays human beings as selfish, cruel, and unworthy of trust has a tone best described as:", ["congenial", "misanthropic", "didactic", "homogeneous"], 1)
  ]
};

let selectedExamKey = null;
let currentPart = 0;
let timerId = null;
let remainingSeconds = 0;
let studentName = "Student";
let userAnswers = {};
let submitted = false;

const menuScreen = document.getElementById("menuScreen");
const instructionScreen = document.getElementById("instructionScreen");
const examScreen = document.getElementById("examScreen");
const resultScreen = document.getElementById("resultScreen");
const exitScreen = document.getElementById("exitScreen");
const examCards = document.getElementById("examCards");
const studentInput = document.getElementById("studentName");
const instructionTitle = document.getElementById("instructionTitle");
const instructionMeta = document.getElementById("instructionMeta");
const instructionText = document.getElementById("instructionText");
const questionsContainer = document.getElementById("questionsContainer");
const statusBar = document.getElementById("statusBar");
const prevPartBtn = document.getElementById("prevPartBtn");
const nextPartBtn = document.getElementById("nextPartBtn");
const submitExamBtn = document.getElementById("submitExamBtn");

function showScreen(screen) {
  [menuScreen, instructionScreen, examScreen, resultScreen, exitScreen].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#039;","\"":"&quot;"}[ch]));
}

function normalize(value) {
  return String(value ?? "").trim().toLowerCase().replace(/\s+/g, " ");
}

function optionLetter(index) {
  return String.fromCharCode(65 + index);
}

function formatTime(totalSeconds) {
  const min = Math.floor(totalSeconds / 60);
  const sec = totalSeconds % 60;
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function getQuestions() {
  return exams[selectedExamKey] || [];
}

function getExam() {
  return examInfo[selectedExamKey];
}

function getParts() {
  const q = getQuestions();
  const size = getExam().partSize;
  const parts = [];
  for (let i = 0; i < q.length; i += size) parts.push(q.slice(i, i + size));
  return parts;
}

function renderExamCards() {
  examCards.innerHTML = Object.entries(examInfo).map(([key, exam]) => `
    <article class="exam-card card">
      <span class="badge">Level ${exam.order}</span>
      <h2>${exam.title}</h2>
      <p><strong>${exam.marks} marks | ${exam.timeMinutes} minutes</strong></p>
      <p>${exam.bestFor}</p>
      <ul>
        <li>${exam.difficulty}</li>
        <li>${exam.purpose}</li>
        <li>${key === "hard" ? "Includes 4 double blanks, 2 triple blanks, and sentence equivalence." : key === "medium" ? "Includes mixed question types and blank-wise scoring." : "Direct recall with simple usage and typed answers."}</li>
      </ul>
      <button class="primary-btn" type="button" onclick="selectExam('${key}')">Start ${exam.order === 1 ? "Basic" : exam.order === 2 ? "Medium" : "Hard"} Exam</button>
    </article>
  `).join("");
}

function selectExam(key) {
  selectedExamKey = key;
  studentName = studentInput.value.trim() || "Student";
  const exam = getExam();
  const questions = getQuestions();
  const parts = Math.ceil(questions.length / exam.partSize);
  instructionTitle.textContent = exam.title;
  instructionMeta.innerHTML = `
    <span class="meta-pill">Difficulty: ${exam.difficulty}</span>
    <span class="meta-pill">Marks: ${exam.marks}</span>
    <span class="meta-pill">Time: ${exam.timeMinutes} minutes</span>
    <span class="meta-pill">Questions: ${questions.length}</span>
    <span class="meta-pill">Parts: ${parts}</span>
  `;
  instructionText.textContent = exam.bestFor;
  showScreen(instructionScreen);
}

function startExam() {
  currentPart = 0;
  userAnswers = {};
  submitted = false;
  remainingSeconds = getExam().timeMinutes * 60;
  clearInterval(timerId);
  timerId = setInterval(() => {
    remainingSeconds -= 1;
    if (remainingSeconds <= 0) {
      remainingSeconds = 0;
      submitExam(true);
    } else {
      renderStatusBar();
    }
  }, 1000);
  renderExamPart();
  showScreen(examScreen);
}

function renderStatusBar() {
  const questions = getQuestions();
  const exam = getExam();
  const parts = getParts();
  const start = currentPart * exam.partSize + 1;
  const end = Math.min(start + parts[currentPart].length - 1, questions.length);
  const answered = questions.filter(isQuestionAnswered).length;
  const timerClass = remainingSeconds <= 300 ? "timer-warning" : "timer-item";
  statusBar.innerHTML = `
    <span class="status-item">${escapeHtml(studentName)}</span>
    <span class="status-item">${exam.title}</span>
    <span class="status-item ${timerClass}">${formatTime(remainingSeconds)} left</span>
    <span class="status-item">Part ${currentPart + 1} of ${parts.length}</span>
    <span class="status-item">Questions ${start}–${end} of ${questions.length}</span>
    <span class="status-item">Answered ${answered}/${questions.length}</span>
    <span class="status-item">${exam.marks} marks</span>
  `;
}

function isQuestionAnswered(q) {
  const ans = userAnswers[q.id];
  if (q.type === "mcq" || q.type === "single") return Number.isInteger(ans);
  if (q.type === "typed") return typeof ans === "string" && ans.trim().length > 0;
  if (q.type === "se") return Array.isArray(ans) && ans.length > 0;
  if (q.type === "double" || q.type === "triple") return ans && q.blanks.every((_, i) => Number.isInteger(ans[i]));
  return false;
}

function renderExamPart() {
  renderStatusBar();
  const parts = getParts();
  const questions = parts[currentPart];
  const baseIndex = currentPart * getExam().partSize;
  questionsContainer.innerHTML = questions.map((q, i) => renderQuestion(q, baseIndex + i + 1)).join("");
  prevPartBtn.style.display = currentPart === 0 ? "none" : "inline-flex";
  nextPartBtn.style.display = currentPart === parts.length - 1 ? "none" : "inline-flex";
  submitExamBtn.style.display = currentPart === parts.length - 1 ? "inline-flex" : "none";
}

function renderQuestion(q, num) {
  return `
    <article class="question-card">
      <div class="question-top">
        <span class="q-label">${q.label}</span>
        <span class="q-marks">Question ${num} • ${q.marks} ${q.marks === 1 ? "mark" : "marks"}</span>
      </div>
      <div class="question-text">${escapeHtml(q.prompt)}</div>
      ${renderAnswerArea(q)}
    </article>
  `;
}

function renderAnswerArea(q) {
  if (q.type === "mcq" || q.type === "single") {
    return `<div class="options">${q.options.map((opt, i) => {
      const active = userAnswers[q.id] === i ? "active" : "";
      return `<button class="option-box ${active}" type="button" onclick="selectOption('${q.id}', ${i})"><span class="option-letter">${optionLetter(i)}</span><span>${escapeHtml(opt)}</span></button>`;
    }).join("")}</div>`;
  }
  if (q.type === "typed") {
    const val = escapeHtml(userAnswers[q.id] || "");
    return `<input class="typed-input" type="text" value="${val}" placeholder="Type your answer" oninput="setTypedAnswer('${q.id}', this.value)" />`;
  }
  if (q.type === "double" || q.type === "triple") {
    const gridClass = q.type === "triple" ? "blank-grid triple" : "blank-grid";
    const ans = userAnswers[q.id] || {};
    return `<div class="${gridClass}">${q.blanks.map((blank, bIndex) => `
      <div class="blank-column">
        <div class="blank-title">${blank.title}</div>
        <div class="options">
          ${blank.options.map((opt, oIndex) => {
            const active = ans[bIndex] === oIndex ? "active" : "";
            return `<button class="option-box ${active}" type="button" onclick="selectBlankOption('${q.id}', ${bIndex}, ${oIndex})"><span class="option-letter">${optionLetter(oIndex)}</span><span>${escapeHtml(opt)}</span></button>`;
          }).join("")}
        </div>
      </div>
    `).join("")}</div>`;
  }
  if (q.type === "se") {
    const selected = userAnswers[q.id] || [];
    return `<div class="se-options">${q.options.map((opt, i) => {
      const active = selected.includes(i) ? "active" : "";
      return `<button class="option-box ${active}" type="button" onclick="toggleSEOption('${q.id}', ${i})"><span class="option-letter">${optionLetter(i)}</span><span>${escapeHtml(opt)}</span></button>`;
    }).join("")}</div><p class="muted">Select exactly two choices.</p>`;
  }
  return "";
}

function findQuestion(id) {
  return Object.values(exams).flat().find(q => q.id === id);
}

function selectOption(id, index) {
  userAnswers[id] = index;
  renderExamPart();
}
function setTypedAnswer(id, value) {
  userAnswers[id] = value;
  renderStatusBar();
}
function selectBlankOption(id, blankIndex, optionIndex) {
  if (!userAnswers[id] || typeof userAnswers[id] !== "object" || Array.isArray(userAnswers[id])) userAnswers[id] = {};
  userAnswers[id][blankIndex] = optionIndex;
  renderExamPart();
}
function toggleSEOption(id, index) {
  const current = Array.isArray(userAnswers[id]) ? [...userAnswers[id]] : [];
  const exists = current.includes(index);
  if (exists) {
    userAnswers[id] = current.filter(x => x !== index);
  } else if (current.length < 2) {
    current.push(index);
    userAnswers[id] = current;
  } else {
    current.shift();
    current.push(index);
    userAnswers[id] = current;
  }
  renderExamPart();
}

function goNextPart() {
  const parts = getParts();
  if (currentPart < parts.length - 1) {
    currentPart += 1;
    renderExamPart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
function goPrevPart() {
  if (currentPart > 0) {
    currentPart -= 1;
    renderExamPart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function scoreQuestion(q) {
  const ans = userAnswers[q.id];
  if (q.type === "mcq" || q.type === "single") {
    const correct = ans === q.correct;
    return { score: correct ? 1 : 0, correct, wrongParts: correct ? [] : ["Answer"] };
  }
  if (q.type === "typed") {
    const correct = q.answers.map(normalize).includes(normalize(ans));
    return { score: correct ? 1 : 0, correct, wrongParts: correct ? [] : ["Typed answer"] };
  }
  if (q.type === "double" || q.type === "triple") {
    let score = 0;
    const wrongParts = [];
    q.blanks.forEach((blank, i) => {
      if (ans && ans[i] === blank.correct) score += 1;
      else wrongParts.push(blank.title);
    });
    return { score, correct: score === q.blanks.length, wrongParts };
  }
  if (q.type === "se") {
    const selected = Array.isArray(ans) ? ans : [];
    const correctSet = new Set(q.correct);
    let score = 0;
    selected.forEach(i => { if (correctSet.has(i)) score += 1; });
    const exact = selected.length === q.correct.length && q.correct.every(i => selected.includes(i));
    return { score, correct: exact, wrongParts: exact ? [] : ["Sentence equivalence pair"] };
  }
  return { score: 0, correct: false, wrongParts: ["Answer"] };
}

function submitExam(auto = false) {
  if (submitted) return;
  if (!auto) {
    const ok = window.confirm("Submit this exam now? You cannot change answers after submission.");
    if (!ok) return;
  }
  submitted = true;
  clearInterval(timerId);
  renderResults();
  showScreen(resultScreen);
}

function getPerformance(percent) {
  if (percent >= 85) return "Excellent";
  if (percent >= 70) return "Good";
  if (percent >= 50) return "Needs Revision";
  return "Weak — Review Again";
}

function renderResults() {
  const questions = getQuestions();
  const exam = getExam();
  const results = questions.map(q => ({ q, ...scoreQuestion(q) }));
  const totalScore = results.reduce((sum, r) => sum + r.score, 0);
  const percent = Math.round((totalScore / exam.marks) * 100);
  const performance = getPerformance(percent);

  document.getElementById("resultSummary").innerHTML = `
    <div class="eyebrow">Result Summary</div>
    <h2>${exam.title}</h2>
    <p class="muted">${escapeHtml(studentName)} | Day 1 | Words 1–30</p>
    <div class="score-big">${totalScore}/${exam.marks}</div>
    <div class="summary-grid">
      <div class="summary-item"><span>Percentage</span><strong>${percent}%</strong></div>
      <div class="summary-item"><span>Performance</span><strong>${performance}</strong></div>
      <div class="summary-item"><span>Questions</span><strong>${questions.length}</strong></div>
      <div class="summary-item"><span>Time Limit</span><strong>${exam.timeMinutes} min</strong></div>
    </div>
  `;

  const wordStats = {};
  wordList.forEach(w => wordStats[w] = { score: 0, marks: 0 });
  results.forEach(r => {
    if (!wordStats[r.q.word]) wordStats[r.q.word] = { score: 0, marks: 0 };
    wordStats[r.q.word].score += r.score;
    wordStats[r.q.word].marks += r.q.marks;
  });

  const strong = [];
  const weak = [];
  Object.entries(wordStats).forEach(([word, stat]) => {
    if (stat.marks === 0) return;
    if (stat.score === stat.marks) strong.push(word);
    else weak.push(word);
  });
  document.getElementById("strongWords").innerHTML = strong.length ? strong.map(w => `<span class="pill strong">${escapeHtml(w)}</span>`).join("") : `<span class="muted">No fully strong words in this attempt.</span>`;
  document.getElementById("weakWords").innerHTML = weak.length ? weak.map(w => `<span class="pill weak">${escapeHtml(w)}</span>`).join("") : `<span class="muted">No weak words detected.</span>`;

  document.getElementById("reviewList").innerHTML = results.map((r, index) => renderReviewCard(r, index + 1)).join("");
  document.getElementById("nextLevelBtn").textContent = selectedExamKey === "hard" ? "Complete Day 1" : "Proceed to Next Level Exam";
}

function renderReviewCard(r, num) {
  const statusClass = r.correct ? "correct-text" : "wrong-text";
  const statusText = r.correct ? "Correct" : "Not Correct";
  return `
    <article class="review-card" onclick="this.classList.toggle('open')">
      <div class="review-head">
        <div>
          <strong>Question ${num}</strong> • ${r.q.label} • Related word: <strong>${escapeHtml(r.q.word)}</strong>
          <div class="muted">Marks: ${r.score}/${r.q.marks}</div>
        </div>
        <div class="review-status ${statusClass}">${statusText}</div>
      </div>
      <div class="review-body" onclick="event.stopPropagation()">
        <div class="review-detail"><strong>Full question:</strong><br>${escapeHtml(r.q.prompt)}</div>
        ${renderReviewAnswer(r.q)}
        <div class="review-detail"><strong>Mistake detail:</strong> ${r.correct ? "No mistake." : escapeHtml(r.wrongParts.join(", "))}</div>
        <div class="review-detail"><strong>Marks received:</strong> ${r.score}/${r.q.marks}</div>
      </div>
    </article>
  `;
}

function renderReviewAnswer(q) {
  const ans = userAnswers[q.id];
  if (q.type === "mcq" || q.type === "single") {
    return `
      <div class="review-detail"><strong>All options:</strong><div class="review-options">
        ${q.options.map((opt, i) => {
          const cls = `${ans === i ? "student" : ""} ${q.correct === i ? "correct" : ""}`.trim();
          return `<div class="review-option ${cls}">${optionLetter(i)}. ${escapeHtml(opt)}</div>`;
        }).join("")}
      </div></div>
      <div class="review-detail"><strong>Your answer:</strong> ${Number.isInteger(ans) ? `${optionLetter(ans)}. ${escapeHtml(q.options[ans])}` : "Not answered"}</div>
      <div class="review-detail"><strong>Correct answer:</strong> ${optionLetter(q.correct)}. ${escapeHtml(q.options[q.correct])}</div>
    `;
  }
  if (q.type === "typed") {
    return `
      <div class="review-detail"><strong>Your typed answer:</strong> ${ans && String(ans).trim() ? escapeHtml(ans) : "Not answered"}</div>
      <div class="review-detail"><strong>Correct answer:</strong> ${escapeHtml(q.answers[0])}</div>
    `;
  }
  if (q.type === "double" || q.type === "triple") {
    const a = ans || {};
    return `
      ${q.blanks.map((blank, bIndex) => `
        <div class="review-detail"><strong>${blank.title} options:</strong><div class="review-options">
          ${blank.options.map((opt, oIndex) => {
            const cls = `${a[bIndex] === oIndex ? "student" : ""} ${blank.correct === oIndex ? "correct" : ""}`.trim();
            return `<div class="review-option ${cls}">${optionLetter(oIndex)}. ${escapeHtml(opt)}</div>`;
          }).join("")}
        </div>
        <strong>${blank.title} your answer:</strong> ${Number.isInteger(a[bIndex]) ? `${optionLetter(a[bIndex])}. ${escapeHtml(blank.options[a[bIndex]])}` : "Not answered"}<br>
        <strong>${blank.title} correct answer:</strong> ${optionLetter(blank.correct)}. ${escapeHtml(blank.options[blank.correct])}
        </div>
      `).join("")}
    `;
  }
  if (q.type === "se") {
    const selected = Array.isArray(ans) ? ans : [];
    return `
      <div class="review-detail"><strong>All options:</strong><div class="review-options">
        ${q.options.map((opt, i) => {
          const cls = `${selected.includes(i) ? "student" : ""} ${q.correct.includes(i) ? "correct" : ""}`.trim();
          return `<div class="review-option ${cls}">${optionLetter(i)}. ${escapeHtml(opt)}</div>`;
        }).join("")}
      </div></div>
      <div class="review-detail"><strong>Your selected answers:</strong> ${selected.length ? selected.map(i => `${optionLetter(i)}. ${q.options[i]}`).join("; ") : "Not answered"}</div>
      <div class="review-detail"><strong>Correct answers:</strong> ${q.correct.map(i => `${optionLetter(i)}. ${q.options[i]}`).join("; ")}</div>
    `;
  }
  return "";
}

function resetToMenu() {
  clearInterval(timerId);
  selectedExamKey = null;
  currentPart = 0;
  userAnswers = {};
  submitted = false;
  showScreen(menuScreen);
}

function proceedNextLevel() {
  if (selectedExamKey === "basic") selectExam("medium");
  else if (selectedExamKey === "medium") selectExam("hard");
  else {
    document.getElementById("completionTitle").textContent = "You have completed all exam levels for today’s 30 words.";
    document.getElementById("completionText").textContent = "Day 1 practice is complete. You may now close this tab or return to the main menu.";
    showScreen(exitScreen);
  }
}

function exitPortal() {
  document.getElementById("completionTitle").textContent = "Exam session completed.";
  document.getElementById("completionText").textContent = "You may now close this tab.";
  showScreen(exitScreen);
}

window.selectExam = selectExam;
window.selectOption = selectOption;
window.setTypedAnswer = setTypedAnswer;
window.selectBlankOption = selectBlankOption;
window.toggleSEOption = toggleSEOption;

prevPartBtn.addEventListener("click", goPrevPart);
nextPartBtn.addEventListener("click", goNextPart);
submitExamBtn.addEventListener("click", () => submitExam(false));
document.getElementById("startExamBtn").addEventListener("click", startExam);
document.getElementById("backToMenuFromInstructions").addEventListener("click", resetToMenu);
document.getElementById("backToMenuBtn").addEventListener("click", resetToMenu);
document.getElementById("nextLevelBtn").addEventListener("click", proceedNextLevel);
document.getElementById("exitBtn").addEventListener("click", exitPortal);
document.getElementById("completionMenuBtn").addEventListener("click", resetToMenu);

renderExamCards();
