import { Router } from "express";
import {register,login, logout, profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registeSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router()

router.post('/register', validateSchema(registeSchema), register);

router.post('/login', validateSchema(loginSchema), login);

router.post('/logout', logout);

router.get('/profile', authRequired, profile);


export default router