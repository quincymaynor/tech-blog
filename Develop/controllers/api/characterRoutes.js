const router = require('express').Router();
const { Character } = require('../../models');
const withAuth = require('../../utils/auth');

// for character crud

// read character (add withAuth later?)
router.get('/:id', async (req, res) => {
  try {
      const characterData = await Character.findByPk(req.params.id);

      if (!characterData) {
          res.status(404).json({ message: 'No character found with that id!' });
          return;
      }

      res.status(200).json(characterData);
  } catch (err) {
      res.status(500).json(err);
  }
});
// alternate read character that doesn't work for some reason
// router.get('/:id', async (req, res) => {
//   try {
//     const characterData = await Character.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const character = characterData.get({ plain: true });

//     res.render('character', {
//       ...character,
//       // logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// create character (add withAuth later?)
router.post('/', async (req, res) => {
  try {
    const newCharacter = await Character.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCharacter);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// update character (add withAuth later?)
router.put('/:id', async (req, res) => {
  try {
      const characterData = await Character.findByPk(req.params.id);
      characterData.set({
        ...req.body,
        user_id: req.session.user_id,
      });
      await characterData.save();
      res.status(200).json(characterData);
  } catch (err) {
      res.status(400).json(err);
  }
})

// delete character (add withAuth later?)
router.delete('/:id', async (req, res) => {
  try {
    const characterData = await Character.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!characterData) {
      res.status(404).json({ message: 'No character found with this id!' });
      return;
    }

    res.status(200).json(characterData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;