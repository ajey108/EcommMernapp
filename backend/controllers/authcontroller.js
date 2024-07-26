import User from "../models/usermodel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signUp = async (req, res) => {
    try {
        // Check if user already exists
        let check = await User.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: false, errors: "Existing user found with the same email" });
        }

        // Create empty cart
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        // Create a new user
        const user = new User({
            name: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            cartData: cart,
        });

        // Save user in DB
        await user.save();

        const data = {
            user: {
                id: user.id
            }
        };

        // Generate token
        const token = jwt.sign(data, process.env.JWT_SECRET || 'secret_ecom', { expiresIn: '2h' });
        res.json({ success: true, token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ success: false, error: "User not found" });
        }

        const passCompare = await bcrypt.compare(req.body.password, user.password);
        if (!passCompare) {
            return res.status(400).json({ success: false, error: "Invalid password" });
        }

        const data = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(data, process.env.JWT_SECRET || 'secret_ecom', { expiresIn: '2h' });
        res.json({ success: true, token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
