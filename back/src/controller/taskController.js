const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response){
    console.log(request.body);
    // Recuperando formulario
    const params = Array(
        request.body.nome, 
        request.body.email
    );
    console.log(params);
    const query = "INSERT INTO tasks(nome, email) VALUES(?,?)";
    
    connection.query(query, params, (err, results) => {
        console.log(err);
        if(results){
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Ops, deu problema!",
                data: err
            })
        }
    })
}

module.exports = {
    storeTask
}