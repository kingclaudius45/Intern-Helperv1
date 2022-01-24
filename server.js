const express=require('express')
const app=express()


const {db}=require('./db/models')//destructuring syntax

const { jobsRoute } = require('./routes')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/jobs',jobsRoute)


app.use('/',express.static(__dirname+'/public'))

app.post('/done',function(req,res){

   res.send("ok Post completed");
});

db.sync({force: true}).then( ()=>{
  app.listen(8383,()=>{
    console.log("http://localhost:8383")
  })
}).catch((err)=>{
  console.error(new Error('could not start data base'))
  console.error(err)
})
