const fs = require("fs");
//as sync
exports.readsync=()=>{
    let rawdata = fs.readFileSync('data.json');
    let data = JSON.parse(rawdata);
    console.log(data);
}

//as async
exports.readAsync=()=>{
    fs.readFile("./data.json", "utf8", (err, rawdata) => {
        if (err) throw err
        const data = JSON.parse(rawdata); //JSON.parse takes JSON data as input and returns a new JavaScript object. Otherwise, we would just have a string of data with properties we can’t access.
        console.log("Data : ", data.name);    
      });
    console.log('This is after the read call');
}

