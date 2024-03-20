const { createUser, getUsers, getUserByID} = require("./user.controller.js");
const router = require("express").Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserByID);

module.exports = router;
