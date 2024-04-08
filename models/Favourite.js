const { Schema, model } = require("mongoose");

//!to be imported in the future across multiple models
const muscleEnum = ["Chest", "Shoulders", "Back", "Arms", "Legs"];

const favouriteSchema = new Schema(
  {
    exercise: {
      type: String,
      required: true,
    },
    muscle: {
      type: String,
      enum: muscleEnum,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    userId: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Favourite", favouriteSchema);
