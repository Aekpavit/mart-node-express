const express = require('express');
const app = express();
const cors= require('cors')

app.use(express.json())
app.use('/uploads', express.static('uploads'))
app.use(express.urlencoded({ extended: true }))
const mainRouter = require('./src/routes/main.routes');
const menuAPI = require('./src/routes/menu.routes') 

app.use(cors());


app.use('/test',mainRouter)
app.use('/api',menuAPI)




const {PORT} = require('./src/config/env')
app.listen(PORT,()=>{
    console.log(`SERVER : http://192.168.1.106:${PORT}/`);
})