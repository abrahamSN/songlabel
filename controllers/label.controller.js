const labelModel = require('../models/label.model');

const labelJson = require('../dummy/labels.json');

class LabelController {
    index(req, res) {
        const labels = labelJson;
        labels.map(label => {
            const date = new Date(label.since);
            const options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            label.sinceLocale = date.toLocaleDateString("id-ID", options);
        });

        res.render('label/index', { labelData: labels });
    }

    detail(req, res) {
        
        res.render('label/detail');
    }
}

module.exports = new LabelController();