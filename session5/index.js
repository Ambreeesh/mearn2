const express = require("express");
// const currenciesJson = require("./currencies.json");
// const axios = require("axios");
const currencyRoutes = require("./routes/currencies.routes");
const userRoutes = require("./routes/users.routes");
const blogRoutes = require("./routes/blogs.routes")
// const verifyAuth = require("./middleware/veryfyAuth");
const dotEnv = require("dotenv");
dotEnv.config();

const connectDB = require("./db/connect");
const app = express();
const PORT = 8082;
connectDB();
// app.use(verifyAuth);
app.use(express.json());
app.use("/currencies", currencyRoutes);
app.use("/users",userRoutes);
app.use("/blogs", blogRoutes);



app.listen(PORT,()=>{
  console.log(`Server is runing on ${PORT}`);
})