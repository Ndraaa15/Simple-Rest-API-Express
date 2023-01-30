//Node and express is all about routing

import express from "express";
import bodyParser from "body-parser";
//Bodyparser allow us to take in incoming request body
import apiRouter from "./routes/users.js";
//We can change usersRouter to anything we like but that name is a good representation

const app = express();
//The whole applications rest in this var called app

const PORT = 5000;
//This can be any number 

app.use(bodyParser.json());
//json stand for java script object notation. It's common format sending or request to a rest API

//We need to use /users to acces usersRouter
app.use('/api', apiRouter);

//'/' usually it's for homepage
app.get('/', (req, res) => res.send('Hello from Homepage.'));
//This is for make another route

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
//Listen is for recieve a request and executed when we run our server

//Gege
