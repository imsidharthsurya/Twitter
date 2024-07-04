const express=require("express")

const connect=require("./config/database")
const ApiRoutes=require("./routes/index")

const app=express();

app.use(express.json());

app.use("/api",ApiRoutes)

app.listen(3000,async()=>{
    console.log("server started on port 3000")
    await connect();
    console.log("mongodb connected")

    
})