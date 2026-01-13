const express = require("express");
// const currenciesJson = require("./currencies.json");
const axios = require("axios");
const {getCurrencies, getCurrenciesBySymbol} = require("/controllers/currencies.controllers.js");
const app = express();
const PORT = 8082;

app.get("/", (req, res)=>{
  res.send("<h1>Currency Database</h1>");
});

app.get("/currencies", getCurrencies)

app.get("/currencies/:symbol", getCurrenciesBySymbol);

app.listen(PORT,()=>{
  console.log(`Server is runing on ${PORT}`);
})