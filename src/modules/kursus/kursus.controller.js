const { responBerhasil, responGagal } = require("../../middleware/logger_helper");
const { getAllKursusService, createKategoriService, editKursusService, getKursusById, getKursusByIdService } = require("./kursus.service");

exports.createKursusController = async (req, res) => {
    
    const payloadBody = req.body;
    if(req.file){
        payloadBody.mkursus_thumbnail = `/uploads/${req.file.filename}`
    }

    try {
        const response = await createKategoriService(payloadBody);
        res.status(200).json(
                responBerhasil({
                    data : response, 
                    message : "Kursus berhasil dibuat!"
            }))
    } catch (error) {
        res.status(500).json(
                responGagal({
                    code: "0001",
                    message: `${error.message}`,
                })
        );
    }
}

exports.getAllKursusController = async (req, res) => {
    try {
        const response = await getAllKursusService()
        res.status(200).json(
            responBerhasil({
                data : response,
                message : "Berhasil mengambil semua krusus"
            })
        )
    } catch (error) {
        res.status(500).json(
            responGagal({
                code : "0001",
                message : `Ada yang salah nih : ${error}`
            })
        )
    }
}

exports.editKursusController = async (req, res) => {
    const paramsId = req.params.idKursus;
    const payloadBody = req.body;

    try {
        const response = await editKursusService(paramsId, payloadBody);
        res.status(200).json(
            responBerhasil({
                data : response,
                message : "Data berhasil diedit!"

            })
        )
    } catch (error) {   
        res.status(500).json(
            responGagal({
                code : "0001",
                message : `Ada yang salah nih : ${error}`
        }));
    }
}

exports.getKursusByIdController = async (req, res) => {
    const paramsId = await req.params.idKursus
    
    try {
        const response = await getKursusByIdService(paramsId);
        res.status(200).json(
            responBerhasil({
                data : response,
                message : "Berhasil mengambil semua krusus"
            })
        )
    } catch (error) {
        res.status(500).json(
            responGagal({
                code : "0001",
                message : `Ada yang salah nih : ${error}`
            })
        )
    }
}


// exports.deleteKategoriController = async (req, res) => {
//     const paramsId = req.params.idKategori;

//     try {
//         const response = await deleteKategoriService(paramsId);
//         res.status(200).json(
//             responBerhasil({
//                 data : response,
//                 message : "Data berhasil dihapus!"

//             })
//         )
//     } catch (error) {   
//         res.status(500).json(
//             responGagal({
//                 code : "0001",
//                 message : `Ada yang salah nih : ${error}`
//         }));
//     }
// }
