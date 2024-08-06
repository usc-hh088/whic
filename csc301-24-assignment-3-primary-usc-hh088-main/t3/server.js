import express from 'express';
//import the database connection pool object
import pool from './db.js'; 

const app = express();

// GET request handler to fetch event data
app.get('/api/events', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//specify the port here so that SvelteKit can communicate with the backend
//could change port number arrcordingly
const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});