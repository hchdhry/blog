const mongoose = require("mongoose");

const schema = mongoose.Schema;

const postSchema = new schema({
    id:mongoose.Types.ObjectId,
    title: { type: String, maxlength: 50 },
    Text: { type: String},
    date: { type: String, required: true }
});

module.exports = mongoose.model("Posts", postSchema);
