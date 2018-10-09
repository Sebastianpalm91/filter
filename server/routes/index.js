const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs-extra');
const moment = require('moment');
const busboy = require('connect-busboy');
const superagent = require('superagent');

const ArticleModel = mongoose.model('Article');
const ArticleSubjectsModel = mongoose.model('articlesubject');
const ArticleTypesModel = mongoose.model('articletypes');

const IMG_OPTIM_USERNAME = 'jrvdhpbpnd';
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
});

router.get('/admin/articles/subjects', async (req, res) => {
    try {
        const subjects = await ArticleSubjectsModel.find();

        res.json(subjects).status('200');

    } catch (err) {
        res.json({ err }).status(500)
    }
});

router.get('/admin/articles/types/', async (req, res) => {
    try {
        const types = await ArticleTypesModel.find();

        res.json(types).status('200');

    } catch (err) {
        res.json({ err }).status(500)
    }
});

router.post('/articles/upload', async (req, res) => {

    const tmpDataHolder = {
        thumbnail: '',
        title: '',
        article: '',
        tag: '',
        published_at: moment().format('LL'),
        author_img: '',
        author: '',
        illustrations: '',
        preamble: '',
        magazineNumber: 0,
    }

    try {

        req.pipe(req.busboy);
        req.busboy.on('file', (fieldname, file, filename) => {

            const path = `${__dirname}/../public/imgs`;
            filename = `${Date.now()}-${filename}`;
            const pathToImg = `${path}/${filename}`;

            const fstream = fs.createWriteStream(pathToImg);

            tmpDataHolder[fieldname] = filename;

            fstream.on('error', err => {
                console.log(`fstream error: ${err}`);
                fstream.unpipe();
                file.read();
                throw err;
            });

            file.pipe(fstream);

            fstream.on('finish', () => {
                superagent.post(`https://im2.io/${IMG_OPTIM_USERNAME}/full,quality=low`)
                    .attach('file', `public/imgs/${filename}`)
                    .then(res => {
                        const imgData = res.body;

                        fs.writeFile(`public/imgs/${filename}`, imgData);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                });


            res.status('200');
        });

        req.busboy.on('field', (key, value, keyTruncated, valueTruncated) => {
            tmpDataHolder[key] = value;
        });

        req.busboy.on('finish', async () => {

            const {
                magazineNumber: number,
                author,
                author_img
            } = tmpDataHolder

            const articleData = {
                ...tmpDataHolder,
                magazine: {
                    number,
                },
                author: {
                    name: author,
                    img: author_img,
                },
            }

            await (new ArticleModel(articleData)).save();

            res.status('200');
        });


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
