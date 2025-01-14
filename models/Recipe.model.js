const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  //   title - Type String. It should be required and unique.

  title: {
    unique: true,
    type: String,
    required: true,
    default: 'Unknown',
    trim: true,
  },

  // level - Type String. Can be one of the following values: Easy Peasy - Amateur Chef - UltraPro Chef (remember the enum validator 😉).

  level: {
    type: String,
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'],
  },

  // ingredients - Type Array of Strings (represented as [ String ]).

  ingredients: {
    type: [String],
  },

  // cuisine - Type String. Should be required.

  cuisine: {
    type: String,
    required: true,
    default: 'Unknown',
  },

  // dishType - Type String. Possible values: breakfast, main_course, soup, snack, drink, dessert or other.

  dishType: {
    type: String,
    enum: [
      'breakfast',
      'main_course',
      'soup',
      'snack',
      'drink',
      'dessert',
      'other',
    ],
  },

  // image - Type String. Default value: "https://images.media-allrecipes.com/images/75131.jpg".

  image: {
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg',
  },

  // duration - Type Number. The minimum value should be 0.

  duration: {
    type: Number,
    min: 0,
  },

  // creator - Type String.

  creator: {
    type: String,
    default: 'Unknown',
  },

  // created - Type Date. By default, today.

  created: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
