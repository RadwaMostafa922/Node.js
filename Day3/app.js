let login ,home ,profile ,signup;
const http = require('http');
const fs1 = require('fs').promises;
const fs = require("fs");

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
        //res.end(login);
        var body = {};
        req.on('data', chunk => {
            body += JSON.parse(chunk.toString());
            let rawdata = fs.readFileSync('./data.json');
            let data = JSON.parse(rawdata);           
            if((body.email === data.email) && (body.password === data.password))
            {
                res.writeHead(200);
                res.end(profile);
            }
            else if((email !== data.email) || (password !== data.password))
            {
                res.write('Please enter valid data');
            }
        });
    }
    else if(req.url === "/signup" && req.method === 'POST')
    {
        const {email, password, confirm_password} = req.body
        if(!isValidEmail(email) && (password !== confirm_password)){
            res.write('Email must be Valide and Passwords must be same')
        }
        else if(!isValidEmail(email)){
            res.write('Email must be Valide')
        }
        else if(password !== confirm_password)
        {
            res.write('Passwords must be same')
        }
        else
        {
            res.writeHead(200);
            res.end(signup);
            // var jsonObj = JSON.parse(jsonData);
            // console.log(jsonObj);
            
            // // stringify JSON Object
            // var jsonContent = JSON.stringify(jsonObj);
            // console.log(jsonContent);
            
            // fs.writeFile("output.json", jsonContent, 'utf8', function (err) {
            //     if (err) {
            //         console.log("An error occured while writing JSON Object to File.");
            //         return console.log(err);
            //     }
            
            //     console.log("JSON file has been saved.");
            // });
        }
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