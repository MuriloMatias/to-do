const express = require('express');

const taskController = require("./controllers/task");

const app = express();
const PORT = 3060;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/task", taskController);
app.listen(PORT, ()=> console.log(`app running on: http://localhost:${PORT}`))