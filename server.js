const express = require(`express`);
const pokemon = require(`./models/pokemon`)
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + `/public`));


app.get(`/`, (req, res) => {
    res.send(pokemon)
})

app.listen(port)




