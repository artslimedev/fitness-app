const mongoose = require('mongoose')
const cardioEntrySchema = new mongoose.Schema({
    date: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    sport: {
        type: String,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    distance: {
        type: String,
        require: true
    },
    unit: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('CardioEntry',cardioEntrySchema)