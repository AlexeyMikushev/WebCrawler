const fs = require("fs");
const scrape = require("./crawler");

scrape().then((result) => {
  if (result) {
    const json = JSON.stringify(result, null, 2);
    fs.writeFile("result.json", json, (error) => {
      if (error) {
        console.error(error);
      }
    });
  }
});
