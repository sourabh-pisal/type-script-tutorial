export { }

//Number
let x: number = 50;
console.log(`Number ${x}`);

//String
let name = 'Sourabh';
console.log(`String ${name}`);

//Arrays
let numArrayTypeOne: number[] = [1, 2, 3];
let numArrayTypeTwo: Array<number> = [1, 2, 3];
console.log(`Array Type One ${numArrayTypeOne}`);
console.log(`Array Type Two ${numArrayTypeTwo}`);

//Tuple
let person: [string, number] = ['Sourabh', 28];
console.log(`Tuple ${person}`)

//Enum
enum Color { Red, Green, Blue };
let c: Color = Color.Blue;
console.log(`Enum ${c}`);

//Any Generally used from migrating from javascript
let randomValue: any;
randomValue = 50;
console.log(`RandomValue As Number ${randomValue}`);
randomValue = 'Sourabh';
console.log(`RandomValue As String ${randomValue}`);
randomValue = true;
console.log(`RandomValue As Boolean ${randomValue}`);

//Unknown Same as Any
let unknownType: unknown = 'Sourabh';
console.log(`Unknown Type ${unknownType}`);

//Type inference
let typeInference = 10;
//This will Not work -> typeInference = 'r';

//Multiple Types
let multipleType: number | boolean;
multipleType = 50;
console.log(`MultiType as Number ${multipleType}`);
multipleType = true;
console.log(`MultiType as Boolean ${multipleType}`);