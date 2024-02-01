const path = require("path");
const fs = require("fs");
const sizeOf = require("image-size");
const cities = require("../data/cities.json");

const EXT = ".png";
const SPACE = "_";

const emblemsDir = path.join(__dirname, "../../public/emblems");

const cityNames = Object.keys(cities);
let counter = 0;

function update(file) {
  const name = file.replace(EXT, "").replace(SPACE, " ");
  if (!cityNames.includes(name)) {
    console.error("No matching city for file: " + file);
  }
  counter++;
  const img = path.join(emblemsDir, file);
  const size = sizeOf(img);
  cities[name].imageSize = { w: size.width, h: size.height };
}

fs.readdirSync(emblemsDir)
  .filter((file) => file.endsWith(EXT))
  .forEach((file) => update(file));

if (cityNames.length != counter) {
  console.error("Not all cities has emblem image");
}

const updatedCities = {};
cityNames
  .sort((a, b) => a.localeCompare(b))
  .forEach((name) => (updatedCities[name] = cities[name]));

const dataJson = path.join(__dirname, "../data/cities.json");

fs.writeFileSync(dataJson, JSON.stringify(updatedCities, null, 2));
