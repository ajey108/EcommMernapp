import express from 'express';
import { signUp } from '../controllers/authcontroller.js'

const router = express.Router();

// Route for user signup
router.post('/signup', signUp);



export default router;
