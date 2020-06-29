enum age {
    AC = "AC",
    DC = "DC"
}

function qualEra(ano: number, era?: age): string {
    let defineAge: age = era
    era === undefined ? defineAge = age.DC : defineAge = era
    
    let transformation: number = 0
    defineAge === "AC" ? transformation = ano * -1 : transformation = ano 
    
    if (transformation < -400){
        return "Pré - Histórica"
    } else if (transformation >= -400 && transformation < 476){
        return "Idade Antiga"
    } else if (transformation >= 476 && transformation < 1453){
       return "Idade Média"
    } else if (transformation >= 1453 && transformation < 1789) {
        return "Idade Moderna"
    } else {
        return "Idade Contemporânea"
    }
}

console.log("10.000 AC" + qualEra(10000, age.AC))
console.log("3.0000 AC" + qualEra(3000, age.AC))
console.log("120 DC" + qualEra(120, age.DC))
console.log("700 DC" + qualEra(700, age.DC))
console.log("1.700 DC" + qualEra(1, age.DC))
console.log("1.990 DC" + qualEra(500, age.DC))