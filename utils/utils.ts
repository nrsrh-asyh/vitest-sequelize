// functions that use the models go here
import { Admin } from "../db/models/admin";
import { User } from "../db/models/user";

export const adminFunc = () => {
  return Admin.findAll();
};

export const userFunc = () => {
  return User.findAll();
};
