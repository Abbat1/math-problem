// Chosen numbers that have to total 50!/
const n1 = 5;
const n2 = 15;
const n3 = 20; 
const n4 = 10;
/* 9+4+27+10=50. Also const before (n1) is so that the values cannot change */

/* under this line shows how each value adds up to 50*/
const isSum50 = (n1 + n2 + n3 + n4) ==50;

console.log(`Does the Sum of all 4 numbers total 50? ${isSum50}`);
console.log(`Does the remainder of this equation total 0? ${isSum50}`);
console.log(`Are all numbers divisible by 5%` )
/* under this shows how we subtracted n1 and n 2, then took the remainder and multiplied it by n3. finally we took the remainder and divided by n4*/
const result = (((n1 - n2) * n3) % n4)


const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;


const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;

const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;


console.log(isValid);

const distance = 1500;
const fuel_budget = 175;
const average_fuel_price = 3;

 const mph75 = 65.21 * 3; /*75 mph will get you there in 20 hours and will cost you 195.63*/
 const mph60 = 53.57 * 3; /* 60 mph will get you there in 25 hours and cost you 160.71*/
 const mph55 = 55 * 3; /* 55 mph will get you there in 27.27 hrs and will cost you 165*/
 console.log(`${mph60} is the price of fuel for trip at 760mph`);
 console.log(`${mph75} Price of fuel for trip at 75mph`);
 console.log(`${mph55} is the price of feul for the trip at 55 mph`);

const mpg30 = distance / 30;
const mpg28 = distance / 28;
const mpg23 = distance / 23;
console.log(`${mpg23} total gallons of fuel needed`);
console.log(`${mpg28} total gallons of fuel needed`);
console.log(`${mpg30} total gallons of fuel needed `);
console.log(`only two of the three methods work with your budget. 55mph, with 30 mpg. And 60mph, with 28 mpg.`);
 
console.log(`The most suitable route would be 55 miles per hour at 30 miles per gallon. Although it would take a bit longer, you are saving money on gas`);
