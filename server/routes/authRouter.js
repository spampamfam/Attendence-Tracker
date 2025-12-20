import express from "express";

import loginAuth from "../controllers/auth/loginAuth.js";
import refresh from "../controllers/auth/refresh.js";
import logout from "../controllers/auth/logout.js";
import fetchUserData from "../controllers/auth/fetchUserData.js";
import createUser from "../controllers/users/createUser.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/login", loginAuth);
router.post("/logout", logout);
router.get("/me", fetchUserData);
// router.post("/refresh", refresh);

export default router;
