const { responBerhasil, responGagal } = require("../../middleware/logger_helper");
const { createEpisodeRepository } = require("./episode.repository");

exports.createEpisodeController = async (req, res) => {

    const bodyPayload = req.body;

    try {
        const response = await createEpisodeRepository(bodyPayload);
        res.status(200).json(responBerhasil({
            data : response, 
            message : "Berhasil membuat episode"
        }))
    } catch (error) {
        res.status(500).json(responGagal({
            code : "0001",
            message : "Gagal membuat episode"
        }))
    }   
}

