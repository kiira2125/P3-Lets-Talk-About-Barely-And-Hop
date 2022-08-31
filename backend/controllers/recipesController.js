const db = require("../models");

module.exports = {
  findAll: async (req, res) => {
    let allRecipeis = await db.Recipe.find({});
    console.log(allRecipeis);
    res.status(200).json(allRecipeis);
  },

  findById: (req, res) => {
    dbRecipe
      .findById(req.params.id)
      .populate("brewer", { password: 0 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: async (req, res) => {
    await db.Recipe.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  update: (req, res) => {
    dbRecipe
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .populate("brewer", { password: 0 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  remove: (req, res) => {
    dbRecipe
      .findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
