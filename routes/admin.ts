import { router } from "express";
import { Admin } from "../db/models/admin";

router.get("/", async (req, res, next) => {
  try {
    const admins = await Admin.findAll();
    res.send(admins);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let admin = await Admin.findByPk(req.params.id);
    if (admin) {
      res.send(admin);
    } else {
      res.status(404).send("Admin not found");
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let admin = await Admin.create(req.body);
    res.status(201).send(admin);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let updateAdminInfo = await Admin.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    res.send(updateAdminInfo[1]);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Admin.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
