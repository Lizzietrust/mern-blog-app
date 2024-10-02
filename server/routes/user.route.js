import express from "express";
import {
  test,
  updateUser,
  deleteUser,
  signOut,
} from "../controllers/user.controller.js";
import { authUser } from "../utils/authUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", authUser, updateUser);
router.delete("/delete/:userId", authUser, deleteUser);
router.post("/signout", signOut);

export default router;
