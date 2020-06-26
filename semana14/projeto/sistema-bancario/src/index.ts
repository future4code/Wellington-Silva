import * as fs from 'fs'
import moment from 'moment';

type conta = {
    nome: string;
    dataDeNascimento: string;
    cpf: string;
    saldo: number;
    extrato: extrato[];
}

type extrato = {
    descrição: string;
    valor: number;
    data: string;
}

const criarConta = (nome: string, dataDeNascimento:string, cpf: string): void =>{
    const dataAniversario = moment(dataDeNascimento, "DD/MM/YYYY")
    const diaAtual = moment();
    const idade = diaAtual.diff(dataAniversario, "years")
    if(idade < 18) {
        console.log("Usuário tem que ter mais de 18 anos")
        return
    }

    const userFilePath = "bancoDeDados.json";
    const userFileData: Buffer = fs.readFileSync(userFilePath);
    const userString: string = userFileData.toString();

    const usuarios: conta[] = JSON.parse(userString);

    const encontrarUsuario = usuarios.find((usuario: conta) => {
        return usuario.cpf === cpf;
    });

    if(encontrarUsuario !== undefined){
        console.log("Já existe um usuario com esse cpf")
        return
    }

    usuarios.push({
        nome: nome, 
        dataDeNascimento:dataDeNascimento, 
        cpf: cpf,
        saldo: 0,
        extrato:[],
    });
    console.log(usuarios);

    const usuariosStringify = JSON.stringify(usuarios,null, 2);
    fs.writeFileSync(userFilePath, usuariosStringify)
};

const nome = process.argv[2]
const data = process.argv[3]
const cpf = process.argv[4]
criarConta(nome, data, cpf)