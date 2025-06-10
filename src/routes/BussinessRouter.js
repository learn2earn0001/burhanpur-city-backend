const express = require("express");
const authenticate = require("../middleware/authenticateion");
const { checkRole } = require("../middleware/authorization");
const {
  createBussiness,
  getBussiness,
  updateBussiness,
  deletedBuss,
} = require("../controllers/BussinessController");

const BussinessRouter = express.Router();

BussinessRouter.post("/createBuss", createBussiness);
BussinessRouter.get("/getBuss", getBussiness);
BussinessRouter.put("/updateBuss", updateBussiness);
BussinessRouter.delete("/deleteBuss", deletedBuss);

module.exports = BussinessRouter;
