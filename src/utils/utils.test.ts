// test for the functions that use the model go here
import { describe, expect, it, vi } from "vitest";

import { User } from "../../db/models/user";
import { FastifyRequest } from "fastify";

User.prototype.testMethod = () => {
  console.log("this is a test instancve (?)");
};

describe("function", () => {
  describe("function name", () => {
    it("should do something", async () => {
      // okay, this kind of sets up a connection of sorts
      //   const user = await User.findOne({ where: { firstName: "Nathan" } });

      //   user.testMethod();

      console.log("hello?", User); // okay, wasn't expecting it to return that but opkay
    });
  });
});
