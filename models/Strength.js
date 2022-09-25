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
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
})
module.exports = mongoose.model('StrengthEntry',strengthSchema)