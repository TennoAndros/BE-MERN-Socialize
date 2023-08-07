import UserModel from "../models/UserModel.js";

export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json({ message: "User doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export const followUser = async (req, res) => {
  const id = req.params.id;

  const { currentUserId } = req.body;
  if (currentUserId === id) {
    res.status(403).json({ message: "Action forbidden" });
  } else {
    try {
      const followUser = UserModel.findById(followUser);
      const followingUser = UserModel.findById(currentUserId);
      if (!followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $push: { followers: currentUserId } });
        await followingUser.updateOne({ $push: { following: id } });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
