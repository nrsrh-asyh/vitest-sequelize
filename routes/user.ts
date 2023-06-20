import { router } from "express";
import { User } from "../db/models/user";

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

module.exports = router;
