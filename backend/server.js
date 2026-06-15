const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DB_FILE = path.join(__dirname, 'db.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Helper function to read from JSON DB
function readDb() {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading db.json:', err);
    return { scrapItems: [], pickups: [], contacts: [] };
  }
}

// Helper function to write to JSON DB
function writeDb(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing to db.json:', err);
    return false;
  }
}

// Routes

// 1. Scrap Items Endpoints
app.get('/api/scrap', (req, res) => {
  const db = readDb();
  res.json(db.scrapItems || []);
});

app.post('/api/scrap', (req, res) => {
  const { name, location, price, description, type } = req.body;
  
  if (!name || !location || !price || !description || !type) {
    return res.status(400).json({ error: 'All fields (name, location, price, description, type) are required.' });
  }

  const db = readDb();
  const scrapItems = db.scrapItems || [];
  
  const nextId = scrapItems.length > 0 ? Math.max(...scrapItems.map(item => item.id)) + 1 : 1;
  
  // Assign default asset images dynamically based on type
  let imagePath = 'assets/used.jpeg';
  if (type === 'metal') {
    imagePath = 'assets/metalsheets.jpeg';
  } else if (type === 'electronic') {
    imagePath = 'assets/used.jpeg';
  } else if (type === 'plastic') {
    imagePath = 'assets/used.jpeg';
  } else if (type === 'paper') {
    imagePath = 'assets/metalsheets.jpeg';
  }

  const newItem = {
    id: nextId,
    name,
    location,
    price,
    description,
    image: imagePath,
    type
  };

  scrapItems.unshift(newItem); // Add new item to beginning of array
  db.scrapItems = scrapItems;
  
  if (writeDb(db)) {
    res.status(201).json(newItem);
  } else {
    res.status(500).json({ error: 'Failed to save scrap listing to database.' });
  }
});

// 2. Pickups Endpoints
app.get('/api/pickups', (req, res) => {
  const db = readDb();
  res.json(db.pickups || []);
});

app.post('/api/pickups', (req, res) => {
  const { scrapType, quantity, pickupDate, contact, address } = req.body;

  if (!scrapType || !quantity || !pickupDate || !contact || !address) {
    return res.status(400).json({ error: 'All fields (scrapType, quantity, pickupDate, contact, address) are required.' });
  }

  const db = readDb();
  const pickups = db.pickups || [];
  
  const nextId = pickups.length > 0 ? Math.max(...pickups.map(p => p.id)) + 1 : 1;
  const newPickup = {
    id: nextId,
    scrapType,
    quantity,
    pickupDate,
    contact,
    address,
    status: 'Pending',
    createdAt: new Date().toISOString()
  };

  pickups.push(newPickup);
  db.pickups = pickups;

  if (writeDb(db)) {
    res.status(201).json(newPickup);
  } else {
    res.status(500).json({ error: 'Failed to record pickup request.' });
  }
});

// 3. Contacts Endpoints
app.get('/api/contacts', (req, res) => {
  const db = readDb();
  res.json(db.contacts || []);
});

app.post('/api/contacts', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields (name, email, subject, message) are required.' });
  }

  const db = readDb();
  const contacts = db.contacts || [];

  const nextId = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1;
  const newContact = {
    id: nextId,
    name,
    email,
    subject,
    message,
    createdAt: new Date().toISOString()
  };

  contacts.push(newContact);
  db.contacts = contacts;

  if (writeDb(db)) {
    res.status(201).json(newContact);
  } else {
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Scrapify Backend API running on http://localhost:${PORT}`);
});
