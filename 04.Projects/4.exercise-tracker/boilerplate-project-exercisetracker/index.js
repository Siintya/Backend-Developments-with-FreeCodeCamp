const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose');
const { Schema } = mongoose;

// connect db
// console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// create schema for users
const userSchema = new Schema({
  username: { type: String, required: true },
});

// model from userSchema
const User = mongoose.model("User", userSchema);

// create schema for exercise
const exerciseSchema = new Schema({
  user_id: {type: String, required: true},
  description: String,
  duration: Number,
  date: Date,
});

//  model from exerciseSchema
const Exercise = mongoose.model("Exercise", exerciseSchema);

app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

// GET to /api/users username
app.get("/api/users", async (req, res) => {
  try{
    const users = await User.find({}).select("_id username");
    res.json(users);
  }catch(err){
    console.error(err);
    res.send("Not found User");
  }
});

// POST to /api/users username
app.post('/api/users', async (req, res) => {
  try {
    const user = new User({ username: req.body.username });
    const savedUser = await user.save();

    // response
    res.json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving user');
  }
});

// POST to /api/users/_id/exercises username
app.post("/api/users/:_id/exercises", async (req, res) => {
  const id = req.params._id;
  const { description, duration, date } = req.body

  try{
    const user = await User.findById(id)
    if(!user){
      res.send("Could not find user")
    } else {
      const exerciseObj = new Exercise({
        user_id: user._id,
        description,
        duration,
        date: date ? new Date(date) : new Date(),
      });

      const exercise = await exerciseObj.save();

      // response
      res.json({
        _id: user._id,
        username: user.username,
        description: exercise.description,
        duration: exercise.duration,
        date: new Date(exercise.date).toDateString(),
      })
    }
  }catch(err){
    console.error(err);
    res.status(500).send('Error saving exercise');
  }
});

// GET to /api/users/:_id/logs
app.get("/api/users/:_id/logs", async (req, res) => {
  try{
    const { from, to, limit } = req.query;
    const id = req.params._id;
    const user = await User.findById(id);

    let dateObj = {};
    if(from){
      dateObj["gte"] = new Date(from);
    }
    if(to){
      dateObj["lte"] = new Date(to);
    }

    let filter = {
      user_id: id
    }
    if(from || to){
      filter.date = dateObj;
    }

    const exercise = await Exercise.find(filter).limit(+limit ?? 500);
    
    const log = exercise.map( e => ({
      description: e.description,
      duration: e.duration,
      date: e.date.toDateString()
    }))

    // response
    res.json({
      username: user.username,
      count: exercise.length,
      _id: user._id,
      log
    });

  }catch(err){
    console.error(err);
    res.send("Could not find user");
    return;
  }
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
