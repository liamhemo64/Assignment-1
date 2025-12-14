import express from "express";
const router = express.Router();
import commentController from "../controllers/commentController.ts";

router.post("/", commentController.create.bind(commentController));
router.put("/:id", commentController.update.bind(commentController));

export default router;
