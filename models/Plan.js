const { Schema, model } = require("mongoose");

//!to be imported in the future across multiple models
const muscleEnum = ["Chest", "Shoulders", "Back", "Arms", "Legs"];

//Create function to validate given date from input before updating schema
const DateValidator = function (givenDate) {
  const todaysDate = new Date();
  todaysDate.setHours(0, 0, 0, 0); //Preset time to midnight to only compare date and not time
  const nextDate = new Date(todaysDate);
  nextDate.setDate(todaysDate.getDate() + 1);

  //if given date does not meet required condition, return an error message instead
  if (givenDate < nextDate) {
    throw new Error("Date must be at least the day after today");
  }
};

const planSchema = new Schema(
  {
    date: {
      type: Date,
      //include function to have a default value of tomorrow's date
      default: () => {
        const defaultDate = new Date();
        defaultDate.setDate(defaultDate.getDate() + 1);
        return defaultDate;
      },
      //include validation to execute date validating function when updating schema from new input
      validate: {
        validator: DateValidator,
        message:
          "this is a message that is sent when given date has already passed",
      },
      required: true,
    },
    exercise: {
      type: String,
      required: true,
    },
    muscle: {
      type: String,
      enum: muscleEnum,
      required: true,
    },
    reps: {
      type: Number,
      default: 10,
      min: 1,
      required: true,
    },
    sets: {
      type: Number,
      default: 1,
      min: 1,
      required: true,
    },
    //! to consider how to flip between kg and lbs
    weight: {
      type: Number,
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

//----- JOEY TRYING OUT -----//
// New instance method for adding item to Plan
// planSchema.methods.addItemToPlan = async function (itemId) {
//   const plan = this;

//   // Checking if item already exists in in plan might not be relevant
// };

module.exports = model("Plan", planSchema);
