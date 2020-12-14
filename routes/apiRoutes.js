// ===============================================================================
// LOAD DATA
// ===============================================================================
let notesData = require("../data/db.json");
const express = require("express");
let path = require("path");

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

  app.post("/notes", function (req, res) {
    res.push(notesData);
  });
};
