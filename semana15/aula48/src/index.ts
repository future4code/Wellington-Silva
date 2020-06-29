import { Bank } from './bank'
import { JSONFileManager } from './JSONFileManager'

const newTransition: string = process.argv[2]
const newValue: string = process.argv[3]

const operation: Bank = new Bank(newTransition,newValue) 

const fileManager: JSONFileManager = new JSONFileManager('BancoDeDados.json')
const transitionList: any = fileManager.getObjectFromFile()

transitionList.push(operation)

fileManager.writeObjectToFile(transitionList)

console.log("Operação feita com sucesso")