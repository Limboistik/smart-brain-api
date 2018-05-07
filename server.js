const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const signin = require('./controllers/signin');
const register = require('./controllers/register');
const profile = require('./controllers/profile');
const image = require('./controllers/image');


const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'mathew',
    password : '',
    database : 'smart-brain'
  }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send(database.users);
})

app.get('/', (req, res) => { res.send(database.users)});

// Get Profile
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) });

// Sign In
app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) });

// Register
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) });

// Send image
app.put('/image', (req, res) => { image.handleImage(req, res, db) });
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) });


app.listen(8888, () => {
  console.log('Listening on port 8888');
}) 