const { createUser, getUsers, getUserByID, updateUserByID, deleteUserByID} = require("./user.controller.js");
const router = require("express").Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserByID);
router.patch("/", updateUserByID);
router.delete("/", deleteUserByID);

module.exports = router;
