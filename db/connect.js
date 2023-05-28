const mongoose=require('mongoose')


//NOTE IN CONNECTION STRING WE HAVE TO PASS PASSWORD AND DATABASE NAME AFTER ".net/ i.e 03-TASK-MANAGER" by ourself
// also if u haven't created that database alreay they will create it for uh
// for password remove <> also

const connectDb= (url)=>{
    // we are returning a promise
    return mongoose
    .connect(url,{ useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology: true
    })
}
module.exports=connectDb

