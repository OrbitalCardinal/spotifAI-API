const express = require("express");

// Database
const sequelize = require("./utils/db");

// Init app
const app = express();

// Decode json
app.use(express.json());

// Sequelize models
const User = require('./models/users');

// Headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Routes declaration
const swaggerRoute = require('./routes/swagger');
const usersRoute = require('./routes/users');

app.use(swaggerRoute);
app.use(usersRoute);

// DB Relationships

// Create db
sequelize.createSchema('spotifai').then(() => {
    sequelize.sync().then(results => {
        console.log(results);
    }).catch(err => console.log(err));
}).catch(err => console.log(err));


// Open port
const server = app.listen(3000);

module.exports ={app, server};