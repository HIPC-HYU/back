import express, { Router } from 'express';
import * as bcrypt from 'bcrypt';

const router: Router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const userData = req.body;
        const enteredPassword = userData.password;

        if (!enteredPassword) {
            return res.status(400).json({"error": "Password is required"});
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(enteredPassword, saltRounds);
        userData.password = hashedPassword;

        // db save

        res.status(201).json(userData);
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({"error": "Internal server error"});
    }
});

router.post('/signin', async (req, res) => {
    try {
        const userData = req.body;
        const enteredPassword = userData.password;

        if (!enteredPassword) {
            return res.status(400).json({"error": "Password is required"});
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(enteredPassword, saltRounds);
        userData.password = hashedPassword;

        // check db

        res.status(201).json(userData);
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({"error": "Internal server error"});
    }
});

router.post('/signout', (req, res) => {
    res.json({ result: "ok" });
});

export default router;