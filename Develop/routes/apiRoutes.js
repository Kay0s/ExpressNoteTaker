// ===============================================================================
// LOAD DATA
// ===============================================================================

let notesData = require("../data/notesData");
let deletedData = require("../data/deletedData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests

  // ---------------------------------------------------------------------------

  app.get("/api/notes", function (req, res) {
    res.json(notesData);
  });

  app.get("/api/index.html", function (req, res) {
    res.json(deletedData);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function (req, res) {
    if (notesData.length < 5) {
      notesData.push(req.body);
      res.json(true);
    } else {
      deletedData.push(req.body);
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------

  app.post("/api/notes/:id", function (req, res) {
    // Empty out the arrays of data
    notesData.length = 0;
    deltedData.length = 0;

    res.json({ ok: true });
  });
};
