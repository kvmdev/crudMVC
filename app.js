const express = require('express');
const app = express();

app.use(express.json());

const Paths = {
    users: '/api/users',
}

app.use(Paths.users, require('./routes/users'));

app.listen(5000, ()=>{
    console.log('Server opened on port 5000');
});