// Quiz One: Write a JavaScript program where the program takes a random integer
//  between 1 and 10, and the user is then prompted to input a guess number.
// The program displays the message "Good Work"
//  if the input matches the guess number otherwise "Not matched".

let randomnumber = Math.floor(Math.random() * 10) + 1;

let Userinput = prompt("enter a random number between 1 to 10 ");
if ((randomnumber = Userinput)) {
  alert("good work ");
} else {
  alert("not a match ");
}
