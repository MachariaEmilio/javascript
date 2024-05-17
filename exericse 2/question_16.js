let music = {
  artist: "christina shushor",
  age: 40,
  nationality: "tanzanian",
  music_name: "kushusha nyavu",
};


let key = Object.keys(music);
let value = Object.values(music);
let new_object = {};

function change(my_object) {
  for (let i = 0; i < Object.keys(my_object).length; i++) {
    new_object[value[i]] = key[i];
  }
  console.log(new_object);
}

change(music);
