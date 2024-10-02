import express from "express";
import { test, updateUser, deleteUser } from "../controllers/user.controller.js";
import { authUser } from "../utils/authUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", authUser, updateUser);
router.delete("/delete/:userId", authUser, deleteUser);

export default router;
