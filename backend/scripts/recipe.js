const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;
const recipeSeed = [
    {
        name: "Name of that beer type",
        brewer: "",
        beerType: "molson",
        style: "type of beer, lager , IPA, etc",
        likes: 10,
        description: "Brewed with 100% type of 'hops' from where they are grown, and say a few words why they name that beer and what type of flavor is give in the beer"
        specs: {
            abv: #,
            ibu: #,
            og: #.#,
            fg: #.#,
            batch: {
                size: #,
                units: "gal or litter what ever the recipe states in the units of the batch size"
            },
            boil: degree 76,
            preboil: {
                size: #.#,
                units: "gal or litter what ever the recipe states in the units of the batch size"
            }
        },
        ingredients: {
            malt:{
                base: [
                    {
                     name: "name",
                     amount: #,
                     units: "al or litter what ever the recipe states in the units of the batch size you can do lbs and oz as well copy the recipes specs and instructions of making it"
                    },
                    {
                        name: "name",
                        amount: #,
                        units: "al or litter what ever the recipe states in the units of the batch size you can do lbs and oz as well copy the recipes specs and instructions of making it"
                    },
                ],
                speciality: [
                    {
                     name: "Name",
                     amount: #,
                     units: "oz"
                    }
                ]
            },
            hops: [
                {
                    name: "Name",
                    type: "text",
                    alpha: ##,
                    amount: #.#,
                    units: "oz",
                    addition: "text"
                },
                {
                    name: "Name",
                    type: "text",
                    alpha: ##,
                    amount: #.#,
                    units: "oz",
                    addition: "text"
                },
                {
                    name: "Name",
                    type: "type of beer",
                    alpha: ##,
                    amount: #.#,
                    units: "oz",
                    addition: ""
                }
            ],
            yeast: {
                name: "White Labs WLP001 California Ale Yeast",
                amount: "1 bag"
            }
        },