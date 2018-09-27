const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs-extra');
const moment = require('moment');
const busboy = require('connect-busboy');
const formidable = require('formidable');

const ArticleModel = mongoose.model('Article');
// const UserModel = mongoose.model('User');
//
moment.locale('sv');

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

    const tmpData = {
        thumbnail: '',
        title: '',
        article: '',
        tag: '',
        published_at: moment().format('LL'),
        author_img: '',
        author: '',

    }
    try {

        req.pipe(req.busboy);
        req.busboy.on('file', (fieldname, file, filename) => {
            const path = `${__dirname}/../public/imgs`;
            filename = `${Date.now()}-${filename}`;
            const fstream = fs.createWriteStream(`${path}/${filename}`);
            tmpData[fieldname] = filename;
            fstream.on('error', err => {
                console.log(`fstream error: ${err}`);
                fstream.unpipe();
                file.read();
                throw err;
            });

            file.pipe(fstream);
            res.status('200');
        });

        req.busboy.on('field', (key, value, keyTruncated, valueTruncated) => {
            tmpData[key] = value;
        });

        req.busboy.on('finish', async () => {

            const { thumbnail, title, article: content, tag, published_at, author_img, author } = tmpData;

            const articleData = {
                title,
                article: content,
                tag,
                thumbnail,
                published_at,
                author: {
                    name: author,
                    img: author_img,
                }
            }


            const article = new ArticleModel(articleData);
            await article.save();

            res.status('200');
        })


    } catch (err) {
        res.json({ err }).status('500')
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
