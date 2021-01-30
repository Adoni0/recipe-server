const mongoose = require('mongoose');

const favoritesSchema = new mongoose.Schema({
    ingredients: [
        {
            type: String
        }
    ],
    instructions: [
        {
            type: String
        }
    ],
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

mongoose.model('Favorites', favoritesSchema);