const express = require('express');
const app = express();
const {PORT} = require('./src/config/env')

app.use(express.json())


const mainRouter = require('./src/routes/main.routes');
const productRouter = require('./src/routes/products.routes')




app.use('/',mainRouter)
app.use('/api',productRouter)



app.listen(PORT,()=>{
    console.log("SERVER : http://localhost:"+PORT);
})