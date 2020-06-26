"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const criarConta = (nome, dataDeNascimento, cpf) => {
    const userFilePath = "bancoDeDados.json";
    const userFileData = fs.readFileSync(userFilePath);
    const userString = userFileData.toString();
    const usuarios = JSON.parse(userString);
    const encontrarUsuario = usuarios.find((usuario) => {
        return usuario.cpf === cpf;
    });
    if (encontrarUsuario !== undefined) {
        console.log("Já existe um usuario com esse cpf");
        return;
    }
    usuarios.push({
        nome: nome,
        dataDeNascimento: dataDeNascimento,
        cpf: cpf,
        saldo: 0,
        extrato: [],
    });
    console.log(usuarios);
    const usuariosStringify = JSON.stringify(usuarios, null, 2);
    fs.writeFileSync(userFilePath, usuariosStringify);
};
const nome = process.argv[2];
const data = process.argv[3];
const cpf = process.argv[4];
criarConta(nome, data, cpf);
//# sourceMappingURL=index.js.map