// where we start the server
import Fastify from "fastify";
import adminRouter from "../routes/admin";
import userRouter from "../routes/user";

const fastify = Fastify({
  logger: true,
});

fastify.register(adminRouter);
fastify.register(userRouter);

const start = async () => {
  try {
    await fastify.listen({ port: 5432 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
