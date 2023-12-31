const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

// get all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// read single post
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (!postData) {
      res.status(404).json({ message: "No post found with that id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create post
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update post
router.put("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    postData.set({
      ...req.body,
      user_id: req.session.user_id,
    });
    await postData.save();
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No blog post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
