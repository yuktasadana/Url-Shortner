const express = require("express")
const mongoose = require("mongoose")
const route = require("./route/route")
const app = express()

app.use(express.json())

app.use("/", route)


mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://YuktaSadana:yuiopjkl@cluster0.ikfqj5s.mongodb.net/urlShortner",{
    useNewUrlParser:true
}).then(()=>console.log("MongoDB Connected"))
.catch((err)=>console.log(err))

app.listen(3000, ()=>{
    console.log("Server runnig on port",3000)
})
