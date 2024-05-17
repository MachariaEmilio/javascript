var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log("Before removing")
console.log(student);

delete student.rollno;

console.log("After removing");
console.log(student);
