// defining admin route
import { FastifyPluginAsync } from "fastify";
import { Admin } from "../db/models/admin";

const adminRouter: FastifyPluginAsync = async (fastify) => {
  fastify.get("/", async (req, rep) => {
    try {
      const admins = await Admin.findAll();
      rep.send(admins);
    } catch (e) {
      rep.send(e);
    }
  });
};

export default adminRouter;
