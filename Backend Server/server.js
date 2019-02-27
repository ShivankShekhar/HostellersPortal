const express = require('express');
const {MongoClient} = require('mongodb');

const app = express();

app.listen(8000,()=>{
  console.log('Server Started!');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.route('/register')
    .post((req,res)=>{ 
  console.log(req.body);
  console.log(req.body.StudentID);
 
   MongoClient.connect('mongodb://localhost:27017/HOSTEL',(err,db)=> {
    if(err){
        return console.log('Unable to connect to MongoDB Server!');
    }
    console.log('Connected to MongoDB Server')
    
    db.collection('Students').insertOne({
      StudentID :     req.body.StudentID,
      Hostel:         req.body.Hostel,
      RoomNo:         req.body.RoomNo,
      EmailID:        req.body.EmailID,
      MobileNo:       req.body.MobileNo,
      FatherName:     req.body.FatherName,
      FatherMobileNo: req.body.FatherMobileNo,
      FatherEmailId:  req.body.FatherEmailId,
      Password:       req.body.Password,
      RegisteredByWarden: false
    },undefined,(err,result)=>{
      if(err){
        return console.log('Unable to insert into MongoDB Server!');
    }
    });

    db.close();
});
 
});


app.route('/fac-register')
    .post((req,res)=>{

  console.log(req.body);
  //console.log(req.body.StudentID);
 
   MongoClient.connect('mongodb://localhost:27017/HOSTEL',(err,db)=> {
    if(err){
        return console.log('Unable to connect to MongoDB Server!');
    }
    console.log('Connected to MongoDB Server')
    
    db.collection('Faculty').insertOne({
      FacultyID : req.body.FacultyID,
      Hostel:req.body.Hostel, 
      EmailID:req.body.EmailID,
      MobileNo:req.body.MobileNo,
      Name:req.body.Name,
      Department:req.body.Department, 
      Password:req.body.Password, 
    },undefined,(err,result)=>{
      if(err){
        return console.log('Unable to insert into MongoDB Server!');
    }
    });

    db.close();
});
 
});

//Student Login Validation File
app.route('/stu-login')
  .post((req,res)=>{
    MongoClient.connect('mongodb://localhost:27017/HOSTEL',(err,db)=> {
    if(err){
        return console.log('Unable to connect to MongoDB Server!');
    }
    console.log('Connected to MongoDB Server');

    db.collection('Students').find({StudentID:req.body.ID})
    .toArray().then((doc)=>{ 
      console.log(doc);
      if(doc[0].Password===req.body.Password)
      {
        res.send('true');
      }
      else
      {
        res.send('false');
      }
    },err=>{
      if(err)
      {return console.log('User Not Found!');}
    });
  });
});





//Enabling CORS
const cors = require('cors');

var corsOptions = {
  origin:'http://localhost:4200',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
  