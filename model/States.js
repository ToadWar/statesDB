const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatesSchema = new Schema({
     stateCode: {
        type: String, 
        required: true,
        unique: true
    },
    funfacts: {
        ofString: [String] 
    }
});

module.exports = mongoose.model('States', StatesSchema);
