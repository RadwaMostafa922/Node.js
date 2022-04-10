exports.removedata =()=>{
    const fs = require('fs')
    fs.truncate('info.txt', 0, function()
    {
        console.log('done')
    })
}