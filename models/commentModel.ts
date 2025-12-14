import mongoose from "mongoose";

interface IComment {
  id: Number,
  description: String,
  relatedPostID: Number,
  userCreatorID: Number
}

const commentSchema = new mongoose.Schema<IComment>({
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

const commentModel = mongoose.model("comment", commentSchema);

export { commentModel , type IComment };
