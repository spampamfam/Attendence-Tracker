import express from "express";

import loginAuth from "../controllers/auth/loginAuth.js";
import refresh from "../controllers/auth/refresh.js";
import logout from "../controllers/auth/logout.js";
import validateUser from "../controllers/auth/validateUser.js";
import createUser from "../controllers/users/createUser.js";

const router = express.Router();

router.post("/login", loginAuth);
router.post("/signup", createUser);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.get("/me", validateUser);

export default router;
