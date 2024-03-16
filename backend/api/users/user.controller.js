const { create } = require("./user.service.js");

const { genSaltSync, hashSync } = require("bcrypt");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        console.log(body);
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
    }
};
