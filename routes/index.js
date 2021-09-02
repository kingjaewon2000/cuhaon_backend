const express = require('express');
const router = express.Router();

const controllers = require('../controllers/index.ctrl');

const { isLoggedIn, isNotLoggedIn } = require('../controllers/middlewares');

const authRouter = require('./auth');
const adminRouter = require('./admin');
const forumRouter = require('./forum');

router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// routes 순서 바꾸기 x
router.get('/', controllers.indexPage);
router.get('/wargame', controllers.indexWargamePage);
router.get('/wargame/create', isLoggedIn, controllers.createWargamePage);
router.post('/wargame/create', isLoggedIn, controllers.createWargame);
router.post(
  '/wargame/update/:wargame_id',
  isLoggedIn,
  controllers.updateWargame,
);
router.post(
  '/wargame/update/success/:wargame_id',
  isLoggedIn,
  controllers.updateSubmitWargame,
);
router.get('/wargame/:wargame_id', controllers.viewWargamePage);
router.post(
  '/wargame/delete/:wargame_id',
  isLoggedIn,
  controllers.deleteWargame,
);
router.post(
  '/wargame/checkflag/:wargame_id',
  isLoggedIn,
  controllers.checkFlagWargame,
);
router.post(
  '/wargame/:wargame_id/create/comment',
  isLoggedIn,
  controllers.createCommentWargame,
);
router.use('/auth', authRouter);
router.use('/admin', adminRouter);
router.use('/forum', forumRouter);

module.exports = router;
