const express = require('express');
const app = express();
const port = 5000;

const checkCatIdMiddleware = require('./middlewares/middleware');
const cats = [];



app.get('/', (req, res) => {
    res.json(['Navcho', 'Garry', 'Mishi']);
});

app.get('/download', (req, res) => {
    res.attachment('./views/home.html');
    res.send('File has been sent');

    res.sendFile(__dirname + '/views/some.pdf');

})
app.get('/cats', (req, res) => {
    res.send('some cute cats');
    res.redirect('/');
});


app.get('/cats/:catId?', checkCatIdMiddleware, (req, res) => {
    if (!/\d/.test(req.params.catId)) {
        return res.status(404).send('You need to specify cat id number');
    };
    res.send(`You are looking at profile of ${req.params.catId}`);
})

app.post('/cats', (req, res) => {
    console.log('create cat');
    res.status(201).send('cat created!')
});




app.put('/cats/:id', (req, res) => {
    console.log('update cat');
});


app.listen(port, () => console.log(`this server is running on port ${port}`));