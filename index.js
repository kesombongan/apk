const express = require('express');
// const bodyParser = require('body-parser');
// const session = require('express-session');
// const Router = require('./route/router');
const userController = require('./Controller/UserController');
const path = require('path');
// const bot = require('./bot');
const axios = require('axios');
const app = express();
const port = 1111;
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: true
// }));

// app.use('/asset',express.static(path.join(__dirname, '..', 'asset/*')));

// app.use(express.static(path.join(__dirname, 'public')));

// app.use(Router);

// app.post('/chat', (req, res) => {
//     bot.processMessage(req.body.message, (reply) => {
//         res.send(reply);
//     });
// });

const SPREADSHEET_ID = '1FozvI1Bf9rNUqjMriOKhqhth5mD3K42a9R5YU4iSCEw';
const RANGE = 'september!A1:C11'; // Misal range dari A1 ke D5 di Sheet1
const API_KEY = 'AIzaSyAvTo3fx66d0gNwXec8sZ-_N_mAatWBp_w'; // Ganti dengan API Key kamu

app.use(express.static(path.join(__dirname, 'public')));
app.use('/asset',express.static(path.join(__dirname, '..', 'asset/*')));

app.get('/kamar', async (req, res) => {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data.values);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});
app.get('/', userController.getIndex);
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
app.listen(port, () => {
    console.log(`Server running at ${port}`);
  });
// const PORT = process.env.PORT || 1111;
// app.listen(PORT, () => {
//     console.log(`Server running`);
// });

