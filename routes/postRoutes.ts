import express from "express";
const router = express.Router();
import postController from "../controllers/postController.ts";

console.log("✅ PostRoutes file is loaded!"); // הדפסה בעליית השרת

router.post("/", postController.create.bind(postController));

export default router;
