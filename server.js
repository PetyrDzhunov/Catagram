const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

const checkCatIdMiddleware = require('./middlewares/middleware');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const cats = require('./cats');

app.use('/static', express.static('public'));
app.use(loggerMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('hbs', handlebars({
    extname: 'hbs'
})); // engine -> handlebars
app.set('view engine', 'hbs'); // izpolzvai view-engine-> handlebars


app.get('/cats', (req, res) => {
    res.render('cats', { cats: cats.getAll() });
});

app.get('/download', (req, res) => {
    res.attachment('./public/index.html');
    res.end();
})

app.get('/cats/:catId?', checkCatIdMiddleware, (req, res) => {
    if (!/\d/.test(req.params.catId)) {
        return res.status(404).send('You need to specify cat id number');
    };
    res.send(`You are looking at profile of ${req.params.catId}`);
})

app.post('/cats', (req, res) => {
    console.log('create cat');
    let catName = req.body.cat;
    cats.add(catName);
    res.redirect('/cats')
});




app.put('/cats/:id', (req, res) => {
    console.log('update cat');
});


app.listen(port, () => console.log(`this server is running on port ${port}`));