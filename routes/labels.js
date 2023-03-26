var express = require('express');
var router = express.Router();

const LabelController = require('../controllers/label.controller');

router.get('/', LabelController.index);
router.get('/detail', LabelController.detail);

module.exports = router;
