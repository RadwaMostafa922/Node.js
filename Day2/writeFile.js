exports.writedata =()=>{
    const fs = require('fs')

    const content = 'Hello iti!'

    fs.writeFile('info.txt', content, err => {
    if (err) {
        console.error(err)
        return
    }
    })
}
