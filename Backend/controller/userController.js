import UserModel from "../models/User.js";

// Create user
const Createuser = async (req, res) => {
  try {
    const { username, email, phone, isActive } = req.body;

    const NewUser = new userModel({
      username,
      email,
      phone,
      isActive,
    });

    await NewUser.save();

    res
      .status(200)
      .json({ Message: "User created successfully", success: true, NewUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "User not created", success: false });
  }
};

// Get all users
const GetUser = async (req, res) => {
  try {
    const user = await userModel.find();
    if (!user) {
      return res.status(404).json({ Message: "No user found!" });
    }
    res.status(200).json({ success: true, User: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "No user found!", success: false });
  }
};

// Update user by ID
const UpdateUser = async (req, res) => {
  try {
    // const { id: _id } = req.params;
    const UserID = req.params.id;
    const updatedUser = await UserModel.findByIdAndUpdate(UserID, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res
        .status(404)
        .json({ Message: "No user found with that ID!", success: false });
    }
    res.status(200).json({
      Message: "User updated successfully",
      success: true,
      updatedUser: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ Message: "Couldn't update. Found error!", success: false });
  }
};

export { Createuser, GetUser, UpdateUser };
