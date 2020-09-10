const { readFileSync } = require("fs");
const { join } = require("path");
const fileOne = readFileSync(
  join(__dirname, "_files", "file1.txt"),
  "utf8"
).toString();

const fileTwo = readFileSync(
  join(__dirname, "_files", "file2.txt"),
  "utf8"
).toString();

module.exports = (req, res) => {
  res
    .status(200)
    .send(
      `Hello! I'm going to show you what's in my _files! \n ${fileOne} \n ${fileOne}`
    );
};
