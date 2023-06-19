// test for the functions that use the model go here
import { describe, expect, it, vi } from "vitest";

import User from "../../db/models/user";

// const User = require("../../db/models/user");

describe("function", () => {
  describe("function name", () => {
    it("should do something", () => {
      console.log("hello?", User); // okay, wasn't expecting it to return that but opkay
    });
  });
});
