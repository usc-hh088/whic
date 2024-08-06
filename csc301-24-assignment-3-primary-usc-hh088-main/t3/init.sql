-- Drop existing tables to avoid conflicts 
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS users;

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    type VARCHAR(100),
    location VARCHAR(100),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO events (type, location, description) VALUES
('Natural Disaster', 'Barber Club', 'Unexplained smoke, could be fire somewhere'),
('Public Security', 'Woolworths', 'Someone is trying to attack someone else');

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL -- Store hashed password
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);