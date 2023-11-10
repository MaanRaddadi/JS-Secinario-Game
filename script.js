const questions = [
  {
    questionTitle: "اكتب دالة تستخرج قيمة 'Faisal'  وترجعه لأهله",
    keyAnswer: "Faisal",
    questionHelperCoder: `function findFaisal(){ 
      const store = ["Khaled","Nora","Mohammed","Faisal","Sarah"];
       //type your code here 
      }`,
  },
];
//Global Variables
const modalTitle = document.querySelector(".modal-title");
const modalBody = document.querySelector(".modal-body");
let questionText = document.querySelector(".question");
let runBtn = document.getElementById("run");
let gameEnviroment = document.querySelector(".enviroment-contianer");
let mainContainer = document.querySelector(".main-container");
let editorContainer = document.querySelector(".editor-container");
let modalBtn = document.querySelector(".modal-btn");
let dialogText = document.getElementById("dialog-text");
let currentQuestion = 0;
// Setting Up the code editor
var myCodeMirror = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "javascript",
  theme: "dracula",
  lineNumbers: true,
});
gameEnviroment.style.display = "none";
editorContainer.style.display = "none";

startTheGame();

var myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
var currectAnswerModal = new bootstrap.Modal(
  document.getElementById("currectAnswerModal")
);
var wrongAnswerModel = new bootstrap.Modal(
  document.getElementById("wrongAnswerModel")
);
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
  gameEnviroment.style.display = "block";
  editorContainer.style.display = "block";
  myModal.hide();
});

// Run Button Event

runBtn.addEventListener("click", () => {
  // Define Modal elements to change based on the users answer
 
    const userCode = myCodeMirror.getValue();
    const userResult = eval(`(${userCode})()`);
    checkAnswer(userResult);
  
});

function checkAnswer(result) {
  // setting the animation if the answe is currect
  // show the currectAnswer Modal after the animation ends
  if (result === questions[currentQuestion].keyAnswer) {
    document.getElementById("kid").classList.toggle("FirstAnswerAnimation");
    setTimeout(() => {
      currectAnswerModal.show();
    }, 5000);
  } else {
    wrongAnswerModel.show();
  }
}
