const { Task } = require('../models');

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
        return handleError(error, res)
    }
}

const handleError = (error, res) => {
    console.log(error);
    return res.status(500).json({ error: error.message });
  };

module.exports = {
    createTask,

}