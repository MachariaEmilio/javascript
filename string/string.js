your_string = prompt("enter your string to check palindrome ");
reversed_string = "";
for (let i = your_string.length-1 ; i >= 0; i--) {
  reversed_string = reversed_string.concat(your_string.charAt(i));
   
}
console.log(reversed_string)
if (your_string === reversed_string) {
  console.log(your_string.concat(" is a palindrome "));
} else {
  console.log(your_string.concat(" is not a palindrome "));
}