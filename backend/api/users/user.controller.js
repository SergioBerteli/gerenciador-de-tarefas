const { create, getAll, getByID} = require("./user.service.js");

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
            return res.status(200).json({
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
            return res.status(200).json({
                success: 1,
                data: result
            });
        });
    }


    
};
