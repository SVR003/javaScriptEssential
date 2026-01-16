var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
var blocVar = "I'm a block-scoped variable";
let blockLet = "I'm also block-scoped, but scoped with let";
const blockConst = "I'm a block-scoped constant";
}

// Global scope
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// Block scope
// console.log(blocVar);
// console.log(blockLet);


function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError