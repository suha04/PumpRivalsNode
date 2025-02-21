const express = require('express');
const path = require('path');

const app = express();
const ip = '127.0.0.1';
const port = 5000;

//ROOT PAGE - AUTH PAGE
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/assets/subpages/auth.html'));
});

//DASHBOARD
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'));
});

//TRAINING SUBPAGE
app.get('/dashboard/training', (req, res) => {
    res.sendFile(path.join(__dirname, './client/assets/subpages/training.html'));
});

//TRAINING SUBPAGE
app.get('/dashboard/ranked', (req, res) => {
    res.sendFile(path.join(__dirname, './client/assets/subpages/ranked.html'));
});

//PROFILE SUBPAGE
app.get('/dashboard/profile', (req, res) => {
    res.sendFile(path.join(__dirname, './client/assets/subpages/profile.html'));
});

//API ENDPOINTS
app.get('/api/quotes', (req, res) => {
    const quotes = require('./client/data/quotes');
    res.json(quotes);
});

app.get('/api/exercises', (req, res) => {
    const exercises = require('./client/data/exercises');
    res.json(exercises);
});

app.get('/api/taekwondo', (req, res) => {
    const taekwondo = require('./client/data/taekwondo');
    res.json(taekwondo);
});

//SERVES, MIDDLEWARES AND MORE
app.use(express.static("client"));
app.use(express.json());

//CHECKS IF THE SERVER IS RUNNING
app.listen(port, ip, () => {
    console.log(`Server is running on http://${ip}:${port}`);
});