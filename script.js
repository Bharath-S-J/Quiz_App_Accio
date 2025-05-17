const quizBank = {
  javascript: [
    {
      id: 1,
      question: "What does 'var' stand for in JavaScript?",
      options: ["Variable", "Variant", "Value", "Vector"],
      answer: "Variable",
    },
    {
      id: 2,
      question: "Which keyword declares a constant?",
      options: ["var", "let", "const", "define"],
      answer: "const",
    },
    {
      id: 3,
      question: "Which of the following is a primitive type?",
      options: ["Object", "Array", "String", "Function"],
      answer: "String",
    },
    {
      id: 4,
      question: "What is the output of typeof null?",
      options: ["object", "null", "undefined", "function"],
      answer: "object",
    },
    {
      id: 5,
      question: "Which symbol is used for comments?",
      options: ["//", "#", "<!--", "**"],
      answer: "//",
    },
    {
      id: 6,
      question: "JavaScript runs in?",
      options: ["Compiler", "Server", "Browser", "Database"],
      answer: "Browser",
    },
    {
      id: 7,
      question: "Which method converts JSON to object?",
      options: ["JSON.toObject", "JSON.decode", "JSON.parse", "JSON.stringify"],
      answer: "JSON.parse",
    },
    {
      id: 8,
      question: "Which loop checks condition after execution?",
      options: ["for", "while", "do...while", "foreach"],
      answer: "do...while",
    },
    {
      id: 9,
      question: "Which operator is strict equality?",
      options: ["==", "===", "!=", "!=="],
      answer: "===",
    },
    {
      id: 10,
      question: "What is a closure?",
      options: [
        "Object inside function",
        "Function with preserved scope",
        "Block scope",
        "Private class",
      ],
      answer: "Function with preserved scope",
    },
    {
      id: 11,
      question: "Which event runs on page load?",
      options: ["onload", "onclick", "onsubmit", "onchange"],
      answer: "onload",
    },
    {
      id: 12,
      question: "What is DOM?",
      options: [
        "Data Object Model",
        "Document Object Model",
        "Data Oriented Model",
        "Document Orientation Method",
      ],
      answer: "Document Object Model",
    },
    {
      id: 13,
      question: "setTimeout is?",
      options: ["Synchronous", "Asynchronous", "Blocking", "Constant"],
      answer: "Asynchronous",
    },
    {
      id: 14,
      question: "Which is a valid array declaration?",
      options: ["let a = {}", "let a = []", "let a = ()", "let a = ''"],
      answer: "let a = []",
    },
    {
      id: 15,
      question: "How do you define a function?",
      options: [
        "function = myFunc()",
        "define myFunc()",
        "function myFunc()",
        "new Function()",
      ],
      answer: "function myFunc()",
    },
  ],
  css: [
    {
      id: 1,
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheet",
        "Colorful Style Sheet",
        "Creative Style Sheet",
        "Compact Style Sheet",
      ],
      answer: "Cascading Style Sheet",
    },
    {
      id: 2,
      question: "Which property changes text color?",
      options: ["background-color", "font-color", "color", "text-color"],
      answer: "color",
    },
    {
      id: 3,
      question: "How to include external CSS?",
      options: ["<link>", "<style>", "<script>", "<css>"],
      answer: "<link>",
    },
    {
      id: 4,
      question: "Which unit is relative?",
      options: ["px", "em", "cm", "pt"],
      answer: "em",
    },
    {
      id: 5,
      question: "Which property makes text bold?",
      options: ["font-weight", "text-style", "font-style", "weight"],
      answer: "font-weight",
    },
    {
      id: 6,
      question: "Default position of an element?",
      options: ["relative", "absolute", "static", "fixed"],
      answer: "static",
    },
    {
      id: 7,
      question: "How to make a flex container?",
      options: [
        "display: block",
        "display: grid",
        "display: flex",
        "flex: true",
      ],
      answer: "display: flex",
    },
    {
      id: 8,
      question: "Which value centers content horizontally in flexbox?",
      options: ["align-items", "justify-content", "center", "margin"],
      answer: "justify-content",
    },
    {
      id: 9,
      question: "Which pseudo-class selects hovered item?",
      options: [":hover", ":active", ":visited", ":checked"],
      answer: ":hover",
    },
    {
      id: 10,
      question: "How to comment in CSS?",
      options: ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
      answer: "/* comment */",
    },
    {
      id: 11,
      question: "Which is a valid color value?",
      options: ["blue()", "#blue", "rgb(0,0,255)", "col(blue)"],
      answer: "rgb(0,0,255)",
    },
    {
      id: 12,
      question: "Which selector selects all elements?",
      options: ["*", "all", "#", "."],
      answer: "*",
    },
    {
      id: 13,
      question: "Which property controls spacing between lines?",
      options: ["line-height", "letter-spacing", "spacing", "margin-top"],
      answer: "line-height",
    },
    {
      id: 14,
      question: "To apply style to one class?",
      options: [".class", "#class", "class()", "@class"],
      answer: ".class",
    },
    {
      id: 15,
      question: "Z-index is used for?",
      options: ["stacking order", "color", "grid", "font"],
      answer: "stacking order",
    },
  ],
  html: [
    {
      id: 1,
      question: "HTML stands for?",
      options: [
        "Hyper Tool Markup Language",
        "Hyper Text Markup Language",
        "Hyper Text Machine Language",
        "Hyper Transfer Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      id: 2,
      question: "Which tag creates a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<nav>"],
      answer: "<a>",
    },
    {
      id: 3,
      question: "Which tag is used to define an image?",
      options: ["<img>", "<image>", "<src>", "<pic>"],
      answer: "<img>",
    },
    {
      id: 4,
      question: "Which tag starts a table row?",
      options: ["<td>", "<th>", "<tr>", "<row>"],
      answer: "<tr>",
    },
    {
      id: 5,
      question: "To create an unordered list?",
      options: ["<ol>", "<ul>", "<li>", "<list>"],
      answer: "<ul>",
    },
    {
      id: 6,
      question: "How to insert a line break?",
      options: ["<br>", "<hr>", "<lb>", "<newline>"],
      answer: "<br>",
    },
    {
      id: 7,
      question: "What is the root element of HTML?",
      options: ["<html>", "<head>", "<root>", "<body>"],
      answer: "<html>",
    },
    {
      id: 8,
      question: "Meta info is placed inside?",
      options: ["<body>", "<meta>", "<head>", "<footer>"],
      answer: "<head>",
    },
    {
      id: 9,
      question: "Which attribute specifies image path?",
      options: ["href", "src", "alt", "url"],
      answer: "src",
    },
    {
      id: 10,
      question: "HTML5 introduced which tag?",
      options: ["<section>", "<font>", "<big>", "<center>"],
      answer: "<section>",
    },
    {
      id: 11,
      question: "Which tag is self-closing?",
      options: ["<div>", "<img>", "<p>", "<span>"],
      answer: "<img>",
    },
    {
      id: 12,
      question: "Which tag defines a form?",
      options: ["<form>", "<input>", "<submit>", "<button>"],
      answer: "<form>",
    },
    {
      id: 13,
      question: "Placeholder is used for?",
      options: ["tooltips", "sample text", "input labels", "warnings"],
      answer: "sample text",
    },
    {
      id: 14,
      question: "Which tag defines a header?",
      options: ["<h>", "<header>", "<hd>", "<head>"],
      answer: "<header>",
    },
    {
      id: 15,
      question: "Semantic tag for navigation?",
      options: ["<nav>", "<div>", "<main>", "<footer>"],
      answer: "<nav>",
    },
  ],
  nodejs: [
    {
      id: 1,
      question: "Node.js is built on which engine?",
      options: ["SpiderMonkey", "V8", "Chakra", "Nashorn"],
      answer: "V8",
    },
    {
      id: 2,
      question: "Which module handles file system?",
      options: ["http", "fs", "os", "url"],
      answer: "fs",
    },
    {
      id: 3,
      question: "Which is a Node package manager?",
      options: ["npm", "npx", "pip", "gem"],
      answer: "npm",
    },
    {
      id: 4,
      question: "Node.js is?",
      options: ["scripting language", "runtime", "framework", "browser"],
      answer: "runtime",
    },
    {
      id: 5,
      question: "Which is not built-in module?",
      options: ["fs", "http", "express", "path"],
      answer: "express",
    },
    {
      id: 6,
      question: "To create a server, which module is used?",
      options: ["net", "http", "url", "dns"],
      answer: "http",
    },
    {
      id: 7,
      question: "What is callback?",
      options: [
        "return value",
        "async function",
        "nested call",
        "function passed as argument",
      ],
      answer: "function passed as argument",
    },
    {
      id: 8,
      question: "Which file runs automatically?",
      options: ["index.html", "index.js", "app.js", "start.js"],
      answer: "index.js",
    },
    {
      id: 9,
      question: "Which is a web framework for Node.js?",
      options: ["React", "Vue", "Express", "Angular"],
      answer: "Express",
    },
    {
      id: 10,
      question: "Which handles HTTP methods?",
      options: ["GET, PUT", "POST", "DELETE", "All of these"],
      answer: "All of these",
    },
    {
      id: 11,
      question: "Which method reads a file async?",
      options: ["readFileSync", "readFile", "getFile", "openFile"],
      answer: "readFile",
    },
    {
      id: 12,
      question: "Which extension is default in Node.js?",
      options: [".node", ".json", ".js", ".html"],
      answer: ".js",
    },
    {
      id: 13,
      question: "How do you export a module?",
      options: [
        "exports = ",
        "module.export =",
        "module.exports =",
        "require()",
      ],
      answer: "module.exports =",
    },
    {
      id: 14,
      question: "How to include a module?",
      options: ["load()", "import()", "require()", "use()"],
      answer: "require()",
    },
    {
      id: 15,
      question: "What is the default port?",
      options: ["3000", "8000", "8080", "80"],
      answer: "3000",
    },
  ],
  react: [
    {
      id: 1,
      question: "What is React primarily used for?",
      options: [
        "Server-side scripting",
        "Styling web pages",
        "Building user interfaces",
        "Database management",
      ],
      answer: "Building user interfaces",
    },
    {
      id: 2,
      question: "Who developed React?",
      options: ["Google", "Microsoft", "Facebook", "Apple"],
      answer: "Facebook",
    },
    {
      id: 3,
      question: "What is a component in React?",
      options: [
        "A database table",
        "A styling element",
        "Reusable UI piece",
        "Browser plugin",
      ],
      answer: "Reusable UI piece",
    },
    {
      id: 4,
      question: "Which hook is used for state management?",
      options: ["useRef", "useEffect", "useState", "useMemo"],
      answer: "useState",
    },
    {
      id: 5,
      question: "JSX stands for?",
      options: [
        "Java Syntax Extension",
        "JavaScript XML",
        "JSON XML",
        "JavaScript Extension",
      ],
      answer: "JavaScript XML",
    },
    {
      id: 6,
      question: "Which is the correct way to write a component?",
      options: [
        "function HelloWorld() {}",
        "new HelloWorld()",
        "define HelloWorld {}",
        "component HelloWorld()",
      ],
      answer: "function HelloWorld() {}",
    },
    {
      id: 7,
      question: "What is a prop in React?",
      options: [
        "A special type of hook",
        "A DOM event",
        "An immutable value passed to components",
        "An internal state",
      ],
      answer: "An immutable value passed to components",
    },
    {
      id: 8,
      question: "React uses what to identify changes in DOM?",
      options: ["Real DOM", "Shadow DOM", "Virtual DOM", "Live DOM"],
      answer: "Virtual DOM",
    },
    {
      id: 9,
      question: "Which method is used to output a React component to the DOM?",
      options: [
        "ReactDOM.output()",
        "React.render()",
        "ReactDOM.render()",
        "Component.mount()",
      ],
      answer: "ReactDOM.render()",
    },
    {
      id: 10,
      question: "What does useEffect do?",
      options: [
        "Manages CSS",
        "Manages state",
        "Handles side effects",
        "Renders JSX",
      ],
      answer: "Handles side effects",
    },
    {
      id: 11,
      question: "Which of the following is a controlled component?",
      options: [
        "Input managed by React state",
        "Input without state",
        "Console.log()",
        "useMemo value",
      ],
      answer: "Input managed by React state",
    },
    {
      id: 12,
      question: "How do you pass data from parent to child?",
      options: ["Using state", "Using context", "Using props", "Using events"],
      answer: "Using props",
    },
    {
      id: 13,
      question: "Which hook is used to reference DOM nodes?",
      options: ["useState", "useDOM", "useEffect", "useRef"],
      answer: "useRef",
    },
    {
      id: 14,
      question: "Which of these is a valid React fragment?",
      options: ["<React.Fragment>", "<Fragment>", "<frag>", "<Group>"],
      answer: "<React.Fragment>",
    },
    {
      id: 15,
      question: "Which function is called after render in class component?",
      options: [
        "componentDidMount",
        "useEffect",
        "renderComplete",
        "afterRender",
      ],
      answer: "componentDidMount",
    },
  ],
  mongodb: [
    {
      id: 1,
      question: "What type of database is MongoDB?",
      options: ["Relational", "Hierarchical", "NoSQL", "Key-Value"],
      answer: "NoSQL",
    },
    {
      id: 2,
      question: "Which data format does MongoDB use?",
      options: ["XML", "CSV", "JSON", "YAML"],
      answer: "JSON",
    },
    {
      id: 3,
      question: "What is a MongoDB collection?",
      options: [
        "A group of rows",
        "A group of documents",
        "A table",
        "A query",
      ],
      answer: "A group of documents",
    },
    {
      id: 4,
      question: "Which operator is used for querying equality?",
      options: ["$eq", "$match", "$equals", "$is"],
      answer: "$eq",
    },
    {
      id: 5,
      question: "What is the default port for MongoDB?",
      options: ["3306", "27017", "5432", "8080"],
      answer: "27017",
    },
    {
      id: 6,
      question: "How do you insert one document?",
      options: [
        "db.collection.add()",
        "db.collection.insertOne()",
        "db.insert()",
        "db.collection.put()",
      ],
      answer: "db.collection.insertOne()",
    },
    {
      id: 7,
      question: "Which method returns all documents?",
      options: ["findAll()", "get()", "find()", "fetchAll()"],
      answer: "find()",
    },
    {
      id: 8,
      question: "Which field uniquely identifies a document?",
      options: ["_key", "_id", "id", "uid"],
      answer: "_id",
    },
    {
      id: 9,
      question: "What is the command to update documents?",
      options: ["modify()", "update()", "updateOne()", "change()"],
      answer: "updateOne()",
    },
    {
      id: 10,
      question: "How do you remove a document?",
      options: ["delete()", "remove()", "deleteOne()", "drop()"],
      answer: "deleteOne()",
    },
    {
      id: 11,
      question: "What is the shell command to connect to MongoDB?",
      options: ["mongo", "mongod", "connect-mongo", "mongoclient"],
      answer: "mongo",
    },
    {
      id: 12,
      question: "Which aggregation stage groups documents?",
      options: ["$sort", "$match", "$project", "$group"],
      answer: "$group",
    },
    {
      id: 13,
      question: "Which of the following is a valid index type?",
      options: ["hash", "single-field", "key-index", "primary-index"],
      answer: "single-field",
    },
    {
      id: 14,
      question: "Which operator matches documents where a field exists?",
      options: ["$exists", "$has", "$available", "$defined"],
      answer: "$exists",
    },
    {
      id: 15,
      question: "MongoDB is best suited for?",
      options: [
        "Complex joins",
        "High-speed logging",
        "Stored procedures",
        "Static schemas",
      ],
      answer: "High-speed logging",
    },
  ],
};

quizBank.everything = [
  ...quizBank.javascript,
  ...quizBank.css,
  ...quizBank.html,
  ...quizBank.nodejs,
  ...quizBank.react,
  ...quizBank.mongodb,
];

quizBank.random = quizBank.everything
  .sort(() => 0.5 - Math.random())
  .slice(0, 15);

// Topics to display
const topics = [
  "javascript",
  "css",
  "html",
  "nodejs",
  "react",
  "mongodb",
  "random",
  "everything",
];

// Elements
const app = document.getElementById("app");
const topicSelection = document.getElementById("topic-selection");

// Current quiz state
let currentTopic = null;
let questions = [];
let currentIndex = 0;
let score = 0;
let selectedOptionIndex = null;
let answeredQuestions = {}; // Track question IDs answered in this session to disable resubmission

// Restore progress from localStorage if any
function loadProgress() {
  const saved = localStorage.getItem("quizProgress");
  if (saved) {
    try {
      const progress = JSON.parse(saved);
      if (progress.topic && quizBank[progress.topic]) {
        currentTopic = progress.topic;
        questions = quizBank[currentTopic];
        currentIndex = progress.currentIndex || 0;
        score = progress.score || 0;
        answeredQuestions = progress.answeredQuestions || {};
        showQuiz();
        return true;
      }
    } catch {}
  }
  return false;
}

// Save progress to localStorage
function saveProgress() {
  localStorage.setItem(
    "quizProgress",
    JSON.stringify({
      topic: currentTopic,
      currentIndex,
      score,
      answeredQuestions,
    })
  );
}

// Clear progress
function clearProgress() {
  localStorage.removeItem("quizProgress");
}

// Create topic cards
function renderTopicSelection() {
  app.innerHTML = `
      <h1>Quiz App</h1>
      <p style="text-align:center; font-style:italic; color:#aaa;">
        Select a topic to start the test
      </p>
      <div id="topic-selection"></div>
    `;
  const container = document.getElementById("topic-selection");

  topics.forEach((topic) => {
    const card = document.createElement("div");
    card.classList.add("topic-card");
    card.textContent = topic.charAt(0).toUpperCase() + topic.slice(1);
    card.dataset.topic = topic;

    card.addEventListener("click", () => {
      // Highlight selected
      document
        .querySelectorAll(".topic-card")
        .forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");
      // Start quiz after short delay for UX
      setTimeout(() => startQuiz(topic), 300);
    });

    container.appendChild(card);
  });
}

// Start quiz with selected topic
function startQuiz(topic) {
  currentTopic = topic;
  questions = quizBank[topic];
  currentIndex = 0;
  score = 0;
  selectedOptionIndex = null;
  answeredQuestions = {};
  clearProgress();
  showQuiz();
}

// Show quiz UI
function showQuiz() {
  app.innerHTML = "";

  const container = document.createElement("div");
  container.id = "quiz-container";

  // Question text
  const questionEl = document.createElement("div");
  questionEl.id = "question";

  // Options container
  const optionsEl = document.createElement("div");
  optionsEl.id = "options";

  // Controls
  const controls = document.createElement("div");
  controls.id = "controls";

  const backBtn = document.createElement("button");
  backBtn.id = "back-btn";
  backBtn.textContent = "Back";
  backBtn.disabled = currentIndex === 0;
  backBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      selectedOptionIndex = null;
      showQuiz();
    }
  });

  const submitBtn = document.createElement("button");
  submitBtn.id = "submit-btn";
  submitBtn.textContent = "Submit";
  submitBtn.disabled =
    answeredQuestions[questions[currentIndex].id] !== undefined;
  submitBtn.addEventListener("click", () => {
    if (selectedOptionIndex === null) {
      alert("Please select an option before submitting.");
      return;
    }
    submitAnswer();
  });

  const nextBtn = document.createElement("button");
  nextBtn.id = "next-btn";
  nextBtn.textContent = "Next";
  nextBtn.disabled =
    currentIndex === questions.length - 1 ||
    !(answeredQuestions[questions[currentIndex].id] !== undefined);
  nextBtn.addEventListener("click", () => {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      selectedOptionIndex = null;
      showQuiz();
    }
  });

  controls.appendChild(backBtn);
  controls.appendChild(submitBtn);
  controls.appendChild(nextBtn);

  // Status bar
  const statusBar = document.createElement("div");
  statusBar.id = "status-bar";
  statusBar.innerHTML = `
      <div>Question: ${currentIndex + 1} / ${questions.length}</div>
      <div>Score: ${score}</div>
      <div>Topic: ${
        currentTopic.charAt(0).toUpperCase() + currentTopic.slice(1)
      }</div>
    `;

  // Exit button
  const exitBtn = document.createElement("button");
  exitBtn.id = "exit-btn";
  exitBtn.textContent = "Exit Quiz";
  exitBtn.addEventListener("click", () => {
    if (
      confirm(
        "Are you sure you want to exit the quiz? Your progress will be lost."
      )
    ) {
      clearProgress();
      renderTopicSelection();
    }
  });

  container.appendChild(questionEl);
  container.appendChild(optionsEl);
  container.appendChild(controls);
  container.appendChild(statusBar);
  container.appendChild(exitBtn);
  app.appendChild(container);

  renderQuestion();
}

// Render current question and options
function renderQuestion() {
  const questionObj = questions[currentIndex];
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");

  questionEl.textContent = questionObj.question;
  optionsEl.innerHTML = "";

  const userAnswered = answeredQuestions[questionObj.id];

  questionObj.options.forEach((option, idx) => {
    const optionEl = document.createElement("div");
    optionEl.classList.add("option");

    // Check selected / disabled states
    if (selectedOptionIndex === idx) optionEl.classList.add("selected");
    if (userAnswered !== undefined) optionEl.classList.add("disabled");

    optionEl.textContent = option;

    // Color coding on submission
    if (userAnswered !== undefined) {
      if (option === questionObj.answer) {
        optionEl.classList.add("correct");
      }
      if (option === userAnswered && userAnswered !== questionObj.answer) {
        optionEl.classList.add("wrong");
      }
    }

    optionEl.addEventListener("click", () => {
      if (userAnswered !== undefined) return; // no changes after submission
      if (selectedOptionIndex !== idx) {
        selectedOptionIndex = idx;
        renderQuestion(); // rerender to update colors
      }
    });

    optionsEl.appendChild(optionEl);
  });

  // Update buttons states
  document.getElementById("submit-btn").disabled =
    userAnswered !== undefined || selectedOptionIndex === null;
  document.getElementById("next-btn").disabled =
    currentIndex === questions.length - 1 || userAnswered === undefined;
  document.getElementById("back-btn").disabled = currentIndex === 0;
}

// Submit the selected answer
function submitAnswer() {
  const questionObj = questions[currentIndex];
  const selectedAnswer = questionObj.options[selectedOptionIndex];

  // Mark answered
  answeredQuestions[questionObj.id] = selectedAnswer;

  // Update score
  if (selectedAnswer === questionObj.answer) {
    score++;
  }

  saveProgress();

  // If last question submitted, show results
  if (currentIndex === questions.length - 1) {
    showResults();
    return;
  }

  renderQuestion();
  // Update buttons on submit
  document.getElementById("submit-btn").disabled = true;
  document.getElementById("next-btn").disabled = false; // enable next for moving forward
}

// Show final results screen
function showResults() {
  clearProgress();

  app.innerHTML = `
    <h1>Congratulations!</h1>
    <p style="font-size: 1.2rem; margin: 1rem 0;">
      You have completed the <strong>${
        currentTopic.charAt(0).toUpperCase() + currentTopic.slice(1)
      }</strong> quiz.<br/>
      Your final score is: <strong>${score} / ${questions.length}</strong>.
    </p>
    <button id="back-to-landing" style="
      background: #1E90FF;
      color: white;
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 10px;
      font-size: 1.1rem;
      cursor: pointer;
      user-select: none;
      box-shadow: 0 0 10px #1E90FF;
    ">Back to Landing Page</button>
  `;

  document.getElementById("back-to-landing").addEventListener("click", () => {
    currentTopic = null;
    questions = [];
    currentIndex = 0;
    score = 0;
    selectedOptionIndex = null;
    answeredQuestions = {};
    renderTopicSelection();
  });
}

function fadeIn(element) {
  element.classList.add("fade-enter");
  requestAnimationFrame(() => {
    element.classList.add("fade-enter-active");
    element.classList.remove("fade-enter");
  });
  setTimeout(() => {
    element.classList.remove("fade-enter-active");
  }, 400);
}

// On page load
window.onload = () => {
  if (!loadProgress()) {
    renderTopicSelection();
  }
};
