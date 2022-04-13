var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

//Home Page:
app.get('/', function(req, res) {
	res.send('<html><head></head><body><h1>Welcome</h1></body></html>');
});

//Sign-up:
app.post('/api/signup', function(req, res) {
	console.log(req.body)
    //Read data from file:
    const fileData = JSON.parse(fs.readFileSync("data.json").toString());
    console.log(fileData);
    
    if((req.body.email === undefined) || (req.body.password === undefined) ||( req.body.confirm_password === undefined))
    {
        res.write('Please Enter your data');
    }
    else if(req.body.email === fileData.email){
        res.write('Email already exists');
    }
    else if(req.body.password !== req.body.confirm_password)
    {
        res.write('Passwords must be same');
    }
    else
    {
        //res.send('Thank you for your submittion');
        var email = req.body.email;
        var password = req.body.password;
        var data ={
            "email":email,
            "password":password
        };
        fs.writeFileSync("data.json", JSON.stringify(data));
    }
});

//Login:
app.post('/api/login', function(req, res) {
	console.log(req.body)
    //Read data from file:
    const fileData = JSON.parse(fs.readFileSync("data.json").toString());
    console.log(fileData);
    
    if((req.body.email === undefined) || (req.body.password === undefined))
    {
        res.write('Please Enter your data');
    }
    else if((req.body.email !== fileData.email) && (req.body.password !== fileData.password)){
        res.write('Enter valid data');
    }
    else if(req.body.password !== fileData.password)
    {
        res.write('Your password is wrong');
    }
    else if(req.body.email !== fileData.email)
    {
        res.write('Your email is wrong');
    }
    else
    {
        //res.send('Thank you for your submittion');
        res.render('profile', { email: req.body.email , pass:req.body.password});
    }
});

app.listen(3000);
