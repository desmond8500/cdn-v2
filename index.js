const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.use(express.static('public'))

app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port`)
})