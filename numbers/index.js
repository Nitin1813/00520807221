

const express = require('express');
const app = express();
const port = 3000; 


app.get('/numbers', (req, res) => {
  const { start, end } = req.query;

  if (!start || !end) {
    return res.status(400).json({ error: 'Both start and end parameters are required.' });
  }

  const startNumber = parseInt(start);
  const endNumber = parseInt(end);

  if (isNaN(startNumber) || isNaN(endNumber)) {
    return res.status(400).json({ error: 'Invalid start or end parameter. Please provide valid numbers.' });
  }

  
  const numbers = [];
  for (let i = startNumber; i <= endNumber; i++) {
    numbers.push(i);
  }

  res.json({ numbers });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
