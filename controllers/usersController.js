const pool = require('../database/db');

async function createUser(req, res){
    try {
        const { name, password } = req.body;
        const response = await pool.query('INSERT INTO users(name, password_hash) VALUES($1, $2) RETURNING *', [name, password]);
        res.json(response.rows);
    } catch(e){
        res.status(500).json({message: 'There was an error with the database'});
    }
}

async function getAllUsers(req, res){
    try {
        const response = await pool.query('SELECT * FROM users');
        res.json(response.rows);
    }
    catch(e){
        res.status(500).json({ message: 'There was an error with the database' });
    }
}

async function getUser(req, res){
    try {
        const { id } = req.params;
        const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        res.json(response.rows);
    } catch(e){
        res.status(500).json({message: 'There was an error with the database'});
    }
}

async function updateUser(req, res){
    try {
        const { id } = req.params;
        const { name, password } = req.body;

        const response = await pool.query('UPDATE users SET name = $1, password_hash = $2 WHERE id = $3 RETURNING *', [name, password, id]);

        res.json(response.rows);
    } catch(e){
        res.status(500).json({ message: 'There was an error'});
    }
}

async function deleteUser(req, res){
    try {
        const { id } = req.params;
        const response = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);

        res.json(response.rows);
    }catch(e){
        res.status(500).json({message: 'There was an error'});
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}