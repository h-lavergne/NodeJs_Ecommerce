var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
    imagePath: {type: String, reuired: true},
    title: {type: String, reuired: true},
    description: {type: String, reuired: true},
    price: {type: Number, reuired: true},

})

module.exports = mongoose.model('Product', Schema);