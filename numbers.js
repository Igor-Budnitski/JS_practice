/*Numbers*/
let num = Number('10');
console.log(`Passing string as number ${Number('10')}`);
console.log(`Passing number ${Number(10)}`);
console.log(`Passing boolean ${Number(false)}`);
console.log(`Passing boolean ${Number(true)}`);
console.log(`Passing null ${Number(null)}`);

let tenObject = new Number( 10 );

tenObject += 5;
console.log(tenObject);

console.log(tenObject === 10);
console.log(tenObject);

console.log((0.1 + 0.7).toFixed(1));