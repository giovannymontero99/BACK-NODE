import { Router } from "express";
import indexControllers from "../controllers/index.controllers.js";
import { query } from "../../services/db.js";
import { comparePassword, hashPassword } from "../../utils/hash/index.hash.js";
import { getToken } from "../../utils/token/index.token.js";

const router = Router();

// Endpoints
router.post('/auth',indexControllers.postValidateAuth);

router.get('/user',indexControllers.authenticateToken , indexControllers.getUser )


export default router;