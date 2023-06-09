const express = require ('express')
const app = express()

const http = require('http')
const { disconnect } = require('process')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection', (socket) => {
    //Procesimientos 4:
    socket.on('chat', (msg) => {
        io.emit('chat', msg)
    })
})

app.get('/', (req, resp) => {
    resp.sendFile(`${__dirname}/cliente/index.html`)
})

server.listen(3000,() => {
    console.log('Servidor corriendo en http://localhost:3000')
})