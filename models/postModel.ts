import mongoose from "mongoose";

interface IPost {
  id: Number,
  content: String,
  userCreatorID: Number
}

const postSchema = new mongoose.Schema<IPost>({
  id: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  userCreatorID: {
    type: Number,
    required: true,
  },
});

const postModel =  mongoose.model("post", postSchema);
export { postModel, type IPost };