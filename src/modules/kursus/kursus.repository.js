const { m_kursus, r_kategori } = require("../../models");

exports.createKursusRepository = async (payload) => {
    return await m_kursus.create(payload)
}

exports.getAllKursusRepository = async () => {
    return await m_kursus.findAll({
        include : [
            {
                model : r_kategori,
                as : "r_kategori",
                attributes : ["rkategori_id", "rkategori_nama"]
            }
        ]
    });
}

// exports.editKursusRepository = async (id, payload) => {
//     const [updated] = await m_kursus.update(payload, {
//         where: { rkategori_id: id },
//     });

//     return updated > 0;
// }

// exports.deleteKategoriRepository = async (id) => {
//     const deleted = await r_kategori.destroy({
//         where : { rkategori_id : id }
//     })

//     return deleted> 0
// }


