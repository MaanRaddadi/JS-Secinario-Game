const sec = document.querySelector(".secondary-container");
const names = ["Maan", "Hatem", "AlRaddadi", "Mohammed"];
document.getElementById("execute").addEventListener("click", () => {
  getUserAnswer();
  checkAnswer();
});
const textArea = document.getElementById("userCode");
textArea.value = "//Given This array const names ${names} ";
function getUserAnswer() {
  eval(textArea.value);
}
//lost kid in crowed
function checkAnswer() {
  if (!names.includes("Maan")) {
    console.log("Win");
  }
}
