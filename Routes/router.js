import { Router } from "express";
import { addMessage, getList, getMessageForm } from "../Controllers/controller.js";

const router = Router();

router.get("/", getList);
router.get("/new", getMessageForm);
router.post("/new", addMessage);

export default router;