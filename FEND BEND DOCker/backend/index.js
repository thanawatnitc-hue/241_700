const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

let conn = null;
const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8700
    });
    console.log('Connected to MySQL database');
}

app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results)
})

const validateData = (userData) => {
    let errors = [];
    if (!userData.firstname) {
        errors.push('กรุณากรอกชื่อ');
    }
    if (!userData.lastname) {
        errors.push('กรุณากรอกนามสกุล');
    }
    if (!userData.age) {
        errors.push('กรุณากรอกอายุ');
    }
    if (!userData.gender) {
        errors.push('กรุณาระบุเพศ');
    }
    if (!userData.description) {
        errors.push('กรุณากรอกคำอธิบาย');
    }
    if (!userData.interests) {
        errors.push('กรุณาระบุงานอดิเรก');
    }
    return errors;
}


app.post('/users', async (req, res) => {
    try {
        let user = req.body;
        const errors = validateData(user);
        if (errors.length > 0){
            throw {
                message : 'กรุณากรอกข้อมูลให้ครบถ้วน:',
                errors: errors
            }
        }
        const results = await conn.query('INSERT INTO users SET ?', user);
        console.log('results:', results);
        res.json({
            message: 'User added successfully',
            data: results[0]
        });
    } catch (error) {
        const errorMessage = error.message || 'Error adding user';
        const errors = error.errors || [];
        console.error('Error inserting user:', error);
        res.status(500).json({ 
            message: errorMessage,
            errors: errors    
        });
    }
})

app.get('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const results = await conn.query('SELECT * FROM users WHERE id = ?', id);
        if(results[0].length == 0){
            throw{statusCode:404,message:'User not found'};
        }
        res.json(results[0][0]);
    } catch (error) {
        console.error('Error fetching user:', error);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: error.message || 'Error fetching user'
        });
    }
})

app.put('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let updatedUser = req.body;
        const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id]);
        res.json({
            message: 'User updated successfully',
            data: results[0]
        });
    } catch (error) {
        console.log('Error updating user:', error);
        res.status(500).json({ message: 'Error updating user' });
    }
});

//path: = DELETE /users/:id for delete user by id
app.delete('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const results = await conn.query('DELETE FROM users WHERE id = ?', id);
        res.json({
            message: 'User deleted successfully',
            data: results[0]
        });
    } catch (error) {
        console.log('Error deleting user:', error);
        res.status(500).json({ message: 'Error deleting user' });
    }
});

app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;

    //  หา user ที่จาก id ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);

    // อัพเดตข้อมูล users
    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
    users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;

    if (updateUser.firstname) {
        users[selectedIndex].firstname = updateUser.firstname;
    }
    if (updateUser.lastname) {
        users[selectedIndex].lastname = updateUser.lastname;
    }

    res.json({
        message: 'User update successful',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });
});
app.listen(port, async () => {
    await initMySQL();
    console.log(`Server running on http://localhost:${port}`);
});