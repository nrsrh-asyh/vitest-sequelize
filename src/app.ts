// where we start the server i think (?)
// ---------------------------------------------
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("./db/db");
const user = require("./routes/user");
const admin = require("./routes/admin");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use("/user", user);
app.use("/admin", admin);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const init = async () => {
  if (require.main === module) {
    //will only run when run with npm start and not with npm test to avoid db syncing in multiple threads when running admin
    try {
      await db.sync();
      app.listen(3000, () => {
        console.log("Server is listening on port 3000!");
      });
    } catch (err) {
      console.error(err);
    }
  }
};

init();

module.exports = app;
