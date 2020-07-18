const fs = require("fs");
const logger = require("../logger");
const db = require("../data.json");

const addForm = function (form) {
  db.forms.push(form);
  fs.writeFileSync("data.json", JSON.stringify(db));
  logger.log("info", `push correctly in db=> ${form.id} : ${form.title}`);
  return db;
};

module.exports = { addForm };
