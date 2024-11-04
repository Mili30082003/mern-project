const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/register", async (req, res) => {
    const { email, password } = req.body;

    // Validar que email y password estén presentes
    if (!email || !password) {
        return res.status(400).json({ error: 'Email y password son requeridos' });
    }

    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send('User Registered Successfully');
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

// Ruta para el login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Comparar la contraseña en texto plano
        if (user.password === password) {
            res.json({ message: 'Login successful' });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
