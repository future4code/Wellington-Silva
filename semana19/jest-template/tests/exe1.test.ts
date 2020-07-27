import {performPurchase} from "../src/exe1"
import {User} from '../src/exe1'

test("Testing balance greater than value", () =>{
    const user: User = {
        name: "Astrodev",
        balance: 100
    }
    const result = performPurchase(user, 50)

    expect(result).toEqual({
        ...user,
        balance: 50
    })
})

test("Testing balance freater then value", () => {
    const user: User = {
        name: "Astrodev",
        balance: 50
    }

    const result = performPurchase(user,50)

    expect(result).toEqual({
        ...user,
        balance: 0
    })
})

test("Testing balance greater than value", () => {
    const user: User = {
        name: "Astrodev",
        balance: 30
    }

    const result = performPurchase(user, 50)

    expect(result).toEqual(undefined)
})