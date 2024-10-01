import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { authUser } from "../utils/authUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", authUser, updateUser);

export default router;
