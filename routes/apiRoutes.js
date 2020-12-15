// ===============================================================================
// LOAD DATA
// ===============================================================================
let notesData = require("../db/db.json");
const express = require("express");
let path = require("path");
const fs = require("fs");
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  app.use(express.static(path.join(__dirname, "../public")));
  // API GET Requests
  app.get("/api/notes", (req, res) => {
    res.json(notesData);
  });

  // ---------------------------------------------------------------------------

  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function (req, res) {
    notesData.push(req.body);
    console.log(notesData);
    fs.writeFile("./db/db.json", JSON.stringify(notesData), (err) => {
      if (err) throw err;
      res.json(notesData);
    });
  });
};

//splice
//update item
