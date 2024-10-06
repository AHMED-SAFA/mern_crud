import userModel from "../models/User.js";

const Createuser = async (req, res) => {
  // Validate request body
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
    res
      .status(500)
      .json({ Message: "User not created", success: false });
  }
};

export { Createuser };
