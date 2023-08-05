import UserModel from "../models/userModel";

export const registerUser = async (req, res) => {
  const { userName, password, firstName, lastName } = req.body;

  const newUser = new UserModel({ userName, password, firstName, lastName });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
