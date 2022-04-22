import express from 'express';
import mongoose from 'mongoose';
// import cors from 'cors';
import ricetteRoutes from './routes/ricette.js'
const app = express();
import dotenv from 'dotenv';
const cors = require('cors')

app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 3000;
app.use('/ricette', ricetteRoutes )
app.use(cors())
app.options('*',cors())

app.get('/', (req, res) => res.send("benvenuto nella homepage"))


mongoose.connect(process.env.CONNECTION_URL)
.then(() =>{
    app.listen(PORT,()=>{
        console.log(`server running on port: ${PORT}`);
    })

})
.catch(error => console.error(error))

