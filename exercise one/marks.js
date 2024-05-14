//   Write a JavaScript program where the program takes a random integer between 1 and 10, 
// and the user is then prompted to input a guess number. 
// The program displays the message "Good Work" 
// if the input matches the guess number otherwise "Not matched".

examinations = prompt("what type of exam ");
markss = prompt("enter the score ");
checkgrade(examinations, markss);
function checkgrade(examination, marks) {
  if (examination == "normal") {
    if (marks >= 89) {
      alert("exelent job you got an A+");
    } else if (marks >= 80) {
      alert("good job you got an A");
    } else if (marks >= 75) {
      alert("well done,you got a b+");
    } else if (marks >= 70) {
      alert("nice work you got a B");
    } else if (marks >= 60) {
      alert("you got c");
    } else if (marks <= 59) {
      alert("you need improvement ");
    }
  } else {
    if (marks >= 90) {
      alert("good job you got an A+");
    } else if (marks >= 80) {
      alert("good job you got an A");
    } else if (marks >= 75) {
      alert("well done,you got a B+");
    } else if (marks >= 70) {
      alert("nice work you got a B");
    } else if (marks >= 60) {
      alert("you got c");
    } else if (marks <= 59) {
      alert("you need improvement ");
    }
  }
}
