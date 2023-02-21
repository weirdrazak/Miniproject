require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const students = require('./routers/students');

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

const app = express();

// Parsing request body via express.json middleware
app.use(express.json());


// Getting student details by studentID
app.get('/students/:studentID', (req, res) =>{
  res.status(200).send('YOUR ID NUMBER IS: ' + req.params.studentID);
});

app.post('/students', (req, res) => {
  res.status(200).send('YOUR ID NUMBER IS ' + req.body.studentID);
})



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} `));
