const path = require('path');
const axios = require('axios');

exports.webhook = (req, res) => {
    axios.get('https://tes.ovvius.com/admin/webhook/index.php')
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    res.status('Error:', error);
  });
}

exports.getIndexPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
};