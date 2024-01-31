const express = require('express');
const Workout = require('../models/workoutModels');
const router = express.Router();
const {
    createWorkOut,
    workout,
    workouts,
    deleteWorkOut,
    updateWorkOut
} = require('../controllers/workoutController');

//get all workouts
router.get('/', workouts);

router.get('/not-api', (req, res)=>{
    res.send("From not-api root");
} );

//get single workout
router.get('/:id',workout);

//post a workout
router.post('/',createWorkOut);

//delete a single workout
router.delete('/:id',deleteWorkOut);

//update a single workout
router.put('/:id',updateWorkOut);
module.exports = router;
