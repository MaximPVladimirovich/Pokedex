const express = require(`express`);
const methodoverride = require('method-override');
const pokemons = require(`./models/pokemon`)
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(methodoverride('_method'));
app.use(express.json());
app.use((req, res, next) => {
    next()
});
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + `/public`));


// Lists pokemon from model
app.get(`/index`, (req, res) => {
    res.render(`index.ejs`,
        { pokemons })
})
// Add news poke to index
app.post(`/index`, (req, res) => {
    console.log(req.body);
    pokemons.push(req.body)
    res.redirect(`/index`)
})
// Routes to create page
app.get(`/index/create`, (req, res) => {
    res.render(`create.ejs`)
})

// edit route
app.put(`/index/:id`, (req, res) => {
    pokemons[req.params.id] = req.body;
    res.redirect(`/index`)
})

app.delete(`/index/:id`, (req, res) => {
    pokemons.splice(req.params.id, 1)
    res.redirect(`/index`)
})

// Individual pokemon
app.get(`/index/:id`, (req, res) => {
    res.render(`show.ejs`,
        {
            pokemon: pokemons[req.params.id], index: req.params.id
        })
})

// render edit page
app.get(`/index/:id/edit`, (req, res) => {
    res.render(`edit.ejs`, {
        pokemon: pokemons[req.params.id], index: req.params.id
    })
})

app.listen(port)




