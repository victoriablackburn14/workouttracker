const router = require("express").Router();

const path= require("path");


module.exports = function(app){
  app.get("/index", (req, res) =>{
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
    console.log("exercise page")
  });
  app.get("/exercise",  (req, res) =>{
    res.sendFile(path.join(__dirname, "./public/stats.html"));
    console.log("stats page")
  });
};

// router.get()
// router.post();
// router.put();

module.exports = router;


const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
