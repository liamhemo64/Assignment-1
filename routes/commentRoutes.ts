import express from "express";
const router = express.Router();
import commentController from "../controllers/commentController.ts";

router.post("/", commentController.create.bind(commentController));

export default router;
