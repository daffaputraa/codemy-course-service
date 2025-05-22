// const { createKategoriRepository, getAllKategoriRepository, editKategoriRepository, deleteKategoriRepository} = require("./kategori.repository");
const { getAllKursusRepository, createKursusRepository, editKursusRepository } = require("./kursus.repository");

exports.createKategoriService = async (data) => {
    return await createKursusRepository(data);
}

exports.getAllKursusService = async (data) => {
    return await getAllKursusRepository();
}

exports.editKursusService = async (id, data) => {
    if (!id) {
        throw new Error ('Masukkan ID terlebih dahulu!');
    }

    const updated = await editKursusRepository(id, data);
    if (!updated) {
        throw new Error('Ada kesalahan di repostitory, atau data tidak ada yang terupdate');
    }
    return updated; 
}

// exports.deleteKategoriService = async (id) => {
//     const deleted = await deleteKategoriRepository(id)
//     if(!deleted) {
//         throw new Error(`Data dengan id ${id} tidak ditemukan!`);
//     }

//     return true;
// }