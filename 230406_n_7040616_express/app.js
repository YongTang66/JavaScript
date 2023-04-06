const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint 1: Return your full name in English
app.get('/fullname', (req, res) => {
  res.json({ fullName: 'YongTang' });
});

// Endpoint 2: Return your group
app.get('/group', (req, res) => {
  res.json({ group: 'КП-14' });
});

// Endpoint 3: Return the current time
app.get('/current-time', (req, res) => {
  res.json({ currentTime: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});