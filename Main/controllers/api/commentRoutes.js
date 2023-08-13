const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all comments
router.get('/', async (req, res) => {
  try {
      const commentData = await Comment.findAll();
      res.status(200).json(commentData);
  } catch (err) {
      res.status(500).json(err);
  }
});

// read single comment 
router.get('/:id', async (req, res) => {
  try {
      const commentData = await Comment.findByPk(req.params.id);

      if (!commentData) {
          res.status(404).json({ message: 'No comment found with that id!' });
          return;
      }

      res.status(200).json(commentData);
  } catch (err) {
      res.status(500).json(err);
  }
});

// create comment
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
      res.status(200).json(newComment);
  } catch (err) {
      res.status(400).json(err);
  }
});

// update comment
router.put('/:id', async (req, res) => {
  try {
      const commentData = await Comment.findByPk(req.params.id);
      commentData.set({
        ...req.body,
        user_id: req.session.user_id,
      });
      await commentData.save();
      res.status(200).json(commentData);
  } catch (err) {
      res.status(400).json(err);
  }
})

// delete comment
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No comment found with that id!' });
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
