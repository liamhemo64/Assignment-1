import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  relatedPostID: {
    type: Number,
    required: true,
  },
  userCreatorID: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("comment", commentSchema);
