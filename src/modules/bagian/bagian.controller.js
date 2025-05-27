const {
    responBerhasil,
    responGagal
} = require("../../middleware/logger_helper");

const {
    createBagianService,
    getAllBagianService,
    getBagianByIdService,
    updateBagianService,
    deleteBagianService
} = require("./bagian.service");

exports.createBagianController = async (req, res) => {
    try {
        const result = await createBagianService(req.body);

        res.status(200).json(
            responBerhasil({
                data: result,
                message: "Berhasil membuat bagian"
            })
        );
    } catch (error) {
        res.status(500).json(
            responGagal({
                code: "0001",
                message: error.message
            })
        );
    }
};

exports.getAllBagianController = async (_req, res) => {
    try {
        const result = await getAllBagianService();

        res.status(200).json(
            responBerhasil({
                data: result,
                message: "Berhasil mengambil semua bagian"
            })
        );
    } catch (error) {
        res.status(500).json(
            responGagal({
                code: "0002",
                message: error.message
            })
        );
    }
};

exports.getBagianByIdController = async (req, res) => {
    try {
        const result = await getBagianByIdService(req.params.id);

        res.status(200).json(
            responBerhasil({
                data: result,
                message: "Berhasil mengambil detail bagian"
            })
        );
    } catch (error) {
        res.status(500).json(
            responGagal({
                code: "0003",
                message: error.message
            })
        );
    }
};

exports.updateBagianController = async (req, res) => {
    try {
        const result = await updateBagianService(req.params.id, req.body);

        res.status(200).json(
            responBerhasil({
                data: result,
                message: "Berhasil update bagian"
            })
        );
    } catch (error) {
        res.status(500).json(
            responGagal({
                code: "0004",
                message: error.message
            })
        );
    }
};

exports.deleteBagianController = async (req, res) => {
    try {
        const result = await deleteBagianService(req.params.id);

        res.status(200).json(
            responBerhasil({
                data: result,
                message: "Berhasil hapus bagian"
            })
        );
    } catch (error) {
        res.status(500).json(
            responGagal({
                code: "0005",
                message: error.message
            })
        );
    }
};
