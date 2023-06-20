// tests for the functions go here
import { describe, expect, it, vi } from "vitest";
import { Admin } from "../db/models/admin";
import { User } from "../db/models/user";
import { adminFunc, userFunc } from "./utils";
// import { SequelizeMock } from "sequelize-mock";

// vi.mock("../db/models/admin", () => ({
//   Admin: vi.fn(),
// }));

// const SequelizeMock = require("sequelize-mock");

// const dbMock = SequelizeMock();

// const mockAdmin = dbMock.define("Admin", {
//   id: 2,
//   firstName: "John",
//   lastName: "Wick",
// });

// vi.mock("../db/models/admin.ts", () => {
//   const Admin = vi.fn();
//   Admin.prototype.findAll = mockAdmin;
//   return { Admin };
// });

// vi.mock("../db/models/admin.ts", () => {
//   const Admin = vi.fn(() => ({
//     findAll: vi.fn(),
//   }));
//   return { Admin };
// });

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
