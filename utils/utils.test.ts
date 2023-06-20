// tests for the functions go here
import { describe, expect, it } from "vitest";
import { Admin } from "../db/models/admin";
import { User } from "../db/models/user";
import { adminFunc, userFunc } from "./utils";

describe("utils", () => {
  describe.only("adminFunc", () => {
    it("should return all of the admins", async () => {
      const admins = await adminFunc();
      expect(admins).toBeInstanceOf(Admin);
    });
  });

  describe("userFunc", () => {
    it("should return all of the users", async () => {
      const users = await userFunc();
      expect(users).toBeInstanceOf(User);
    });
  });
});
