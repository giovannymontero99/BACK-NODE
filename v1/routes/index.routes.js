import { Router } from "express";
import { getToken } from "../../utils/token/getToken.js";
import indexControllers from "../controllers/index.controllers.js";

const router = Router();

// Endpoints
router.post('/auth', indexControllers.postValidateAuth );

router.get('/user', indexControllers.getUser )


export default router;