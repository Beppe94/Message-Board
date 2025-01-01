import { Router } from "express";
import { getList, newMessage } from "../Controllers/controller.js";

const router = Router();

router.get("/", getList);
router.get("/new", newMessage);

export default router;