let music = {
  artist: "christina shushor",
  age: 40,
  nationality: "tanzanian",
  music_name: "kushusha nyavu",
};
function values_pair(object) {
  arr = [Object.keys(object), Object.values(object)];
  for (let i = 0; i < 4; i++) {
    new_list= [arr[[1]][i], arr[[0]][i]];
    console.log(new_list);
  }
}

values_pair(music);
