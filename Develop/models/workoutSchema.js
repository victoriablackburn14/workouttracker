{const mongoose= require("mongoose");

const Schema=mongoose.Schema;

const workoutSchema= new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter name of workout"
    },
    workoutType:{
        type: String,
        trim: true,
        required: "Type of workout"
    },
    sets:{
        type: Number,
        required: "Enter number of sets"
    },
    reps: {
        type: Number,
        required: "Enter number of reps"
    },
    duration:{
        type: Number,
        required: "Enter length of workout"
    }
})

const workout= mongoose.model("Workout", workoutSchema);

module.exports=workout
};
