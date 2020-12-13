// ==============================================================================
// DEPENDENCIES
// ==============================================================================

let express = require("express");
let path = require("path");
// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

// Tells node that we are creating an "express" server
let app = express();

// Sets an initial port. We"ll use this later in our listener
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(_dirname, "../public")));

// ================================================================================
// ROUTER

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
