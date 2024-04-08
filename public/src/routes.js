app.get('/tabler', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/tabler/tabler.html'));
})
