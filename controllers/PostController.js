import PostModel from "../models/PostModel.js";
import UserModel from "../models/UserModel.js";
import mongoose from "mongoose";

export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getPost = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await PostModel.findById(postId);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(postId);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post Updated");
    } else {
      res.status(403).json("Action forbidden!");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(postId);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("Post Deleted!");
    } else {
      res.status(403).json("Action forbidden!");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const reactToPost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(postId);
    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post Liked.");
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post Unliked.");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTimelinePost = async (req, res) => {
  const userId = req.params.id;

  try {
    const currentUserPost = await PostModel.find({ userId });
    const followingPosts = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);
    res
      .status(200)
      .json(
        currentUserPost
          .concat(...followingPosts[0].followingPosts)
          .sort((a, b) => b.createdAt - a.createdAt)
      );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
