import swaggerJSDoc from "swagger-jsdoc";

const options = {

    definition: {
        //defini a versão da especificação OPENAPI usada pelo swagger
        //OPENAPI é o padrão usado para documentar APIs
        openapi:"3.0.0",

        info:{
            //titulo da API que avi aparecer no SWAGGER
            title: "API em NODEJS com express",
            // versão API
            version: "1.0.0",
            // Pequena descrição
            describe: "Utilizando Swagger pela primeira vez"
        },
        servers: [
            {
                //URL base da API
                url:"http://localhost:3000",


            }
        ]

    },
    //APIs define em quais arquivos o SWAGGER deve procurar
    //os comentarios com @Swagger
    apis:["./server.js", "./routes/usuarios.js"]

};
//aqui o swagger.jsdoc lê as configurações do objeto "options"
//e gera a documentação da API em formato JSON
const swaggerSpec = swaggerJSDoc(options);

//Exporta a Documentação pronta
// para que ela possa ser usada em outro arquivo, como no server.js
export default swaggerSpec;