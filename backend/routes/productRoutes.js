const express = require("express");
const multer = require("multer");
const path = require("path");
const {
    getAllProducts,
    addProduct,
    removeProduct,
} = require("../controllers/productController");

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
    destination: './uploads/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage: storage });

// Routes
router.get('/allproducts', getAllProducts);
router.post('/addproduct', addProduct);
router.post('/removeproduct', removeProduct);

// API for uploading images
router.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${process.env.PORT || 4000}/images/${req.file.filename}`,
    });
});

module.exports = router;
