const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs-extra');
const busboy = require('connect-busboy');

const ArticleModel = mongoose.model('Article');
// const UserModel = mongoose.model('User');

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
})


router.post('/article/upload', async (req, res) => {
    try {

        req.pipe(req.busboy);
        req.busboy.on('file', (fieldname, file, filename) => {
            const fstream = fs.createWriteStream(`${__dirname}/../uploads/imgs/${filename}`);
            file.pipe(fstream);
        })

        res.json('postat').status('200');
    } catch (e) {

    }
})


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
});


//Login router
// router.post('/login', async (req, res) => {
//     try {
//         const user = await UserModel.findOne(user: username, password: password);
//
//         if (!user) {
//             res.json({err: 'oops, aningen har du skrivit fel lösenord eller användarnamn'}).status('404');
//         }
//         res.json(user).status('200');
//
//     } catch (err) {
//         res.json({ err }).status('500');
//     }
// })


module.exports = router;
