const { create, getAll, getByID, updateByID, deleteByID} = require("./user.service.js");

const { genSaltSync, hashSync } = require("bcrypt");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.Senha = hashSync(body.Senha, salt);
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "erro no banco de dados"
                });
            }
            return res.status(200).json({
                success: 1,
                message: results
            });
        });
    },
    getUsers: (req, res) => {
        getAll((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getUserByID: (req, res) => {
        const id = req.params.id; 
        getByID(id, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!result) {
                return res.json({
                    success: 0,
                    message: "Usuario não encontrado"
                });
            }
            return res.json({
                success: 1,
                data: result
            });
        });
    },
    updateUserByID: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.Senha = hashSync(body.Senha, salt);
        updateByID(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json ({
                success: 1,
                data: "Usuário atualizado com sucesso" 
            });
        });

    },
    deleteUserByID: (req, res) => {
        const body = req.body
        deleteByID(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                succes: 1,
                message: "Usuario deletado com sucesso",
            })
        });
    }


    
};
