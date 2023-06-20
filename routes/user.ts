// defining admin route
import { FastifyPluginAsync } from "fastify";
import { User } from "../db/models/user";

const userRouter: FastifyPluginAsync = async (fastify) => {
  fastify.get("/", async (req, rep) => {
    try {
      const users = await User.findAll();
      rep.send(users);
    } catch (e) {
      rep.send(e);
    }
  });
};

export default userRouter;
