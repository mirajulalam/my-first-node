const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('look mama I can code node install now and server open!!!')
});

const users = [
    { id: 1, name: 'sabnur', email: 'sabnur@gmail.com' },
    { id: 2, name: 'sabana', email: 'sabana@gmail.com' },
    { id: 3, name: 'samira', email: 'samira@gmail.com' },
    { id: 4, name: 'mahi', email: 'mahi@gmail.com' },
    { id: 5, name: 'nabila', email: 'nabila@gmail.com' },
    { id: 6, name: 'mahiya', email: 'mahiya@gmail.com' },
    { id: 7, name: 'lamia', email: 'lamia@gmail.com' },
]
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched)
    }
    else {
        res.send(users)
    }

})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)

    res.send(user)
})

app.listen(port, () => {
    console.log('listening to port', port);
})