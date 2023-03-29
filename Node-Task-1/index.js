let fs = require("fs");

fs.readFile("./color_palette.json", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }

  try {
    const fiveColor = [];
    const col = JSON.parse(jsonString);
    for (var i = 0; i < 5; i++) {
      let random = Math.floor(Math.random() * (44 - 1 + 1) + 1);
      //console.log("Color is:", col[random]);
      fiveColor.push(col[random]);
    }
    fs.writeFileSync(
      "./randomized_color_palette.json",
      JSON.stringify(fiveColor, null, 4)
    );
    fs.readFile("./randomized_color_palette.json", (err, file) => {
      const randomColor = JSON.parse(file);
      console.log(randomColor);
    });
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});
