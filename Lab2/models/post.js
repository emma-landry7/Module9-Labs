const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, trim: true, required: true },
    created_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('post', postSchema)