import express, { response } from "express"

// @types/express
const app = express()

/*
* GET       => Buscar uma informação
* POST      => Inserir (Criar) uma informação
* PUT       => Alterar uma informação
* DELETE    => Remover um dado
* PATCH     => Alterar uma informação específica

* Formas de banco de dados
* Type ORMjjj
*/

/*
* Tipos de parâmetros
* Routes Params => http://localhost:3000/produtos/783498746846156
* Query Params => http://localhost:3000/produtos?name=teclado&despription=tecladobom

* Body Params => { ──POST, PUT, PATCH──
    "name": "teclado",
    "description": "teclado bom"
}
*/

app.get("/test", (request, response) => {
    // Request => Entrando
    // Response => Saindo
    return response.send('Olá NLW')
})

app.post('/test-post', (request, response) => {
    return response.send('Olá NLW método POST')
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is NLW "));