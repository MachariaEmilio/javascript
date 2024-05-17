let music = {
  artist: "christina shushor",
  age: 40,
  nationality: "tanzanian",
  music_name: "kushusha nyavu",
};

function getAllPropertyNames(obj) {
  let properties = new Set();
  let current = obj;

    while (current) {
        Object.getOwnPropertyNames(current).forEach(prop => properties.add(prop));
      
        current = Object.getPrototypeOf(current);
  }

  
  return Array.from(properties);
}




console.log(getAllPropertyNames(music));
