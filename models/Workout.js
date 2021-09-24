//adding comment - per/Ben about changing the w to a captial W
//Activity #13 & #15

//requiring mongoose and schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Story: from directions
//Given Day
//Schema tracking - name, type, weight, sets, reps, and duration of exercise.
//If cardio exercise -- track distance traveled
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: true,
        },
        name: {
          type: String,
          trim: true,
          required: true,
        },
        duration: {
          type: Number,
          trim: true,
          required: true,
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
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
//to get total duration
workoutSchema.virtual("totalDuration").get(function () {
  const duration = this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
  return duration;
});

//Mongoose model
const Workout = mongoose.model("Workout", workoutSchema);

//model export
module.exports = Workout;
