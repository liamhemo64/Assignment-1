import express from "express";
const router = express.Router();
import postController from "../controllers/postController.ts";

router.post("/", postController.create.bind(postController));
router.put("/:_id", postController.update.bind(postController));

export default router;