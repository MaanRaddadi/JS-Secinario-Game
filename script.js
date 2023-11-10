var myCodeMirror = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "javascript",
  theme: "dracula",
  lineNumbers: true,
});
let questionText = document.querySelector(".question");
let runBtn = document.getElementById("run");

myCodeMirror.setValue(`function findFaisal(){ 
  const store = ["Khaled","Nora","Mohammed","Faisal","Sarah"];
   //type your code here 
  
  }`);
questionText.textContent = "اكتب دالة تستخرج قيمة 'Faisal'  وترجعه لأهله";

runBtn.addEventListener("click", () => {
  const userCode = myCodeMirror.getValue();
  const userResult = eval(`(${userCode})()`);
  checkAnswer(result);
});

function checkAnswer(result) {
 
}
