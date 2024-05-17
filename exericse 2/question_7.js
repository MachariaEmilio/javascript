let dog_string = "dog";

for (let i = 0; i < dog_string.length; i++) {
  for (let j = i; j < dog_string.length; j++) {
    console.log(dog_string.substring(i, j + 1));
  }
}
