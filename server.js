var express = require("express");

var app = express();

//var PORT = process.env.PORT || 8080;
process.env.NODE_ENV === 'production'; {
  app.use(express.static('public'));
}



// Serve static content for the app from the "public" directory in the application directory.
// Parse application body as JSON

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));




// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  //Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
  
});
