const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animeSchema = new Schema({
    title: {
        type: String,
        retuired: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail_url: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    }
})

module.exports = mongoose.model('anime' , animeSchema);