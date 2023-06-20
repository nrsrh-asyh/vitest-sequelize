// tests for the functions go here
import { describe, expect, it, test, vi } from "vitest";
import { adminFunc, userFunc } from "./utils";

describe("utils", () => {
  describe.only("adminFunc", () => {
    it("should do return all of the admins", async () => {
      adminFunc();
    });
  });

  describe("userFunc", () => {
    it("should do return all of the users", async () => {
      userFunc();
    });
  });
});
