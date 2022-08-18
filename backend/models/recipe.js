const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AmericanBeerType = ['IPA', 'Pilsner', 'Lager', 'Stout', 'Pale Ale', 'Porter', 'Ale', 'Other'];
const recipeSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        maxlength: 65
    },
    
    brewer: {type: Schema.Types.ObjectId, ref: 'User'},
    beerType: {
        type: String,
        required: true,
        trim: true,
        enum: AmericanBeerType,
        maxlength: 65
    },

    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000
    },
    
    likes:{
        type: Number,
        required: true,
        trim: true,
        max: 1000000
    },

    // add here the types of ratings for how brewing types of beer
    // form hops to yeast, to preboil, boi, directions, the amount of hops or yeast, what are the specs in the beer, what are the boil and preboils.
    //after readying a lot of the home brewing and understanding the level of information one needs to understand to make a successful homemade beer.
})