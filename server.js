
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const MyFruit = require('./models/fruits')
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

let connectionString = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@mongosetupcluster.ztodsr1.mongodb.net/FruitDatabase?retryWrites=true&w=majority`


mongoose.set('strictQuery', false);
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.post('/create_fruit', async (req, res) =>{
    
    const {nameString: name, colorString: color, ageNumber: age, readyBool: readyToEat} = req.body;

    let returnedValue = await MyFruit.create({
        name,
        color,
        age,
        readyToEat
    })
    console.log(returnedValue);
    if (returnedValue) {
        console.log("upload complete");
    }
    res.send(returnedValue);
})

app.get('/get_data', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    console.log("request received at /get_data");
    console.log(process.env.MONGOPASSWORD);
    res.json({data: "Response from server"})
})


app.listen(4000, () => {
    console.log(`Server is Listening on 4000...`)
});

