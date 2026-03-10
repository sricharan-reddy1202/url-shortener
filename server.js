const express=require("express")
const app= express();
const PORT=5000;
app.get("/",(req,res)=>{
   res.send("URL Shortener Api running");
});

app.listen(PORT,()=>{
   console.log(`Server is running on ${PORT}`);
});