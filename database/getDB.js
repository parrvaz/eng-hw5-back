const fs = require("fs");
const logger = require("../logger");

const db = require("../data.json");

const getForms = function () {
  return db.forms;
};

const getSingleForm = function (id) {
  for (var i = 0; i < db.forms.length; i++) {
    if (db.forms[i].id == id) {
      logger.log(
        "info",
        `return form details: ${db.forms[i].id}=>${db.forms[i].title}`
      );
      return db.forms[i];
    }
  }

  return false;
};

module.exports = { getForms, getSingleForm };
