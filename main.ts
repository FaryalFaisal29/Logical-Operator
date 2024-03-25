// (5>2) && (2>0) is true
// (5<0) || (2>0) is true
// !(5>0) is false

let a = 5
let b = 2
let logicalAnd = (a>0)&&(b>0); 
console.log(logicalAnd);

let logicalOr = (a<0)||(b>0);
console.log(logicalOr);

let logicalNot = !(a>0);
console.log(logicalNot);
