const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const clientSchema = new Schema ({
    email:{
        type: String,
        required: true,
        pattern : "@mongodb\.com$"
    },
    firstname:{
        type: String,
    },
    lastname:{
        type: String,
    },
    phonenumber:{
        type: String,
    },
    username:{
        type: String,
        required: true,
        unique: true
    }
})

const Client = mongoose.model('client',clientSchema);
module.exports = Client;