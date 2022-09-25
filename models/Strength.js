const mongoose = require('mongoose')
const strengthSchema = new mongoose.Schema({
    date: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    equipment: {
        type: String,
        require: true
    },
    muscle: {
        type: String,
        require: true
    },
    weight: {
        type: String,
        require: true
    },
    unit: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('StrengthEntry',strengthSchema)