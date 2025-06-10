
const express = require ("express");
const authentication = require ("../middleware/authentication");
const checkRole = require("../middleware/authorization");
const { createUser , getAllUser , updateUer , deleteUser , adminLogin , getOneUser } = require ("../controllers/UserController");

const userRouter = express.Router();

userRouter.post("/createUser",authentication,createUser);
userRouter.get("/userDetails",authentication,checkRole("admin"),getAllUser);
userRouter.put("/updatedUser/:id",updateUer);
userRouter.delete("/deleteUser/:id",deleteUser);
userRouter.post("/adminLogin",adminLogin);
userRouter.get("/me",authentication,getOneUser); 

module.exports = userRouter ;

