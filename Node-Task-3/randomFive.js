let fs = require("fs");
const getRandomElements = require("random-elements-array");

var rn = require("random-number");

const data = fs.readFileSync("color_palette.json", "utf8");

/**
 *
 *Function to generate a random color from json data
 * @return {Array}
 */
function randomColor() {
  const fiveColor = [];
  const col = JSON.parse(data);

  return getRandomElements(col, 5);
}

module.exports = randomColor;
