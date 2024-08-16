const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const Router = require('./routes/routes');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

// Middleware untuk parsing request body
app.use('/asset',express.static(path.join(__dirname, '..', 'public/*')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(Router);


// Menjalankan server
const PORT = process.env.PORT || 2026;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});