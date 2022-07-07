import express from 'express';
const router = express.Router();
import AuthController from "../controllers/auth.js";

router.post('/login', new AuthController().signin)

export default router;
