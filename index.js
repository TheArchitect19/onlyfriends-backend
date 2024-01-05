const express = require('express');
const bodyparser = require('body-parser');
const {Server} = require('socket.io');

const io = new Server();

const app = express();


app.listen(8000, ()=> console.log("hello world"));