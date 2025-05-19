const { createKategoriRepository, getAllKategoriRepository, editKategoriRepository, deleteKategoriRepository} = require("./kategori.repository");

exports.createKategoriService = async (data) => {
    return await createKategoriRepository(data);
}

exports.getAllKategoriService = async (data) => {
    return await getAllKategoriRepository();
}

exports.editKategoriService = async (id, data) => {
    if (!id) {
        throw new Error ('Masukkan ID terlebih dahulu!');
    }

    const updated = await editKategoriRepository(id, data);
    if (!updated) {
        throw new Error('Ada kesalahan di repostitory, atau data tidak ada yang terupdate');
    }
    
    return updated; 
}

exports.deleteKategoriService = async (id) => {
    const deleted = await deleteKategoriRepository(id)
    if(!deleted) {
        throw new Error(`Data dengan id ${id} tidak ditemukan!`);
    }

    return true;
}