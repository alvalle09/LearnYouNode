const fs = require("fs");
const path = require("path");

module.exports = (directory, filterExtension, callback) => {
  filterExtension = `.${filterExtension}`;
  fs.readdir(directory, (error, files) => {
    if (error) {
      return callback(error);
    }

    const filteredFiles = files.filter((filename) => {
      const extension = path.extname(filename);
      return extension === filterExtension;
    });
    return callback(null, filteredFiles);
  });
};
