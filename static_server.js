const fetch = require("node-fetch");
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const HOST = "localhost";
const PORT = 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.use(cors());

async function getHoroscope(zodiac) {
    try {
        const response = await fetch(`https://ohmanda.com/api/horoscope/${zodiac}`);
        if(!response.ok) throw new Error(response.statusText);
        return await response.json();
    } catch(err) {
        console.log(err);
    }
}

app.get("/", (req, res)=>{
    res.send(path.resolve(__dirname, "index.html"));
});

app.get("/horoscope/:zodiac", async(req, res)=>{
    const horoscope = await getHoroscope(req.params.zodiac);
    res.send(horoscope);
});

app.listen(PORT, HOST, ()=>{
    console.log(`Servier working on ${HOST}:${PORT}`);
});