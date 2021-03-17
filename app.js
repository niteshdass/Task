
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
require('dotenv').config();
// import routes
const taskRoute = require('./routes/taskRoute');



// app
const app = express();

// db
const PORT = process.env.PORT
const MONGO_URL = 'mongodb+srv://NiteshDas:Siu33005@cluster0.y5dul.mongodb.net/Task?retryWrites=true&w=majority'
mongoose.connect(MONGO_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true 
    }).then( (data,error) =>{ 
          if(error){
                console.log("Have a some error",error)
          }else{
                console.log('Database connected')
          }
    })



// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use('/api', taskRoute);



const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
