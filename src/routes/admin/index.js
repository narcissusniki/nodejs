const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.get(
  '/',
  controller.dashboard  //standAlone function
);


module.exports = router;