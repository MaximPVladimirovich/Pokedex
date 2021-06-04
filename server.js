const express = require(`express`);
const pokemons = require(`./models/pokemon`)
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + `/public`));


app.get(`/index`, (req, res) => {
    res.render(`index.ejs`,
        { pokemons })
})
app.post(`/new`, (req, res) => {
    pokemons.push(req.body)
})


app.get(`/index/:id`, (req, res) => {
    res.render(`show.ejs`,
        {
            pokemon: pokemons[req.params.id]
        })
})

app.listen(port)




