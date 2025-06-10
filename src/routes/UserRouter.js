const express = require("express");
const authenticateion = require("../middleware/authenticateion");

const {
  createUser,
  getAllUser,
  updateUer,
  deleteUser,
  adminLogin,
  getOneUser,
} = require("../controllers/UserController");

const userRouter = express.Router();

userRouter.post("/createUser", authenticateion, createUser);
userRouter.get("/userDetails", authenticateion, getAllUser);
userRouter.put("/updatedUser/:id", updateUer);
userRouter.delete("/deleteUser/:id", deleteUser);
userRouter.post("/adminLogin", authenticateion, adminLogin);
userRouter.get("/me", authenticateion, getOneUser);

module.exports = userRouter;
