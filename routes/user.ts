// defining user route
import Fastify from "fastify";
import { User } from "../db/models/user";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    res.send(e);
  }
});

module.exports = fastify;
