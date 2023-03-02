const { Task } = require('../models');
let {auxiliary} = require('./auxiliaryMethods');

const createTask = async(req, res)=>{
    const { content, tag, status } = req.body;

    try{
        const newTask = await Task.create({
            content: content,
            tag: tag,
            status: status,
        });
        return res.status(201).json(newTask);
    }catch(error){
        return auxiliary.handleError(error, res); 
    }
}

const getTasks = async(req, res) =>{
    try{
        const tasks = await Task.findAll();
        return res.status(200).json(tasks);
    }catch(error){
        return auxiliary.handleError(error, res);
    }
}

const getTaskById = async(req, res) =>{
    const id = req.params.id
    console.log(req.params);
    try{
        const task = await Task.findByPk(id);
        if(task) return res.status(200).json(task);
        else return res.status(404).send("Task not found");
    }catch(error){
        return auxiliary.handleError(error, res);
    }
}

module.exports = {
    createTask,
    getTasks,
    getTaskById,

}