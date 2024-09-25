const swaggerAutogen = require('swagger-autogen') ({ openapi: '3.1.0' });

const doc = {
    info: {
        version: '1.0.0',
        title: 'Persistencia de Dados',
        description: 'Exercicio de persistencia de dados valendo um ponto na avaliação',
    },
    servers: [
        {
            url: 'http://localhost:3001'
        }
    ],
};

const outputFile = './swagger-output.json';
const endpointsFiles = [ './index.js' ];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./')
});
