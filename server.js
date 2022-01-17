const express = require ('express');
const app = express()
app.use(express.json())

require('dotenv').config()
const mongoose = require ('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }); 

app.use('/api/user', require ('./routes/userRoute'))

app.listen(process.env.Port,(err)=> err? console.log(err) : console.log(`port running as ${process.env.Port}`))