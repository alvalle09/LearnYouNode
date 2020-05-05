const fs = require("fs");
const path = require("path");

module.exports = function (args) {
  const directoryContents = fs.readdir(directory, (error, files) => {
    const filteredFiles = files.filter((filename) => {
      const extension = path.extname(filename);
      return extension === filterExtension;
    });
    console.log(filteredFiles.join("\n"));
  });
};
