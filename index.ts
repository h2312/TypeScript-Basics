// async function hello() {
//     return "word";
// }

// const url = new URL('x') 

// let randomNum = 23; // implicit

// let randomNum: number; // explicit

// // custom type:
// type Style = string;
// type Style = 'bold' | 'italic' | 23;
// let font: Style;

// // interface
// interface Person {
//     first: string;
//     last: string;
//     [key: string]: any;
// }
// const person1: Person = {
//     first: "Jeff",
//     last: "Delaney"
// }
// const person2: Person = {
//     first: "Usain",
//     last: "Bolt",
//     fast: true
// }

// // function
// function pow(x: number, y: number): string {
//     return Math.pow(x, y).toString();
// } 
// pow(5,10); 
// function pow(x: number, y: number): void {
//     Math.pow(x, y).toString();
// } 

// // Arrays
// const arr: number[] = [];
// arr.push(1)
// arr.push('23')
// arr.push(false)

// const arr : People[] = [];

// type MyList = [number?, string?, boolean?] // '?' making value is optional
// const arr: MyList = [];

// Generics
class Observable<T> {
    constructor(public value: T) {}
}

let x : Observable<number>;
let y : Observable<Person>;
let z = new Observable(23);




