import { router } from "express";
const User = require("../db/models/User");
const Admin = require("../db/models/admin");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let user = await User.findByPk(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    next(err);
  }
});

// TODO: Fix these routes
// router.post("/student/:studentId", async (req, res, next) => {
//   try {
//     let admin = await Admin.findByPk(req.params.adminId);
//     let user = await User.create(req.body);
//     let studentTest = await user.setStudent(student);
//     res.status(201).send(studentTest);
//   } catch (err) {
//     next(err);
//   }
// });

// router.delete("/:id", async (req, res, next) => {
//   try {
//     await User.destroy({ where: { id: req.params.id } });
//     res.status(204).send();
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
