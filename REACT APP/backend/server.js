const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tadeyo')
    .then(() => console.log('data is connected'))
    .catch((err) => console.log(err))

const User = mongoose.model('User', {
    username: String,
    email: String,
    password: String
})
app.post('/register', async (req, res) => {
    const newUser = new User(req.body)
    await newUser.save()
    res.send('data is inserted')
})

app.put('/update/:email', async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { email: req.params.email }, 
            req.body,                    
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).send('User not found');
        }
        res.send('User updated successfully');
    } catch (err) {
        res.status(500).send('Error updating user');
    }
});
app.delete('/delete/:email', async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete({ email: req.params.email });
        if (!deletedUser) {
            return res.status(404).send('User not found');
        }
        res.send('User deleted successfully');
    } catch (err) {
        res.status(500).send('Error deleting user');
    }
});
app.get('/read', async (req, res) => {
    const result = await User.find()
    res.send(result)
})

app.listen(2005, (req, res) => {
    console.log("server is listening")
})