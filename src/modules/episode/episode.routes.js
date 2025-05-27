const express = require("express");
const router = express.Router();
const {
    createEpisodeController,
    getAllEpisodeController,
    getEpisodeByIdController,
    updateEpisodeController,
    deleteEpisodeController
} = require("./episode.controller");

router.post("/create", createEpisodeController);
router.get("/list", getAllEpisodeController);
router.get("/detail/:id", getEpisodeByIdController);
router.put("/update/:id", updateEpisodeController);
router.delete("/delete/:id", deleteEpisodeController);

module.exports = router;
