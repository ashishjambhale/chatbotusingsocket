const express = require('express')
const app = express()
var siofu = require("socketio-file-upload");
app.set('view engine', 'ejs')
app.use(express.static('public'))

const sqlite = require('sqlite');


app.get('/', (req, res) => {
  

    let db = new sqlite.Database(':chatbot:', (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Connected to SQlite database.');
      });
	res.render('index')
})


server = app.listen(3000)
const io = require("socket.io")(server)


io.on('connection', (socket) => {
	console.log('New user connected')

	
	socket.username = "Anonymous"

  
    socket.on('change_username', (data) => {
        socket.username = data.username
    })

   
    socket.on('new_message', (data) => {
        
        io.sockets.emit('new_message', {message : data.message, username : socket.username});
    })

  
    socket.on('typing', (data) => {
    	socket.broadcast.emit('typing', {username : socket.username})
    })

    
})


