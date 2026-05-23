import express, { json } from 'express';
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(json());

// Declare a users variable with an empty array to store and manage data
let users = [];

// POST /users - Create a user with username,email and phone number
app.post('/users', (req, res) => {
    const { username, email, phone } = req.body;

    if (!username || !email || !phone) {
        return res.status(400).json({ error: 'username, email and phone number are required' });
    }

    const newUser = {
        id: Date.now().toString(),
        username,
        email,
        phone
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

// GET /users - Get all users list
app.get('/users', (req, res) => {
    res.json(users);
});

// GET /users/:id - Get a specific user based on the id provided
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
});

// PUT /users/:id - Update a specific user
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, phone } = req.body;

    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    if (username) users[userIndex].username = username;
    if (email) users[userIndex].email = email;
    if (phone) users[userIndex].phone = phone;

    res.json(users[userIndex]);
});

// DELETE /users/:id - Delete a specific user
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    const deletedUser = users.splice(userIndex, 1);
    res.json({ message: 'User deleted successfully', user: deletedUser[0] });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
