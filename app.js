const express = require('express');
const app = express();

const mainRouter = require('./src/routes/main.routes');

app.use('/',mainRouter)


app.listen(8080,()=>{
    console.log("SERVER : http://localhost:8080");
})