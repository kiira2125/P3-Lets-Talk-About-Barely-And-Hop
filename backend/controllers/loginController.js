const bcrypt = require("bcrypt");
const db = require("../models");

module.exports = {
  checkUsername: (req, res) => {
    db.User.findOne({ username: req.params.username })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(404).json(err));
  },

  checkLogin: async (req, res) => {
    let { username, password } = req.body;
    let user = await db.Users.findOne({ username: username });
    console.log(user);
    if (user) {
      let isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.status(200).json({
          user: user,
        });
      } else {
        res.status(400).json({
          message: "Incorrect password",
        });
      }
    }

    res.status(400).json({
      message: "Could not find user",
    });
  },
};
