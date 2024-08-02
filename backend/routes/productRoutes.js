import express from 'express';
import multer from 'multer';
import path from 'path';
import { getAllProducts, addProduct, removeProduct,newCollection, popularinMobiles } from '../controllers/productController.js';
import { fileURLToPath } from 'url';

// Create a __dirname variable to use with ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
    destination: './Uploads/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage: storage });

// Routes
router.get('/allproducts', getAllProducts);
router.post('/addproduct', addProduct);
router.post('/removeproduct', removeProduct);
router.get('/newcollection', newCollection);
router.get('/popularinmobiles', popularinMobiles);//popular in mobiles




// API for uploading images
router.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${process.env.PORT || 4000}/images/${req.file.filename}`,
    });
});

export default router;


