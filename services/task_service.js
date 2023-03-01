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
        return res.status(201).json(tasks);
    }catch(error){
        return auxiliary.handleError(error, res);
    }
}


module.exports = {
    createTask,
    getTasks,

}