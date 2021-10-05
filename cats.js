const fs = require('fs');
const catsData = require('./cats.json');
console.log(catsData);
const cats = catsData.slice();

function add(name) {
    cats.push(name);
    fs.writeFile('./cats.json', JSON.stringify(cats), (err) => {
        if (err) {
            return console.log('some error' + err);
        }

        console.log('sucessfull write');
    })
};

function getAll() {
    return cats.slice();
};

module.exports = {
    add,
    getAll,
}