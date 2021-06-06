const express = require(`express`);
const methodoverride = require('method-override');
const pokemons = require(`./models/pokemon`)
const app = express();
const port = 3000;

app.use((req, res, next) => {
    next()
});
app.use(methodoverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + `/public`));

// Index page
app.get(`/index`, (req, res) => {

    res.render(`index.ejs`,
        { pokemons })
})

// create new page
app.get(`/index/create`, (req, res) => {
    res.render(`create.ejs`, {
        pokemon: pokemons[0]
    })
})

//Show pokemon
app.get(`/index/:id`, (req, res) => {
    res.render(`show.ejs`,
        {
            pokemon: pokemons[req.params.id], index: req.params.id
        })
})

// render edit page
app.get(`/index/:id/edit`, (req, res) => {
    res.render(`edit.ejs`, {
        pokemon: pokemons[req.params.id],
        index: req.params.id
    })
})

// Add new pokemon to index
app.post(`/index`, (req, res) => {
    pokemons.push(req.body)
    res.redirect(`/index`)
})

// delete pokemon
app.delete(`/index/:id`, (req, res) => {
    pokemons.splice(req.params.id, 1)
    res.redirect(`/index`)
})

// update pokemon
app.put(`/index/:id`, (req, res) => {


    pokemons[req.params.id] = req.body

    res.redirect(`/index`)
})

app.listen(port)




