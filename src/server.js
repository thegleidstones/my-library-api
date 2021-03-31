const express = require('express')
const routes = require('./routes')
const connection = require('./database')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333, async () => {
    console.log('Server running on Port 3333')
    try {
        await connection.authenticate();
        console.log('Database connection has been established sucessfully')
    } catch(error) {
        console.log('Unable to connect to the database', error)
    }
})