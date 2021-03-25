const express = require('express')

const server =  express()


server.use('/', (req, res) => {
    res.json({
        message: 'Hello Node with Docker 🚀'
    })
})

module.exports = server