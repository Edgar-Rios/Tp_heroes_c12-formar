const express = require("express");
const path = require("path");

let pathAbsolute = (rutaRelativa) => path.resolve(__dirname, rutaRelativa);

const PORT = 3030;
const app = express();

const publicPath = pathAbsolute("./DH-HEROES/public")
app.use(express.static(publicPath))


app.get('/', (req, res)=>{
    res.sendFile(pathAbsolute("./DH-HEROES/views/index.html"))
})

app.get('/home', (req, res)=>{
    res.sendFile(pathAbsolute("./DH-HEROES/views/index.html"))
})

 
app.get('/babbage', (req, res)=>{
    res.sendFile(pathAbsolute("./DH-HEROES/views/babbage.html"))
})

app.get('/berners-lee', (req, res)=>{
    res.sendFile(pathAbsolute("./DH-HEROES/views/berners-lee.html"))
})

app.get('/clarke', (req, res)=>{
    res.sendFile(pathAbsolute("./DH-HEROES/views/clarke.html"))
})

app.get('/hamilton', (req, res)=>{
    res.sendFile(pathAbsolute("./DH-HEROES/views/hamilton.html"))
})

app.get('/hopper', (req, res)=>{
    res.sendFile(pathAbsolute("./DH-HEROES/views/hopper.html"))
})

app.get('/lovelace', (req, res)=>{
    res.sendFile(pathAbsolute("./DH-HEROES/views/lovelace.html"))
})

app.get('/turing', (req, res)=>{
    res.sendFile(pathAbsolute("./DH-HEROES/views/turing.html"))
})

app.listen(3030, ()=> console.log(`servidor levandato en puerto ${PORT}`))