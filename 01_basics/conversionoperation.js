let score="23abc";
console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);//converts any data type to mentioned dataype
console.log(typeof (valueInNumber));
console.log(valueInNumber); //output: NaN(Not a number)
/*if a variable having string is converted to number, output appears NaN,
while if a variable has null stored, output appears 0
if variable has undefined stored, output is NaN
boolean: 1 for true and 2 for false */

/*  to convert to Number
    "33"=> 33
    "33abc"=> NaN
    null=> 0
    undefined=> Nan
    true=> 1
    false=> 0 */

let isLoggedIn = 1;
let booleanNumber = Boolean(isLoggedIn);
console.log(booleanNumber); //prints true
/* to convert to boolean
    1 => true
    0 => false
    "" =>false
    "some string" =>true*/

let isNumber = 33;
let stringNumber = String(isNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
