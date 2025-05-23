const { m_kursus, r_kategori, m_episode } = require("../../models");

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

exports.getKursusByIdRepository = async (idKursus) => {
    return await m_kursus.findByPk(idKursus, {
        include : [
            {
                model : r_kategori,
                as : "r_kategori",
                attributes : ["rkategori_id", "rkategori_nama"]
            },
            {
                model : m_episode,
                as : "m_episode",
                attributes : ["mepisode_id", "mepisode_judul", "mepisode_deskripsi", "mepisode_url"]
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


