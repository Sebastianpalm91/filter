const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ArticleModel = mongoose.model('Article');

router.get('/articles/:title', async (req, res) => {
    try {
        const title = req.params.title.replace('-', ' ');

        const article = await ArticleModel.findOne({ title });

        if (!article) {
            res.json({ err: 'ingen artikel hittad' }).status('404');
        }

        res.json(article).status('200');
    } catch (err) {
        res.json({ err }).status('500');
    }
});


router.get('/articles', async (req, res) => {
    try {
        const articles = await ArticleModel.find();

        if (!articles) {
            res.json({ err: 'inga artiklar hittade' }).status('404');
        }

        res.json(articles).status('200');

    } catch (err) {
        res.json({ err }).status('500');
    }
})

module.exports = router;
