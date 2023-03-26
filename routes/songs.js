const express = require('express');
const router = express.Router();
const SongController = require('../controllers/song.controller');

router.get('/', SongController.index);
router.get('/add', SongController.add);
router.post('/add', SongController.create);
router.get('/:id', SongController.show);
router.get('/:id/edit', SongController.edit);
router.post('/:id/edit', SongController.update);
router.get('/:id/delete', SongController.delete);

module.exports = router;
