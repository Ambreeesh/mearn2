import express from "express";
import {getCurrencies, getCurrenciesBySymbol} from "./controllers/currencies.controllers.js";
import { getAllUsers, getUsersByUuid, getUserByGenderOrAge} from "./controllers/users.controllers.js";
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