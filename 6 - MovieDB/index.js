const express = require("express");
const fetch = require("cross-fetch");

const app = express();


app.use('/', express.static(__dirname + '/public'))


app.get("/api/:page", async (req,res) =>{
    let page = req.params.page
    let data = await fetch (`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`)
    let movies = await data.json();
    res.json(movies)
})

app.get("/search/:name", async (req,res) =>{
    let name = req.params.name
    let data = await fetch (`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${name}`)
    let movies = await data.json();
    res.json(movies)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log(`server na porta ${PORT}`));
