// Steven Craig Moss


var mongoose = require('mongoose');

//Create the TrailerparkSchema.  **********schema defines fields and field types
var TrailerparkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})



//Export the model schema. ***models are supposed to be thin... seriously***
module.exports = TrailerparkSchema;



//whoever requires has to have it exported back
// module.exports = mongoose.model('movie', TrailerparkSchema);
