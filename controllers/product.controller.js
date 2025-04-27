const {Product} = require('../models/');

const getAllProducts = async (req, res) => {
    const products = await Product.findAll();
    res.status(200).json({
        status: "Successfully",
        messege: "berhasil mengambil data",
        data: products
    });
}

const createProduct = async (req, res ) => {
    const { name, price, quantity } = req.body.nama;
    if (!name || !price || !quantity) {
        res.status(401).json({
            status: "error",
            messege: "tidak berhasil menambahkan data",
            data: products
        });
    }
    const product = await Product.create({
        name,
        price,
        quantity
    });
    res.status(200).json({
        status: "success",
        messege: "berhasil menambahkan data",
        data: product
    });
}

const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findbyPk(id);
        if(!product) {
            return res.status(404).json({
                status: "error",
                messege: "product tidak ditemukan"
            })
        }
        res.status(200).json({
            status: "success",
            messege: "data product berhasil diambil",
            data: product
        });
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const {name, price, quantity } = req.body;
    if(!name || !price || !quantity) {
        return res.status(401).json({
            status: "error",
            messege: "tidak berhasil mengubah data",
        });
    }

    const product = await Product.findbyPk(id);
        if(!product) {
            return res.status(404).json({
                status: "error",
                messege: "product tidak ditemukan"
            })
        }
        
        product.name = name;
        product.price = price;
        product.quantity = quantity;
        await product.save();
        res.status(200).json({
            status: "success",
            messege: "data product berhasil diubah",
            data: product
        });
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findbyPk(id);
        if(!product) {
            return res.status(404).json({
                status: "error",
                messege: "product tidak ditemukan"
            })
        }
        await product.destroy();
        res.status(200).json({
            status: "success",
            messege: "data product berhasil dihapus",
            data: product
        });
}

module.exports = { 
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
 };