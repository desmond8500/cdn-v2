const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

router.get("/tabler", (req, res) => {

  res.sendFile(path.join(__dirname, 'public/tabler/tabler.html'));
});



app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);