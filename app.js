

const express=require('express');
const mongoose=require('mongoose');
//const bodyParser=require('body-parser');
const app=express();

//const Todo=require('./models/todo');

const url="mongodb://localhost:27017/firstDB";
mongoose.connect(url,{useNewUrlParser:true});

const con=mongoose.connection;
con.on('open',function(){
  console.log('connected...')
});

app.use(express.json());

const alienRouter = require('./routes/aliens');
app.use('/aliens',alienRouter);

app.listen(4200,()=>{
  console.log('server on..')
});


