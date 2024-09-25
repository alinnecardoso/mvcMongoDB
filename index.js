const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Route
const userRoute = require('./src/routes/userRoute');
const projectRoute = require('./src/routes/projectRoute')

//Mongo
const mongoose = require('mongoose');

//Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

//MonngoDB config
let url = 'mongodb://localhost:27017/Fatec';
let mongodb = process.env.MONGO_URI || url;
mongoose.connect(mongodb);
mongoose.Promise = global.Promise;
let db = mongoose.connection; //tratar erro
db.on('error', console.error.bind(console, 'Erro ao conectar com a base de dados')); // Se der erro, mostra no console


// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(userRoute)
app.use(projectRoute)

//Swagger Config
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


//Servidor
app.listen(3000, () =>{
    console.log('Servidor rodando na porta 3000');
})
