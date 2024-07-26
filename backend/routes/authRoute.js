import express from 'express';
import { login, signUp } from '../controllers/authcontroller.js'

const router = express.Router();

// Route for user signup
router.post('/signup', signUp);
router.post('/login',login);



export default router;
