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



/* EXERCICIO 2 */
/* A */
function sum(a: number, b:number ):number {
    return (a+b)
}

/* B */
function sub(a: number, b: number):number {
    return (a-b)
}

/* C */
function mult(a: number, b: number):number {
    return (a*b)
}

/* D */
function itsBigger(a: number, b: number):number | boolean {
    if(a > b){
        return true
    }
    else{
        return false
    }
}


/* EXERCICIO 3 */
const array: number[] = [1,2,3,4,5,6,7,8,9]

function obj():number[]{
    return 
}


/* EXERCICIO 4 */
type personPost = {
    name: string,
    post: string
}

const listPost: personPost = []

function posts(): [] {

} 


/* EXERCICIO 5  */