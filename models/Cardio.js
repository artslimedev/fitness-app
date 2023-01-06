const mongoose = require('mongoose')
const cardioEntrySchema = new mongoose.Schema({
    date: {
        type: String,
        require: true,
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
        type: Number,
        require: true
    },
    unit: {
        type: String,
        require: true
    },
    heartRate: {
        type: Number,
        require: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
})
module.exports = mongoose.model('CardioEntry',cardioEntrySchema)