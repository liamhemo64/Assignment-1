import { commentModel, type IComment } from "../models/commentModel.ts";
import genericController from "./genericController.ts";

class commentController extends genericController<IComment> {
  constructor() {
    super(commentModel);
  }
}

export default new commentController();