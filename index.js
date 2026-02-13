const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.json());

let users = [];
let counter = 1;

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter;
    users.push(user);
    counter += 1;
    
    res.json({
        message: 'User added successfully',
        user: user
    });
});

app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    let selectedIndex = users.findIndex(user => user.id == id);

    if (selectedIndex !== -1) {
        if (updateUser.Fname) {
            users[selectedIndex].Fname = updateUser.Fname;
        }
        if (updateUser.Lname) {
            users[selectedIndex].Lname = updateUser.Lname;
        }

        res.json({
            message: 'User updated successfully',
            data: {
                user: users[selectedIndex],
                indexUpdate: selectedIndex
            }
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.delete('/user/:id', (req, res) => {
    let id = req.params.id;
    let selectedIndex = users.findIndex(user => user.id == id);

    if (selectedIndex !== -1) {
        users.splice(selectedIndex, 1);
        res.json({
            message: 'User deleted successfully',
            indexDelete: selectedIndex
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});