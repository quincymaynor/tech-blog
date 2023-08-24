const router = require('express').Router();
const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes');
const characterRoutes = require('./characterRoutes');
const portraitRoutes = require('./portraitRoutes');

router.use('/users', userRoutes);
router.use('/profile', profileRoutes);
router.use('/characters', characterRoutes);
router.use('/portrait', portraitRoutes);

module.exports = router;
