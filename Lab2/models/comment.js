const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    post_id: { type: String },
    user_id: { type: String },
    comment_text: { type: String, required: true }
});

module.exports = mongoose.model('comment', commentSchema)