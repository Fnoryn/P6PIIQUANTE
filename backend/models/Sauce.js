// import
const mongoose = require('mongoose');

// modele
const saucesSchema = mongoose.Schema({    
    userId: { type: String, required: true},
    name: { type: String, required: true},
    manufacturer: {type: String, required: true},
    description: { type: String, required: true},
    mainPepper: { type: String, required: true},
    imageUrl: { type: String, required: true},
    heat: { type: Number, required: true},
    likes: { type: Number, required: false, default: 0},
    dislikes: { type: Number, required: false, default: 0},
    userLiked: { type: Array, required: false, default: []},
    userDisleked: { type: Array, required: false, default: []},
});

// export
module.exports = mongoose.model('Sauce', saucesSchema)