import mongoose from "mongoose";

interface IPost {
  _id: mongoose.Types.ObjectId;
  content: string;
  userCreatorID: number;
}

const postSchema = new mongoose.Schema<IPost>({
  content: {
    type: String,
    required: true,
  },
  userCreatorID: {
    type: Number,
    required: true,
  },
});

const postModel = mongoose.model("post", postSchema);
export { postModel, type IPost };