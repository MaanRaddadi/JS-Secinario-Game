const stores = [
  {
    name: "Store A",
    location: "First-Floor",
    prices: 1000,
  },
  {
    name: "Store B",
    location: "Second-Floor",
    prices: 2500,
  },
  {
    name: "Store C",
    location: "Ground-Fall",
    prices: 5500,
  },
  {
    name: "Store D",
    location: "First-Floor",
    prices: 900,
  },
  {
    name: "Store E",
    location: "Third-Floor",
    prices: 800,
  },
];

//Define answer for comparison
const sortedBooks = [
  { title: "Book B", author: "Author B", year: 1998 },
  { title: "Book A", author: "Author A", year: 2005 },
  { title: "Book C", author: "Author C", year: 2010 },
];

//Game Enviroment For Each Level
let mainContainer = document.querySelector(".main-container");
let marketEnviroment = document.querySelector(".enviroment-contianer");
let storesEnviroment = document.querySelector(".stores-enviroment");
let roomEnviroment = document.querySelector(".room-enviroment");
let secondRoomEnviroment = document.querySelector(".second-room-enviroment");

const questions = [
  {
    questionTitle: "اكتب دالة تستخرج قيمة 'Faisal'  وترجعه لأهله",
    keyAnswer: "Faisal",
    questionHelperCoder: `function findFaisal(){ 
      const store = ["Khaled","Nora","Mohammed","Faisal","Sarah"];
       //type your code here 
      }`,
    enviroment: marketEnviroment,
    animation: "FirstAnswerAnimation",
    target: "kid",
    winningDialog: "مبرررررررررررروك, وفيصل رجع لأهله",
  },
  {
    questionTitle:
      "ستخرج جميع اسماء المتاجر المناسبة لميزانية نورة (اسماء المتاجر يجب ان تكون بصيغة نصية String)",
    keyAnswer: "Store A Store D Store E",
    questionHelperCoder: `function findCheapStores(){ 
      const stores = [
        {
          name: "Store A",
          location: "First-Floor",
          prices: "1000",
        },
        {
          name: "Store B",
          location: "Second-Floor",
          prices: "2500",
        },
        {
          name: "Store C",
          location: "Ground-Fall",
          prices: "5500",
        },
        {
          name: "Store D",
          location: "First-Floor",
          prices: "900",
        },
        {
          name: "Store E",
          location: "Third-Floor",
          prices: "800",
        },
      ];
      //type your code here 
          }`,
    enviroment: storesEnviroment,
    animation: "SecondAnswerAnimation",
    target: "man-stores",
    arg: stores,
    winningDialog: "حلك اسطوووري",
  },
  {
    questionTitle:
      "اكتب دالة تستخرج الارقام فقط من القيمة النصية المعطاة وترجعها في قيمة نصية منفصلة",
    keyAnswer: "050020093920",
    questionHelperCoder: `function getNumber(){ 
      const meassage = "Ex#0Rb/5pT0Q0bZ#20!a0$!9*3+9()20";
       //type your code here 
      }`,
    enviroment: roomEnviroment,
    animation: "SecondAnswerAnimation",
    target: "man-stores",
    winningDialog: "ماشاء الله, واضح انك ادفانسد",
  },
  {
    questionTitle:
      "اكتب دالة ترتب الكتب من الاقدم إلى الأحدث وترجع القيمة كمصفوفة",
    keyAnswer: JSON.stringify(sortedBooks),

    questionHelperCoder: `function sortBooks(){ 
  const books = [
    { title: 'Book A', author: 'Author A', year: 2005 },
    { title: 'Book B', author: 'Author B', year: 1998 },
    { title: 'Book C', author: 'Author C', year: 2010 },
  ]
   //type your code here 

  }`,
    enviroment: secondRoomEnviroment,
    animation: "SecondAnswerAnimation",
    target: "man-stores",
    winningDialog: "انتهت اللعبة",
  },
];
//Global Variables
const modalTitle = document.querySelector(".modal-title");
const modalBody = document.querySelector(".modal-body");
let questionText = document.querySelector(".question");
let runBtn = document.getElementById("run");
let dialogBox = document.querySelectorAll(".dialog-box");
let editorContainer = document.querySelector(".editor-container");
let modalBtn = document.querySelector(".modal-btn");
let dialogText = document.getElementById("dialog-text");
let nextBtn = document.querySelector(".modal-btn-next");
let currectAnswerModalText = document.querySelector(".currectAnswer-text");
let currentQuestion = 0;
// Setting Up the code editor
var myCodeMirror = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "javascript",
  theme: "dracula",
  lineNumbers: true,
});

// Define Modal elements to change based on the users answer
var myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
var currectAnswerModal = new bootstrap.Modal(
  document.getElementById("currectAnswerModal")
);
var wrongAnswerModel = new bootstrap.Modal(
  document.getElementById("wrongAnswerModel")
);

startTheGame();
// Setting up the start of the game
function startTheGame() {
  myCodeMirror.setValue(questions[0].questionHelperCoder);
  questionText.textContent = questions[0].questionTitle;

  document.body.onload = function () {
    modalTitle.textContent = "مرحبا بك في سيناريوهات JS";
    modalBody.innerText = `هذي اللعبة تحتوي على سيناريوهات مصممة لتختبر معرفتك في بعض مفاهيم لغة البرمجة Javascript`;
    modalBody.insertAdjacentHTML(
      "beforeend",
      `<ul class="list-unstyled">
      <li><h4>قوانين اللعبة</h4></li>
    <li>- استخدم نفس الدوال المكتوبة بدون تعديل</li>
    <li>- القيم المعطاة لا يجب التغيير عليها او تعديل اسمها</li>
  </ul>`
    );

    myModal.show();
  };
}
modalBtn.addEventListener("click", () => {
  myModal.hide();
});

// Run Button Event

runBtn.addEventListener("click", () => {
  const userCode = myCodeMirror.getValue();
  const userResult = eval(`(${userCode})()`);
  if (currentQuestion === 3) {
    checkAnswer(JSON.stringify(userResult));
  } else {
    checkAnswer(userResult);
  }
});

function checkAnswer(result) {
  // setting the animation if the answer is currect
  // show the currectAnswer Modal after the animation ends
  if (result === questions[currentQuestion].keyAnswer) {
    document
      .getElementById(questions[currentQuestion].target)
      .classList.toggle(questions[currentQuestion].animation);
    //setting a fadeout animation for the dialog box
    dialogBox[currentQuestion].classList.toggle("fadeOut");
    if (currentQuestion === 1) {
      setTimeout(() => {
        document.querySelector(".dialog-box-fade-in").style.display = "block";
      }, 5000);
    }
    if (currentQuestion === 3) {
      document.getElementById("book1").style.animationName = "booksAnimation1";
      document.getElementById("book2").style.animationName = "booksAnimation2";
      document.getElementById("book3").style.animationName = "booksAnimation3";
    }
    //showing the currect answer modal after a delay
    currectAnswerModalText.innerText = questions[currentQuestion].winningDialog;
    setTimeout(() => {
      currectAnswerModal.show();
    }, 6000);
  } else {
    wrongAnswerModel.show();
  }
}
//event for moving to the next secenario
nextBtn.addEventListener("click", () => {
  if (currentQuestion < 3) {
    questions[currentQuestion].enviroment.style.display = "none";
    currentQuestion++;
    currectAnswerModal.hide();
    showNextQuestion();
  } else {
    currectAnswerModal.hide();
  }
});

function showNextQuestion() {
  questions[currentQuestion].enviroment.style.display = "block";
  questionText.textContent = questions[currentQuestion].questionTitle;
  myCodeMirror.setValue(questions[currentQuestion].questionHelperCoder);
}
