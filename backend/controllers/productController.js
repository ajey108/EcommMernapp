import Product from '../models/Product.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const addProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        let id;
        if (products.length > 0) {
            const last_product = products[products.length - 1];
            id = last_product.id + 1;
        } else {
            id = 1;
        }

        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });

        await product.save();
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const removeProduct = async (req, res) => {
    try {
        await Product.findOneAndDelete({ id: req.body.id });
        res.json({
            success: true,
            id: req.body.id,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
