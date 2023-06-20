// where we start the server

// we dont use these in the fastify app???
// const db = require("./db/db");
// const user = require("./routes/user");
// const admin = require("./routes/admin");

import fastify from "fastify";

function build(opts = {}) {
  const app = fastify(opts);

  app.get("/", async function (request, reply) {
    return { hello: "world" };
  });

  return app;
}

module.exports = build;

// --------------------------

// app.use("/user", user);
// app.use("/admin", admin);

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// const init = async () => {
//   if (require.main === module) {
//     //will only run when run with npm start and not with npm test to avoid db syncing in multiple threads when running admin
//     try {
//       await db.sync();
//       app.listen(5432, () => {
//         console.log("Server is listening on port 5432!");
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   }
// };

// init();

// module.exports = app;
