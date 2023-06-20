// defining admin route
import Fastify from "fastify";
import { Admin } from "../db/models/admin";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.send(admins);
  } catch (e) {
    res.send(e);
  }
});

module.exports = fastify;
