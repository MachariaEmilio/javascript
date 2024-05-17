function all_properties(obj) {
  let properties = new Set();
  let current = obj;

  while (current) {
    Object.getOwnPropertyNames(current).forEach((prop) => properties.add(prop));

    current = Object.getPrototypeOf(current);
  }

  let methods = Array.from(properties).filter(
    (prop) =>
      typeof obj[prop] === "function" ||
      typeof obj.constructor[prop] === "function"
  );

  return methods;
}
let music = {
  artist: "christina shushor",
  age: 40,
  nationality: "tanzanian",
  music_name: "kushusha nyavu",
};

console.log(all_properties(music));
