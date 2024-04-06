const express = require('express')
const path = require('path');
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/css', (req, res) => {
  res.send('Css')
})
app.get('/html', (req, res) => {
  res.send('html')
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})