
const users = [
    { id: 1, nama: "Andi Saputra", asal_kota: "Jakarta" },
    { id: 2, nama: "Budi Santoso", asal_kota: "Surabaya" },
    { id: 3, nama: "Citra Lestari", asal_kota: "Bandung" },
    { id: 4, nama: "Dian Pratama", asal_kota: "Yogyakarta" },
    { id: 5, nama: "Eka Wulandari", asal_kota: "Semarang" },
    { id: 6, nama: "Fajar Hidayat", asal_kota: "Medan" },
    { id: 7, nama: "Gita Ramadhani", asal_kota: "Palembang" },
    { id: 8, nama: "Hendra Wijaya", asal_kota: "Makassar" },
    { id: 9, nama: "Indah Permata", asal_kota: "Denpasar" },
    { id: 10, nama: "Joko Susilo", asal_kota: "Malang" },
    { id: 11, nama: "Kiki Amalia", asal_kota: "Pekanbaru" },
    { id: 12, nama: "Lina Marpaung", asal_kota: "Padang" },
    { id: 13, nama: "Miko Hardian", asal_kota: "Banjarmasin" },
    { id: 14, nama: "Nina Septiani", asal_kota: "Balikpapan" },
    { id: 15, nama: "Oka Putra", asal_kota: "Mataram" },
    { id: 16, nama: "Putri Melati", asal_kota: "Pontianak" },
    { id: 17, nama: "Qori Azzahra", asal_kota: "Jayapura" },
    { id: 18, nama: "Rian Nugraha", asal_kota: "Batam" },
    { id: 19, nama: "Siska Amelia", asal_kota: "Bogor" },
    { id: 20, nama: "Teguh Prakoso", asal_kota: "Cirebon" }
  ];

const getAllUsers = async (req, res) => {
    res.status(200).json({
        status: "Successfully",
        messege: "berhasil mengambil data",
        data: users
    });
};

const createUsers = async (req, res) => {
    const getAllUsers = async (req, res) => {
        res.status(200).json({
            status: "Successfully",
            messege: "berhasil mengambil data",
            data: users
        });
    };
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === Number(id));
    if(!user) {
        return res.status(404).json({
            status: "gagal",
            messege: "user tidak ditemukan"
        })
    }
    const { nama } = req.body;
    user.nama = nama;

    res.status(200).json({
        status: "berhasil",
        messege: "data user berhasil diambil",
        data: user
    });
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === Number(id));
    if(!user) {
        return res.status(404).json({
            status: "gagal",
            messege: "user tidak ditemukan"
        })
    }
    const { nama } = req.body;
    user.nama = nama;

    res.status(200).json({
        status: "berhasil",
        messege: "data user berhasil diubah",
        data: user
    });
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === Number(id));
    if(!user) {
        return res.status(404).json({
            status: "error",
            messege: "User not found"
        })
    }
    const index = users.indexOf(user);
    users.splice(index, 1);
    res.status(200).json({
        status: "success",
        messege: "Successfully delete user",
        dataL: id
    });
}
module.exports = {
    getAllUsers,
    createUsers,
    getUserById, 
    updateUser,
    deleteUser
}
