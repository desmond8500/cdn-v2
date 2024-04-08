const express = require('express')
const app = express()
const path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.use(express.static('public'))

app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port`)
})

app.get('/tabler', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/tabler/tabler.html'));
})