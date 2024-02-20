const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.get(
  '/',
  controller.dashboard  //standAlone function
);

router.get(
  '/me',
  controller.me
);

module.exports = router;