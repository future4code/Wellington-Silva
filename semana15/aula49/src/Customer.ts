import { User } from './CustomUser'

export class Customer extends User{
    public purcheseTotal: number = 0;
    public creditCard: string;

    constructor(id: string,email:string,name:string,password:string, creditCard: string){
        super(id,email,name,password)
            console.log('Chamando o construtor de classe Customer')
            this.creditCard = creditCard;
    }

    public getCreditCard(): string{
        return this.creditCard
    }
}