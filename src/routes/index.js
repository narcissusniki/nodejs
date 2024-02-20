//all routes management
const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const userRouter = require('./user');
const adminRouter = require('./admin');
const {isloggin, isAdmin} = require('./../middlewares/auth');
const  errors = require('./../middlewares/error');




router.use('/auth', authRouter);
router.use('/user', isloggin,  userRouter);
router.use('/admin', isloggin, isAdmin,  adminRouter);

router.use(errors);

module.exports = router;