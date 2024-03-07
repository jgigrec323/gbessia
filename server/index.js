const express = require("express");
const app = express();
const db = require("./config/database");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/newsletter", require("./routes/newsletter"));
app.use("/event", require("./routes/event"));

db.authenticate()
  .then(() => {
    app.listen(port, () => {
      console.log("Connected & Running on " + port);
    });
  })
  .catch((err) => {
    throw err;
  });
