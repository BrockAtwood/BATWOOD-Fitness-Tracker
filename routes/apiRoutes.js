//required boiler materials
const router = require("express").Router();
const db = require("../models");

//get routes for workouts
router.get("/api/workouts", function (req, res) {
  db.Workout.find({})
    .then((dbWorkout) => {
      // console.log("Look here Brock" + dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//creating the workout
router.post("/api/workouts", function ({ body }, res) {
  //console.log("adding a workout")
  db.Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//adding an exercise to workouts by ID (unit 13 Act #12)
router.put("/api/workouts/:id", function (req, res) {
  //console.log("updating")
  db.Workout.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $inc: { totalDuration: req.body.duration },
      $push: { exercises: req.body },
    },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//getting workouts in range
router.get("/api/workouts/range", async (req, res) => {
  try {
    const allWorkouts = await db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
          totalWeight: { $sum: "$exercises.weight" },
          totalSets: { $sum: "$exercises.sets" },
          totalReps: { $sum: "$exercises.reps" },
          totalDistance: { $sum: "$exercises.distance" },
        },
      },
    ]);
    // const allWorkouts = await db.Workout.find({});
    console.log(allWorkouts);
    return res.json(allWorkouts);
  } catch (err) {
    res.status(400).json(err);
  }
});

//exporting module
module.exports = router;
