import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
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

export default mongoose.model("post", postSchema);
