import { v4 as uuidv4 } from 'uuid';

// Sample data
let users = [
    { id: uuidv4(), firstName: "John", lastName: "Doe", age: 25 },
    { id: uuidv4(), firstName: "Jane", lastName: "Smith", age: 30 },
];

// Get all users
export const getUsers = (req, res) => {
    res.send(users);
};

// Create a new user
export const createUser = (req, res) => {
    const user = { ...req.body, id: uuidv4() };
    users.push(user);
    res.send(`User with the name ${user.firstName} added to the database.`);
};

// Get a user by ID
export const getUserById = (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).send('User not found.');
    }

    res.send(user);
};

// Delete a user by ID
export const deleteUser = (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).send('User not found.');
    }

    users.splice(userIndex, 1);
    res.send(`User with the ID ${id} deleted from the database.`);
};

// Update a user by ID
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).send('User not found.');
    }

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the ID ${id} has been updated.`);
};
