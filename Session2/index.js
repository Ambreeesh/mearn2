const express = require("express");
// const currenciesJson = require("./currencies.json");
const axios = require("axios");
const app = express();
const PORT = 8082;

app.get("/", (req, res)=>{
  res.send("<h1>Currency Database</h1>");
});

app.get("/currencies", async (req, res)=>{
  try {
    res.send((await axios.get("https://api.coinbase.com/v2/currencies")).data);
  } catch (error) {
    res.status(500).send({message:"Something went wrong..."});
  }
});

app.get("/currencies/:symbol", async (req, res)=>{
  try {
      const response = (await axios.get("https://api.coinbase.com/v2/currencies")).data;
      const reqCurrency = response.data.find((currency)=> currency.id === req.params.symbol.toUpperCase())
      if(reqCurrency) return res.send(reqCurrency);
      res.status(404).send({message:"Currency could not be found."})
  } catch (error) {
       res.status(500).send({message:"Something went wrong..."});
  }
});

app.listen(PORT,()=>{
  console.log(`Server is runing on ${PORT}`);
})