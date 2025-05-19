const m_user = require("./m_user");
const r_kategori = require("./r_kategori");
const m_kursus = require("./m_kursus")

r_kategori.hasMany(m_kursus, {
    foreignKey : 'rkategori_id',
    sourceKey : 'rkategori_id',
    as : "m_kursus"
})

m_kursus.belongsTo(r_kategori, {
    foreignKey: "rkategori_id",
    sourceKey: "rkategori_id",
    as: "r_kategori",
});


module.exports = { m_user, r_kategori, m_kursus };