import Comment from "../models/commentModel.ts";
import genericController from "./genericController.ts";

const commentController = new genericController(Comment);

export default commentController;
