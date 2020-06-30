import { User } from './CustomUser'
import { Customer } from './Customer'

const newMember:User = new User('1','well@gmail.com','Well','123456')

console.log('userId:', newMember.getId())
console.log('userName:', newMember.getName())
console.log('userEmail:', newMember.getEmail())

const newCustomer: Customer = new Customer('2','aparecido@gmail.com', "Aparecido","1a2b3c4d","123456789")

console.log(newCustomer)

/* Para acessar o a instancia quandp esta private
    sempre colcar uma variavel e depois chamar a função que vem dela
*/