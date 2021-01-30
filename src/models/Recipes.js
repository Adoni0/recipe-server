const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    ingredients: [
        {
            type: String
        }
    ],
    directions: [
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

mongoose.model('Recipes', recipeSchema);