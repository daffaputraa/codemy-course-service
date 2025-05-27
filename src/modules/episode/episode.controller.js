const { responBerhasil, responGagal } = require("../../middleware/logger_helper");
const {
    createEpisodeService,
    getAllEpisodeService,
    getEpisodeByIdService,
    updateEpisodeService,
    deleteEpisodeService
} = require("./episode.service");

exports.createEpisodeController = async (req, res) => {
    try {
        const response = await createEpisodeService(req.body);
        res.status(200).json(
            responBerhasil({
                data: response,
                message: "Berhasil membuat episode"
            })
        );
    } catch (error) {
        res.status(500).json(
            responGagal({
                code: "0001",
                message: `Gagal membuat episode: ${error.message}`
            })
        );
    }
};

exports.getAllEpisodeController = async (req, res) => {
    try {
        const response = await getAllEpisodeService();
        res.status(200).json(
            responBerhasil({
                data: response,
                message: "Berhasil mengambil semua episode"
            })
        );
    } catch (error) {
        res.status(500).json(
            responGagal({
                code: "0002",
                message: `Gagal mengambil data: ${error.message}`
            })
        );
    }
};

exports.getEpisodeByIdController = async (req, res) => {
    try {
        const response = await getEpisodeByIdService(req.params.id);
        res.status(200).json(
            responBerhasil({
                data: response,
                message: "Berhasil mengambil detail episode"
            })
        );
    } catch (error) {
        res.status(500).json(
            responGagal({
                code: "0003",
                message: `Gagal mengambil detail: ${error.message}`
            })
        );
    }
};

exports.updateEpisodeController = async (req, res) => {
    try {
        const response = await updateEpisodeService(req.params.id, req.body);
        res.status(200).json(
            responBerhasil({
                data: response,
                message: "Berhasil mengupdate episode"
            })
        );
    } catch (error) {
        res.status(500).json(
            responGagal({
                code: "0004",
                message: `Gagal update episode: ${error.message}`
            })
        );
    }
};

exports.deleteEpisodeController = async (req, res) => {
    try {
        const response = await deleteEpisodeService(req.params.id);
        res.status(200).json(
            responBerhasil({
                data: response,
                message: "Berhasil menghapus episode"
            })
        );
    } catch (error) {
        res.status(500).json(
            responGagal({
                code: "0005",
                message: `Gagal menghapus episode: ${error.message}`
            })
        );
    }
};
