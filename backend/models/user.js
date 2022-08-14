const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const STATES = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 
'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 
'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 
'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'];

const validateEmail = email => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
}

const userSchema = newSchema ({
    name: {
     first:
       type: String,
       required: [true, 'Please enter your first name, must be 2 characters or more'],
       trim: true,
       maxlength: 60
    },
    last: {
        type: String,
        required: [true, 'Please enter your last name, must be 2 characters or more'],
        trim: true,
        maxlength: 60  
       },   
   
   username: {
       type: String,
       required: [true, 'Please enter username.'],
       unique: true,
       lowercase: true,
       trim: true,
       minlength: [6, 'Please create a username with 6 characters or more'],
       maxlenght: [15,'Please create a username with 15 characters or less'],
   },

   password: {
        type: String,
        required: [true, 'Please enter a password'],
        trim: true,
        minlength:[8, 'Please select a password with 8 characters or more'],
        maxlength:[20, 'Please select a password with 20 characters or less'],
      },

    contact: {
     email{
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: validateEmail,
            message: '{VALUE} this is not a valid email address'
         }
       },
    
    phone: {
        type: String,
        required: false,
        trim: true,
        validate:{
            validator: phone => /\d{3}-\d{3}-\d{4}/.test(phone),
        }
    }




    }


});
























});