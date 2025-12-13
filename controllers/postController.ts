import Post from "../models/postModel.ts";
import genericController from "./genericController.ts";

const postController = new genericController(Post);

export default postController;
