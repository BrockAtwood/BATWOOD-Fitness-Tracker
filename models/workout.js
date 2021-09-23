//Activity #13 & #15

//requiring mongoose and schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Story: from directions
//Given Day
//Schema tracking - name, type, weight, sets, reps, and duration of exercise.
//If cardio exercise -- track distance traveled
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
    required: true,
  },
  exercise: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
        required: "Activity name is required",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Activity duration is required",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
  totalDuration: {
    type: Number,
  },
});

//Mongoose model
const Workout = mongoose.model("Workout", workoutSchema);

//model export
module.exports = Workout;
