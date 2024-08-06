import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import pool from '../db.js';

const app = express();
const port = 3001;//Api port

app.use(cors());
app.use(bodyParser.json());

// Endpoint: Fetch all events
app.get('/api/events', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint: Create a new event
app.post('/api/events', async (req, res) => {
  const { type, location, description } = req.body;
  if (!type || !location || !description) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO events (type, location, description) VALUES ($1, $2, $3) RETURNING *',
      [type, location, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint: Update an existing event
app.put('/api/events/:id', async (req, res) => {
  conosle.log('Endpoint: Update an existing event: ', req, res)
});

// Endpoint: Delete an event by ID
app.delete('/api/events/:id', async (req, res) => {
    conosle.log('Endpoint: Delete an event by ID: ', req, res)
});

// Endpoint: User login (Placeholder, implement user auth logic)
app.post('/api/login', (req, res) => {
  conosle.log('Endpoint: User login: ', req, res)
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});