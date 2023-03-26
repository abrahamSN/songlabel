class SongController {
    index(req, res) {
        res.send('SongController.index');
    }
    add(req, res) {
        res.send('SongController.add');
    }
    create(req, res) {
        res.send('SongController.create');
    }
    show(req, res) {
        res.send('SongController.show');
    }
    edit(req, res) {
        res.send('SongController.edit');
    }
    update(req, res) {
        res.send('SongController.update');
    }
    delete(req, res) {
        res.send('SongController.delete');
    }
}

module.exports = new SongController();
