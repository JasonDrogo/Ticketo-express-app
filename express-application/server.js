const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
var fs = require("fs");
app.use(cors());
app.get("/events", (req, res) => {
  res.sendFile("./data/Data.json", { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
