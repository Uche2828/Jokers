
const express = require('express');

const mongoose = require('mongoose');

const model =  require("./db")
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

// app.use(express.urlencoded())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())



app.get('/', async (req, res) => {
    
   
    const data  = await model.aggregate().sample(1).exec()
    const name = data[0].name
    const joke = data[0].joke
    console.log(data)

    const requestTime = new Date();
    const ip = req.ip;
    const hostname = req.hostname;

    res.render('index', {
        value: joke,
        name: name,
        requestTime: requestTime,
        ip: ip,
        hostname: hostname
    });
});


app.get('/write/jokes', (req,res) => {
    res.render('input')
   
})

app.post('/write/jokes', (req,res) => {
    const joke = req.body.joke
    const name = req.body.name
    const document = new model()
    document.name = name
    document.joke = joke
    document.save()
  
    res.json({
        value:"write a joke"
    })

})


app.listen(9000, () => {
    console.log('App started on port 9000');
    mongoose.connect("mongodb+srv://ugwariuchechi2020:TKHdLyLzhMfYnpKA@jokers.z92j9us.mongodb.net/") 
    .then(() => {
        console.log("Database connected")
    })
     .catch((err) => {
        console.log(err)
    })
});



