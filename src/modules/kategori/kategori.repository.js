const { r_kategori } = require("../../models");
const m_kursus = require("../../models/m_kursus");

exports.createKategoriRepository = async (payload) => {
    return await r_kategori.create(payload)
}

exports.getAllKategoriRepository = async () => {
    return await r_kategori.findAll({
        include : [
            {
                model : m_kursus,
                as : 'kursus',
                attributes : ['mkursus_id', 'mkursus_judul']
            }
        ]
    });
}

exports.editKategoriRepository = async (id, payload) => {
    const [updated] = await r_kategori.update(payload, {
        where: { rkategori_id: id },
    });

    return updated > 0;
}

exports.deleteKategoriRepository = async (id) => {
    const deleted = await r_kategori.destroy({
        where : { rkategori_id : id }
    })

    return deleted> 0
}


