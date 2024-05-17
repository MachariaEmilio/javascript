
function hasOwnProp(obj, prop) {
  return obj.hasOwnProperty(prop);
}

let obj = { name :" emilio ", age: 22 };
console.log(hasOwnProp(obj, 'name')); 
console.log(hasOwnProp(obj, 'emilio')); 
console.log(hasOwnProp(obj, "age")); 
console.log(hasOwnProp(obj, 'toString')); 
