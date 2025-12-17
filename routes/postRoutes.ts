import express from "express";
const router = express.Router();
import postController from "../controllers/postController.ts";

router.post("/", postController.create.bind(postController));

export default router;