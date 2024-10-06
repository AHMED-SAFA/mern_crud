import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timeseries: true }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
