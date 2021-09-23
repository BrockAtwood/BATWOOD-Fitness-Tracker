//required boiler materials
const router = require("express").Router();
const db = require("../models");

//get routes for workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      //console.log("dbWorkouts")
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//creating the workout
router.post("/api/workouts", ({ body }, res) => {
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
router.put("/api/workouts/:id", (req, res) => {
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
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//exporting module
module.exports = router;
