const router = require('express').Router();
// THIS WILL PROBABLY WANT A PORTRAIT MODEL TO AFFECT SPECIFICALLY??
const { Character } = require('../../models');

// THIS HAS THE CHARACTER CRUD OPERATIONS, SHOULD MAKE A GOOD TEMPLATE FOR THE PORTRAITS

// get portrait page
router.get('/', async (req, res) => {
  try {
    const characterData = await Character.findAll({
      include: [
        {
          model: Character,
          attributes: ['name', 'portrait_url'],
        },
      ],
    });

    const characters = characterData.map((character) => character.get({ plain: true }));

    res.render('portrait', { 
      ...characters, 
      // logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// read portrait (add withAuth later?)
router.get('/:id', async (req, res) => {
  try {
      const characterData = await Character.findByPk(req.params.id,
        {
          include: [
            {
              model: Character,
              attributes: ['portrait_url'],
            }
          ],
        }
      );

      if (!characterData) {
          res.status(404).json({ message: 'No character found with that id!' });
          return;
      }

      res.status(200).json(characterData);
  } catch (err) {
      res.status(500).json(err);
  }
});

// update character (add withAuth later?)
router.put('/:id', async (req, res) => {
  try {
      const characterData = await Character.findByPk(req.params.idreq.params.id,
        {
          include: [
            {
              model: Character,
              attributes: ['portrait_url'],
            }
          ],
        }
      );
      characterData.set({
        ...req.body,
        // user_id: req.session.user_id,
      });
      await characterData.save();
      res.status(200).json(characterData);
  } catch (err) {
      res.status(400).json(err);
  }
})


module.exports = router;