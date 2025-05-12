const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "taday",
})

database.connect((err) => {
    if (err) throw err
    console.log("database is connected")
})
app.post('/register', (req, res) => {
    const query = 'INSERT INTO  taday(username,email,password) VALUES(?,?,?)'
    database.query(query, [req.body.username, req.body.email, req.body.password], (err, result) => {
        if (err) throw err
        console.log("data is registered")
        res.send("gotcha")
    })
})

app.post('/update', (req, res) => {
    const query = 'UPDATE taday SET username = ?, password = ?  WHERE email = ?'
    database.query(query, [req.body.username, req.body.password, req.body.email], (err, result) => {
        if (err) throw err
        console.log("data updated")
        res.send("gotcha")
    })
})

app.post('/delete', (req, res) => {
    const query = 'DELETE FROM taday WHERE email = ?'
    database.query(query, [req.body.email], (err, result) => {
        if (err) throw err
        console.log("now data is readable")
        res.send("gotcha")
    })
})
app.get('/read', (req, res) => {
    const query = 'SELECT * FROM taday'
    database.query(query, (err, result) => {
        if (err) return res.json({ error: err })
        return res.json(result)
    })

})
app.listen(2005, (req, res) => {
    console.log("server is listening")
})