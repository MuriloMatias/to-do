const { Task } = require('../models');
const {auxiliary} = require('./auxiliaryMethods');

//TODO
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


const getTaskByTag = async(req, res) =>{
    const tag = req.query.tag;
    try{
        const task = await Task.findAll({ 
            where: {tag: tag},
        });
        if(task) return res.status(200).json(task);
        else return res.status(404).send(`No tasks found with tag ${tag}`);
    }catch(error){
        return auxiliary.handleError(error, res);
    }
}


const getTaskById = async(req, res) =>{
    const id = req.params.id
    try{
        const task = await Task.findByPk(id);
        if(task) return res.status(200).json(task);
        else return res.status(404).send("Task not found");
    }catch(error){
        return auxiliary.handleError(error, res);
    }
}
//Change some things after
const updateTask = async(req, res) =>{
    const id = req.params.id;
    
    const {content, tag, status} = req.body;

    try{
        let task = await Task.findByPk(id);
        if(!task) return res.status(404).send("Task not found");

        await Task.update({
            content: content,
            tag: tag,
            status: status,
        }, {
            where:{id: id}
        });

        task = await Task.findByPk(id);
        return res.status(200).json(task);
    }catch(error){
        return auxiliary.handleError(error, res);
    }
}

module.exports = {
    createTask,
    getTasks,
    getTaskByTag,
    getTaskById,
    updateTask,

}