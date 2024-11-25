const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Backend1!' });
    
});


app.listen(3000, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${3000}`);
  });