const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storiesSchema = new Schema({
    title:{
        type:String,
        required:true,
        minlength: 3
    },
    description:{
        type: String,
        required:true,
        minlength: 3
    },
    likes:{
        type: String
    },
    date:{
        type: String
    }
});
const Stories = mongoose.model('Stories', storiesSchema);

module.exports = Stories;