const express=require("express")
const connectDB = require("./config/db");
const app= express();
const PORT=5000;
connectDB();
app.get("/",(req,res)=>{
   res.send("URL Shortener Api running");
});

app.listen(PORT,()=>{
   console.log(`Server is running on ${PORT}`);
});