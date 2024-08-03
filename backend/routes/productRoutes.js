import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fetchUser from '../middleware/authmiddleware.js'
import { getAllProducts, addProduct, removeProduct, newCollection, popularinMobiles, addtoCart } from '../controllers/productController.js';

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
router.get('/popularinmobiles', popularinMobiles);
router.post('/addtocart', fetchUser, addtoCart);




// API for uploading images
router.post('/upload', upload.single('product'), (req, res) => {
    if (req.file) {
        res.json({
            success: 1,
            image_url: `http://localhost:${process.env.PORT || 4000}/images/${req.file.filename}`,
        });
    } else {
        res.status(400).json({
            success: 0,
            message: 'File upload failed'
        });
    }
});

export default router;
