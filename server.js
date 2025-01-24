const express = require('express');
const path = require('path');

const app = express();
/* const router = express.Router(); */
const ip = '127.0.0.1';
const port = 5000;

app.use(express.static("client"));
app.use(express.json());

//ROOT PAGE - Login/Register page
/* app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
}); */

//DASHBOARD
app.get('/dashboard', (req, res) =>{
    res.sendFile(path.join(__dirname, './client/index.html'));
})

//TRAINING SUBPAGE
app.get('/dashboard/training', (req, res) => {
    res.sendFile(path.join(__dirname, './client/assets/subpages/training.html'));
})

//API ENDPOINTS
app.get('/api/quotes', (req, res) => {
    const quotes = require('./client/data/quotes');
    res.json(quotes);
});

app.get('/api/exercises', (req, res) => {
    const exercises = require('./client/data/exercises');
    res.json(exercises);
});

app.listen(port, ip, () => {
    console.log(`Server is running on ${ip}:${port}`);
});