const Task=require('../models/Task')
const getAllTasks=async (req,res)=>{
    // res.send('all items')
    try{
        const tasks=await Task.find({})
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({msg:error})
    }
}
const createTask= async (req,res)=>{
    // res.send('create task')
    // res.json(req.body)
    try{
        const task= await Task.create(req.body)
        res.status(201).json({task})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
    
}
//provides info about specific task
const getTask= async(req,res)=>{
    // res.send('get single task')
    // res.json({id:req.params.id})
    try{
        const {id:taskID}=req.params
        const task=await Task.findOne({_id:taskID})    
        
        //here we can have two errors
        // if id has same number of characters but id is not found that we have to manually deal with this error
        // that is we are doing here
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }

        //but here if syntax is wrong like (if number of char are more or less in id ) then mongoose will deal with it
        res.status(200).json({task})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const deleteTask=async (req,res)=>{
    // res.send('delete task')
    try{
        const {id:taskID}=req.params
        const task=await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task})
        // res.status(200).send()
        // res.status(200).json({task:null,status:'success'})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}
const updateTask=async(req,res)=>{
    // res.send('update task')
    try{
        const {id:taskID}=req.params
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true,
        })
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task})
    }
    catch{
        res.status(500).json({msg:error})
    }
}
module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}