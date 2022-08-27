const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const STATES = [
  "AK",
  "AL",
  "AR",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DC",
  "DE",
  "FL",
  "GA",
  "HI",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VA",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY",
];

const validateEmail = (email) => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
};

const userSchema = new Schema({
  // name: {
  //   first: {
  //     type: String,
  //     required: [
  //       true,
  //       "Please enter your first name, must be 2 characters or more",
  //     ],
  //     trim: true,
  //     max_length: 60,
  //   },

  //   last: {
  //     type: String,
  //     required: [
  //       true,
  //       "Please enter your last name, must be 2 characters or more",
  //     ],
  //     trim: true,
  //     max_length: 60,
  //   },
  // },
  username: {
    type: String,
    required: [true, "Please enter username."],
    unique: true,
    lowercase: true,
    trim: true,
    minlength: [6, "Please create a username with 6 characters or more"],
    max_length: [15, "Please create a username with 15 characters or less"],
  },

  password: {
    type: String,
    required: [true, "Please enter a password"],
    trim: true,
    minlength: [8, "Please select a password with 8 characters or more"],
    max_length: [20, "Please select a password with 20 characters or less"],
  },

  // contact: {
  //   email: {
  //     type: String,
  //     required: [true, "Please enter your email!"],
  //     unique: true,
  //     lowercase: true,
  //     trim: true,
  //     validate: {
  //       validator: validateEmail,
  //       message: "{VALUE} this is not a valid email address!",
  //     },
  //   },
  // },

  // phone: {
  //   type: String,
  //   required: false,
  //   trim: true,
  //   validate: {
  //     validator: (phone) => /\d{3}-\d{3}-\d{4}/.test(phone),
  //     message: "{VALUE} this is not a valid phone number",
  //   },
  //   max_length: 15,
  // },

  // city: {
  //   type: String,
  //   required: [true, "Please, enter a city in the US only"],
  //   trim: true,
  //   max_length: 60,
  // },

  // state: {
  //   type: String,
  //   required: [true, "Please, enter a stated in the US only"],
  //   enum: STATES,
  //   max_length: 2,
  // },

  recipes: [{ type: Schema.ObjectId, ref: "Recipe" }],
  media: {
    followers: [{ type: Schema.ObjectId, ref: "User" }],
    following: [{ type: Schema.ObjectId, ref: "User" }],
    favorites: [{ type: Schema.ObjectId, ref: "Recipe" }],
  },

  image: {
    type: String,
    required: false,
    trim: true,
    max_length: [1500, "Please select a smaller size image URL ( below 1500)"],
  },

  created: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
