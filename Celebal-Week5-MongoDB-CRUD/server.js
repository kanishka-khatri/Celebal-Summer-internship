const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student = require('./models/student');

const app = express();
app.use(bodyParser.json());

// ✅ Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/celebal', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("Connection error", err));

// ➕ Create
app.post('/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

// 📥 Read All
app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

// 📥 Read One
app.get('/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send('Student not found');
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

// ✏️ Update
app.put('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) return res.status(404).send('Student not found');
    res.send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

// ❌ Delete
app.delete('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).send('Student not found');
    res.send(`Deleted: ${student.name}`);
  } catch (error) {
    res.status(500).send(error);
  }
});

// 🚀 Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});