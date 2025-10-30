import express from "express";

import getAllUsers from "../controllers/users/getAllUsers.js";
import CreateUser from "../controllers/users/createUser.js";
import editUser from "../controllers/users/editUser.js";
import deleteUser from "../controllers/users/deleteUser.js";

import authMiddleware from "../middleware/authMiddeware.js";

const router = express.Router();

router.use(authMiddleware);

router
  .get("/all", getAllUsers)
  .post("/register", CreateUser) // malhash lazma al post deh
  .put("/edit")
  .delete("/delete", deleteUser);

export default router;
