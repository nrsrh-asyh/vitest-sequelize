import fastify from "fastify";
import adminRouter from "../routes/admin";
import userRouter from "../routes/user";

export function build(opts = {}) {
  const app = fastify(opts);

  app.register(adminRouter);
  app.register(userRouter);

  return app;
}
