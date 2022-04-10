const fs = require('fs')
exports.createdir=()=>{
    const folderName = './bonus'

    try {
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName)
      }
    } catch (err) {
      console.error(err)
    }
}

