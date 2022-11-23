const { findOne } = require("../model/userModels");
const User = require("../model/userModels");

exports.home = (req,res) => {
    res.send("Hello Ved Dadhich");
};


exports.createTask = async (req,res) => {
    try {
        const {task} = req.body;
        if(!task){
            throw new error("Task is required");
        }
        // check if task already exists
        const taskExists = await User.findOne({task});
        if(taskExists){
            throw new Error("this task already created");
        }

        // insert in database
        const user = await User.create({task});
        res.status(201).json({
            success:true,
            message:"Task created successfully",
            user
        })
    } 
    catch (error) {
        console.log(error);
    }
}


exports.getTask = async(req,res) => {
    try {
        const users = await User.find();
        res.status(201).json({
            success:true,
            users,
        })
    } catch (error) {
       console.log(error);
       res.status(401).json({
        success:false,
        message:error.message,
       }) 
    }
}


exports.editTask = async (req,res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            success:true,
            message:"task updated successfully",
        })
    } catch (error) {
       console.log(error);
       res.status(401).json({
        success:false,
        message:error.message,
       }) 
    }
}

exports.deleteTask = async (req,res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);
        res.status(200).json({
            success:true,
            message:"Task Deleted Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message,
        })
    }
}