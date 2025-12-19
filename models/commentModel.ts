import mongoose from "mongoose";

interface IComment {
  _id: Number,
  description: String,
  relatedPostID: Number,
  userCreatorID: Number
}

const commentSchema = new mongoose.Schema<IComment>({
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
