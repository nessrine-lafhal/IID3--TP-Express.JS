const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



let items = []; // Local variable to store items

// POST endpoint to add an item
app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).send('Item added');
});



// GET endpoint to retrieve all items
app.get('/items', (req, res) => {
    res.json(items);
  });
  


// GET endpoint to retrieve an item by ID
app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).send('Item not found');
    }
  });
  

// PUT endpoint to update an item by ID
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = items.findIndex(i => i.id === id);
    if (index !== -1) {
      items[index] = req.body;
      res.send('Item updated');
    } else {
      res.status(404).send('Item not found');
    }
  });



// DELETE endpoint to delete an item by ID
app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = items.findIndex(i => i.id === id);
    if (index !== -1) {
      items.splice(index, 1);
      res.send('Item deleted');
    } else {
      res.status(404).send('Item not found');
    }
  });
  