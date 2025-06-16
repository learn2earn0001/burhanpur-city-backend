
const express = require ("express");
const authentication = require("../middleware/authentication");
const checkRole = require("../middleware/authorization")
const { createBussiness,getBussiness , updateBussiness ,deletedBuss,getWhatsappLink}= require ("../controllers/BussinessController")



const BussinessRouter = express.Router();

// Apply middlewares before createBussiness
BussinessRouter.post("/createBuss", authenticate, checkUploadLimit, createBussiness);

BussinessRouter.get("/getBuss", getBussiness);
BussinessRouter.put("/updateBuss", updateBussiness);
BussinessRouter.delete("/deleteBuss", deletedBuss);
BussinessRouter.get('/whatsapp-link/:id', getWhatsappLink);

module.exports = BussinessRouter;
