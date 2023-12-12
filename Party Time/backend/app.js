const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json);

// db conn
const conn = require("./db/conn");
conn();
// routes
const routes = require("./routes/router");
app.use("/api", routes);

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
