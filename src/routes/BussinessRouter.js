const express = require("express");
const authenticate = require("../middleware/authenticateion");
const { checkRole } = require("../middleware/authorization");
const checkUploadLimit = require("../middleware/uploadLimit"); // ✅ New middleware
const {
  createBussiness,
  getBussiness,
  updateBussiness,
  deletedBuss,
} = require("../controllers/BussinessController");

const BussinessRouter = express.Router();

// Apply middlewares before createBussiness
BussinessRouter.post("/createBuss", authenticate, checkUploadLimit, createBussiness);

BussinessRouter.get("/getBuss", getBussiness);
BussinessRouter.put("/updateBuss", updateBussiness);
BussinessRouter.delete("/deleteBuss", deletedBuss);

module.exports = BussinessRouter;
