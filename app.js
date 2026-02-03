const express = require('express');
const app = express();


app.use(express.json())
app.use('/uploads', express.static('uploads'))
app.use(express.urlencoded({ extended: true }))
const mainRouter = require('./src/routes/main.routes');
const productRouter = require('./src/routes/products.routes')




app.use('/',mainRouter)
app.use('/api',productRouter)




const {PORT} = require('./src/config/env')
app.listen(PORT,()=>{
    console.log(`SERVER : http://localhost:${PORT}`);
})