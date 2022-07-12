
const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const userRouter = require('./routes/users')
const userAuth = require('./routes/auth')
const app = express();

//MIDDLEWARE
//BODY PARSER
//PARSER POST REQUEST
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
dotenv.config();


//REST API
//WHEN brought to this /api/user run router
app.use('/api/users', userRouter);
app.use('/api/auth', userAuth);


MongoClient.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client)=> {

    const collection = client.db("CompanyDB").collection("employees");
    const cursor = collection.find();
    cursor.forEach(console.dir);

    // client.close();
});


// CREATE SERVER AND LISTEN 
app.listen(8800, () => {
    console.log("Backend server running");
})
