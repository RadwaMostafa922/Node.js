//Event:
// const Emitter = require('./emitter');
// var event=require('./emitter');
// var emt = new Emitter()
// emt.on('content',function(){
//     console.log('Day 2 in Node js course ')
// })
// emt.emit('content')

//Remove data from info.txt:
// var rm = require('./removefile');
// rm.removedata();

//Read data from data.json file:
//as sync
// var syncR = require('./readfile');
// syncR.readsync();

//as async
// var asyncR = require('./readfile');
// asyncR.readAsync();

//write data into file info.txt:
// var write = require('./writefile');
// write.writedata();

//Bonus : Create Dir
var cdir = require('./createDir');
cdir.createdir();