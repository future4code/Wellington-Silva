import {Client} from './Client'
import {Place} from './Place'

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill:() =>{
        return 2;
    }
}

const newPlace = new Place("13.290-000")

console.log(client)