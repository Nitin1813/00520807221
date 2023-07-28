

const express = require('express');
const app = express();
const port = 3000; 

//to get number from the given range like 1-5, 5-10
app.get('/numbers', (req, res) => {
  const { start, end } = req.query; // creating a prams

  if (!start || !end) { // condition to check start and end are valid or not
    return res.status(400).json({ error: 'Both start and end parameters are required.' });
  }

  const startNumber = parseInt(start);
  const endNumber = parseInt(end);

  if (isNaN(startNumber) || isNaN(endNumber)) { // checking start and end are number
    return res.status(400).json({ error: 'Invalid start or end parameter. Please provide valid numbers.' });
  }

  
  const numbers = [];
  for (let i = startNumber; i <= endNumber; i++) {
    numbers.push(i);
  }

  res.json({ numbers });
});



function fibo(n) {
    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
  
    const series = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const next = series[i - 1] + series[i - 2];
      series.push(next);
    }
  
    return series;
  }
  app.get('/fibo/:n', (req, res) => {
    const n = parseInt(req.params.n);
  
    if (isNaN(n) || n < 0) {
      return res.status(400).json({ error: 'Tybe only numbers' });
    }
  
    const fibonacci= fibo(n);
    res.json({ fibonacci });
  });
  


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
