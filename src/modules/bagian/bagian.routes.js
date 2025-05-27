const express = require("express");
const {
    createBagianController,
    getAllBagianController,
    getBagianByIdController,
    updateBagianController,
    deleteBagianController
} = require("./bagian.controller");

const router = express.Router();

router.post("/create", createBagianController);
router.get("/list", getAllBagianController);
router.get("/detail/:id", getBagianByIdController);
router.put("/update/:id", updateBagianController);
router.delete("/delete/:id", deleteBagianController);

module.exports = router;
