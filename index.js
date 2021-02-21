require('dotenv').config();
const express = require("express")
const app = express();

const router = require("./routes/index")

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/",router);

app.get("/",(req,res)=>{
    res.send("Hello World.!")
})

app.listen(8000,()=>{
    console.log("server running..!")
});