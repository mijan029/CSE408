const Workout = require('../models/workoutModels');
const mongoose = require('mongoose');
//creat a new workout
const createWorkOut = async (req,res)=>{
    const {title, reps, loads} = req.body;

    try{
        const workout = await Workout.create({title, reps, loads});
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error: error.message});

    }
    //res.json({"mssg" : "post a workout"});
};


// get all workouts
const workouts = async (req,res)=>{
    const all = await Workout.find();
    if(!all){
        return res.status(404).json({"mssg":"There is nothing"});
    }
    res.status(200).json(all);
};


// get a single workouts
const workout = async (req,res)=>{
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid id' });
    }


    const single = await Workout.findById(id);
    
    if (!single) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json(single);
};

// delete a workout
const deleteWorkOut = async (req,res)=>{
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid id' });
    }


    const single = await Workout.findByIdAndDelete(id);
    
    if (!single) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json(single);
};

// Update an entry
const updateWorkOut = async (req,res)=>{
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid id' });
    }

    const single = await Workout.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!single) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json(single);
};

module.exports = {
    createWorkOut,
    workout,
    workouts,
    deleteWorkOut,
    updateWorkOut
};