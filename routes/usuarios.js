import express from "express";

const router = express.Router();
let USUARIOSSESI =[
    {id: 1, nome: "Thales", email: "thales@gmail.com"},
    {id: 2, nome: "Vitor", email: "vitor@gmail.com"},
    {id: 3, nome: "Davi", email: "davi@gmail.com"},




]
/**
 * @swagger
 * /usuarios:
 *   get:
 *      summary: Lista todos os Usuários
 *      tags : [Usuários]
 *      responses: 
 *          200:
 *             description: Lista de usuários retornada com sucesso
 */
 

router.get("/", (req,res)=>{

    res.status(200).json(USUARIOSSESI)
})

/**
 * @swagger
 * /usuarios:
 *  post:
 *      summary: rota inicial da API
 *      tags : [Usuários]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                  required:
 *                      - nome
 *                      - email
 *                  properties:
 *                      nome:
 *                          type: string
 *                          example: Thales Vale da Silva
 *                      email:
 *                          type: string
 *                          example: thales@gmail.com
 *      responses:
 *          201:
 *              description: Usuário cadastrado com sucesso
 */
router.post("/",(req,res)=>{
    const {nome,email} = req.body;

    const novoUsuario = {
        id: USUARIOSSESI.length + 1,
        nome,
        email
    };
    USUARIOSSESI.push(novoUsuario);
    res.status(201).json(novoUsuario);
})

export default router;
