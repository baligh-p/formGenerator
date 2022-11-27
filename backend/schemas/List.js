const mongoose = require("mongoose")


const List = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "must provide an title"],
        maxlength: [70, "too long title"],
        unique: true
    },
    description: {
        type: String,
    },
    dateCreation: {
        type: Date,
        default: Date.now,
    },
    id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("List", List)