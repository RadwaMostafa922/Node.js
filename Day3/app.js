let login ,home ,profile ,signup;
const http = require('http');
const fs1 = require('fs').promises;
const fs = require("fs");
const qs = require('querystring');

http.createServer(function(req, res) 
{
    res.setHeader("Content-Type", "text/html");
     
    if(req.url === '/')
    {
        res.writeHead(200);
        res.end(home);
    }
    else if (req.url === "/login" && req.method === 'POST')
    {
        var body={};
        req.on('data', chunk => {
            body += chunk;
            let reqData =qs.parse(body);
            console.log(reqData)
            //Read data from file:
            const fileData = JSON.parse(fs.readFileSync("data.json").toString());
            console.log(fileData);

            if((reqData.email === undefined) || (reqData.password === undefined))
            {
                res.write('Please Enter your data');
            }
            else if((reqData.email === fileData.email) && (reqData.password === fileData.password))
            {
                res.writeHead(200);
                res.end(profile);
            }
            else
            {
                res.writeHead(200);
                res.write('Please Enter valid data');
            }
        });
    }
    else if(req.url === "/signup" && req.method === 'POST')
    {
        var body={};
        req.on('data', chunk => {
            body += chunk;
            let reqData =qs.parse(body);
           //console.log(reqData)  //read requested data
            //Read data from file:
            const fileData = JSON.parse(fs.readFileSync("data.json").toString());
            //console.log(fileData);

            if((body.email === undefined) || (body.password === undefined) ||( body.confirm_password === undefined))
            {
                res.write('Please Enter your data');
            }
            else if(reqData.email === fileData.email)
            {
                res.write('Email already exists');
            }
            else if(reqData.password !== reqData.confirm_password)
            {
                res.write('Passwords must be same');
            }
            else
            {
                var email = reqData.email;
                var password = reqData.password;
                var data ={
                    "email":email,
                    "password":password
                };
                //console.log(email ,password);
                fs.writeFileSync("./data.json", JSON.stringify(data));
                res.writeHead(200);
                res.end(profile);
            }
        });
    }
    else if (req.url ===  "/profile")
    {
        res.writeHead(200);
        res.end(profile);
    }
    else
    {
        res.writeHead(404);
        res.end(JSON.stringify({error:"Resource not found"}));
    }            
}).listen(8000);

fs1.readFile("./home.html")
    .then(contents => {
        home = contents;
    });

fs1.readFile("./login.html")
    .then(contents => {
        login = contents;
    });

fs1.readFile("./signup.html")
    .then(contents => {
        signup = contents;
    });

fs1.readFile("./profile.html")
    .then(contents => {
        profile = contents;
    });