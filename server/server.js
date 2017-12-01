require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('DB Connected')
    app.set('db', db);
})

const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));