const express = require("express");
// const currenciesJson = require("./currencies.json");
const axios = require("axios");
const {getCurrencies, getCurrenciesBySymbol} = require("./controllers/currencies.controller");
const {getAllUsers, getUserByGenderOrAge, getUsersByUuid} = require("./controllers/users.controller");
const app = express();
const PORT = 8082;

app.get("/", (req, res)=>{
  res.send("<h1>Currency Database</h1>");
});

app.get("/currencies", getCurrencies)
app.get("/currencies/:symbol", getCurrenciesBySymbol);

app.get("/users", getAllUsers);
app.get("/users/search", getUserByGenderOrAge);
app.get("/users/:uuid", getUsersByUuid);


app.listen(PORT,()=>{
  console.log(`Server is runing on ${PORT}`);
})