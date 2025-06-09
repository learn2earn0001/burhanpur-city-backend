const express = require("express");
const authenticateion = require("../middleware/authenticateion");

const {
  createSubCat,
  getSubCategoryOne,
  updateSubCategory,
  deleteSubCategory,
  getSubCategoryAll,
} = require("../controllers/SubCategoryController");

const subcategoryRoutes = express.Router();

subcategoryRoutes.post("/createSubCategory", createSubCat);
subcategoryRoutes.get("/getSubCategory/:categoryId", getSubCategoryOne);
subcategoryRoutes.get("/getSubCategory", getSubCategoryAll);
subcategoryRoutes.put("/updateSubCategory/:id", updateSubCategory);
subcategoryRoutes.delete("/deleteSubCategory/:id", deleteSubCategory);

module.exports = subcategoryRoutes;
