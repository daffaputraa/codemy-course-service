const m_user = require("./m_user");
const r_kategori = require("./r_kategori");
const m_kursus = require("./m_kursus");
const r_user_kursus = require("./r_user_kursus");


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

m_user.belongsToMany(m_kursus, {
    through: r_user_kursus,
    foreignKey: "muser_id",
    otherKey: "mkursus_id",
    as: "akses_kursus",
});

m_kursus.belongsToMany(m_user, {
    through: r_user_kursus,
    foreignKey : "mkursus_id",
    otherKey : "muser_id",
    as : "user_pemilik"
});

module.exports = { m_user, r_kategori, m_kursus };