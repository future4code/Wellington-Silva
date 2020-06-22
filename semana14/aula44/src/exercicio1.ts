/* exercicio 1  */

/* A */
let palavra: string = "Hello, World"
console.log(palavra)

/* B */
let numero: number = 18

/* C */
type person = {
    name: string,
    age: number,
    favoriteColor: string
}
const astrodev: person = {
    name: 'Astro',
    age: 30,
    favoriteColor: 'white'
}

/* D */
const Julian: person = {
    name: 'Julian',
    age: 59,
    favoriteColor: 'orange'
}

const Bouman: person = {
    name: 'Bouman',
    age: 37,
    favoriteColor: 'gray'
}

const Hamilton: person = {
    name: 'Hamilton',
    age: 30,
    favoriteColor: 'black'
}

/* E */
enum Rainbow {
    RED = "red",
    ORANGE = 'orange',
    YELLOW = "yellow",
    GREEN = "green",
    BLUE = "blue",
    INDIGO = 'indigo',
    VIOLET = "violet" 
}

type LabeUser =  {
    class: Rainbow
}
const Newton: LabeUser = {
    class: Rainbow.VIOLET
}