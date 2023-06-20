const server = require("./app")({
  logger: {
    level: "info",
    transport: {
      target: "pino-pretty",
    },
  },
});

server.listen({ port: 5432 }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
