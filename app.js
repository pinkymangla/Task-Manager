
const express = require("express")
const app = express()
const tasks=require('./routes/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send("Task manager app")
// })

app.use("/api/v1/tasks",tasks)


//since we are returning a promise here that why async await with try catch
const start= async()=>{
    try{
        //only if we are able to connect to db then only we spinup a server
        await connectDB(process.env.MONGO_URI)
        app.listen(3000,()=>{
            console.log("server is listening")
        })
    }
    catch(error){
        console.log(error)
    }
}
start()



