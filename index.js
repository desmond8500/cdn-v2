const express = require('express')
const app = express()
const path = require('path');
let dotenv = require('dotenv').config()

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use(express.static('public'))

console.log(dotenv);

// if (dotenv.parsed) {
//   const port = 3000
//   app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// } else {
  app.listen(process.env.PORT, function () {
    console.log(`Example app listening on port`)
  })
  
// }


app.get('/tabler', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/tabler/tabler.html'));
})
