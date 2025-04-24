const products = [
    { id: 1, nama: "Indomie", harga: 3000 },
    { id: 2, nama: "Susu", harga: 5000 },
    { id: 3, nama: "Kopi", harga: 10000 },
    { id: 4, nama: "Gula", harga: 2000 },
    { id: 5, nama: "Teh", harga: 4000 },
    { id: 6, nama: "Mie Sedap", harga: 2500 },
    { id: 7, nama: "Kopi Luwak", harga: 15000 },
    { id: 8, nama: "Sarden", harga: 6000 },
    { id: 9, nama: "Kentang", harga: 8000 },
    { id: 10, nama: "Beras", harga: 10000 },
];

const getAllProducts = (req, res) => {
    res.status(200).json({
        status: "Successfully",
        messege: "berhasil mengambil data",
        data: products
    });
}

const createProduct = async (req, res ) => {
    const nama = req.body.nama;
    const harga = req.body.harga;
    products.push({id: products.length + 1, nama: nama, harga: harga});
    res.status(201).json({
        status: "berhasil menambahkan data",
        messege: "berhasil menambahkan data",
        data: products
    });
}

const getProductById = async (req, res) => {
    const { id } = req.params;
        const product = products.find((product) => product.id === Number(id));
        if(!product) {
            return res.status(404).json({
                status: "gagal",
                messege: "product tidak ditemukan"
            })
        }
        const { nama } = req.body;
        product.nama = nama;

        res.status(200).json({
            status: "berhasil",
            messege: "data product berhasil diambil",
            data: product
        });
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id === Number(id));
    if(!product) {
        return res.status(404).json({
            status: "gagal",
            messege: "product tidak ditemukan"
        });
    }
        const { nama } = req.body;
        product.nama = nama;

        res.status(200).json({
            status: "berhasil",
            messege: "data product berhasil diubah",
            data: product
        });
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
        const product = products.find((product) => product.id === Number(id));
        if(!product) {
            return res.status(404).json({
                status: "error",
                messege: "Product not found"
            })
        }
        const index = products.indexOf(product);
        products.splice(index, 1);
        res.status(200).json({
            status: "success",
            messege: "Successfully delete product",
            dataL: id
        });
}

module.exports = { 
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
 };