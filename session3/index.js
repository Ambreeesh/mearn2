const express = require("express");
// const currenciesJson = require("./currencies.json");
// const axios = require("axios");
const currencyRoutes = require("./routes/currencies.routes");
const userRoutes = require("./routes/users.routes");
const dotEnv = require("dotenv");
dotEnv.config();
const app = express();
const PORT = 8082;

app.use("/currencies", currencyRoutes);
app.use("/users",userRoutes);



app.listen(PORT,()=>{
  console.log(`Server is runing on ${PORT}`);
})