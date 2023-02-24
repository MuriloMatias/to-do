const express = require('express');



const app = express();
const PORT = 3060;

app.get('/', (req, res) => res.status(200).send("Roda"));

app.listen(PORT, ()=> console.log(`app running on: http://localhost:${PORT}`))