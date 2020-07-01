import {Place} from './Place'

export class Commerce extends Place{
    constructor(protected floorQuantity:number, cep: string){
        super(cep)
    }

    public getFloorQuantity(): number {
        return this.floorQuantity
    }
}