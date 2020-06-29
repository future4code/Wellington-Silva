import moment from 'moment'
import { JSONFileManager } from './JSONFileManager'

export class ExtractItem{
    private description: string;
    private value: number;
    private date: string;

    constructor(newDescription: string, newValue: number, newDate: string){
        this.description =newDescription
        this.value = newValue
        this.date = newDate
    }

    public getExtract(): string{
        return this.description
    }

}

export class Account{
    private name: string;
    private birthDay: string;
    private cpf: string;
    private balance: number = 0
    private extract: Object;

    constructor(newName: string, newBirthDay: string, newCpf: string, newBalance:number, newExtract: ExtractItem[]){
        this.name = newName
        this.birthDay = newBirthDay
        this.cpf = newCpf
        this.balance = newBalance
        this.extract = newExtract
    }

    public getName(): string{
        return this.name
    }
    public getBirthday(): string{
        return this.birthDay
    }
    public getCpf(): string{
        return this.cpf
    }
    public getBalance(): number{
        return this.balance
    }
    public getExtract(): Object{
        return this.extract
    }
}


export class Bank{
    private operation: string
    private value: string

    constructor(newOperation: string, newValue:string){
        this.operation = newOperation
        this.value = newValue
    }

    public getOperation():string{
        return this.operation
    }

    public getValue(): string{
        return this.value
    }

    createAccount = (newName: string, birthDay: string, cpf: string) => {
        const birth = moment( birthDay,"DD/MM/YYYY")
        const today = moment()
        const age = today.diff(birthDay, "years")
        if( age < 18){
            console.log("Usuário tem que ter mais que 18 anos")
            return
        }
    
        
    }
}


