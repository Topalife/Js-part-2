//strict mode
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');
*/

//functions
/*
function logger() {
    console.log('My name is Pavel');
}
//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

//functions declaration
/*

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// function expretion --- prefear(more nicer code)
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

const age2 = calcAge2(1991);

console.log(age1, age2);


//Arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Pavel'));
console.log(yearsUntilRetirement(1980, 'Maryna'));
*/

//Functions Calling Other Functions
/*
function cutPieces(fruit) {
    return fruit * 4;
};

function fruitProcessor(apples, oranges) {

    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
};

console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (year) {
    return 2037 - year;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
            ;
        return -1;

    }
}

console.log(yearsUntilRetirement(1991, 'Pavel'));
console.log(yearsUntilRetirement(1950, 'Bob'));
*/

//
/*
Back to the two gymnastics teams, the Dolphins and the Koalas!
There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//test 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}) `);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins ...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

//Test 2
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

//Arrays
/*
const friend1 = 'Pavel';
const friend2 = 'Bob';
const friend3 = 'Steve'

const friends = ['Pavel', 'Bob', 'Steve']
console.log(friends);

const years = new Array(1991, 1944, 2009, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
*/

//Array operations
/*
const friends = ['Michael', 'Steven', 'Peter'];

// add elements

const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//remove elements
friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //firsr
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
*/

//Coding challenge #2
//Steven is still building his tip calculator, using the same rules as before: 
//Tip 15% of the bill if the bill value is between 50 and 300, and if the value is 
//different, the tip is 20%.
//Your tasks:
//1. Write a function 'calcTip' that takes any bill value as an input and returns
//the corresponding tip, calculated based on the rules above (you can check out
//the code from first tip calculator challenge if you need to). Use the function
//type you like the most. Test the function using a bill value of 100
//2. And now let's use arrays! So create an array 'bills' containing the test data
//below
//3. Create an array 'tips' containing the tip value for each bill, calculated from
//the function you created before
//4. Bonus: Create an array 'total' containing the total values, so the bill + tip
//Test data: 125, 555 and 44
//Hint: Remember that an array needs a value in each position, and that value can
//actually be the returned value of a function! So you can just call a function as array
//values (so don't store the tip values in separate variables first, but right in the new
//array) �


/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
*/

//Objects
/*
const pavelArray = [
    'Pavel',
    'Tyshchenko',
    2037 - 1991,
    'courier',
    ['John', 'Petr', 'Jirka']
];

const pavel = {
    firstName: 'Pavel',
    lastName: 'Tyshhenko',
    age: 2037 - 1991,
    job: 'courier',
    friends: ['John', 'Petr', 'Jirka']
};
*/
//Dot vs Bracket Notation
/* const pavelArray = [
    'Pavel',
    'Tyshchenko',
    2037 - 1991,
    'courier',
    ['John', 'Petr', 'Jirka']
];

const pavel = {
    firstName: 'Pavel',
    lastName: 'Tyshchenko',
    age: 2037 - 1991,
    job: 'courier',
    friends: ['Bob', 'Petr', 'Jirka']
};

console.log(pavel);

console.log(pavel.lastName);
console.log(pavel['lastName']);

const nameKey = 'Name';
console.log(pavel['first' + nameKey]);
console.log(pavel['last' + nameKey]);

const interestedIn = prompt('What do u want to know about Pavel? choose between firstName, lastName, age, job, and friends');
console.log(pavel[interestedIn]);


if (pavel[interestedIn]) {
    console.log(pavel[interestedIn]);
} else {
    console.log('Wrong request!Choose between firstName, lastName, age, job, and frineds');
}

pavel.location = 'Czech';
pavel['twitter'] = '@paveltyshchenko';
console.log(pavel);

//Challenge
//"Pavel has 3 friends, and the best friend is called bob"

console.log(`${pavel.firstName} has ${pavel.friends.length} friends, and his best friend is called ${pavel.friends[0]}`);
 */

// Object methods

/* const pavel = {
    firstName: 'Pavel',
    lastName: 'Tyshchenko',
    birthYear: 1989,
    job: 'courier',
    friends: ['Bob', 'Petr', 'Jirka'],
    hasDriversLicense: true,

    //calcAge: function (birthYear) {
    //    return 2037 - birthYear;
    // }

    calcAge: function () {
        console.log(this);
        return 2020 - this.birthYear;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} - year old ${pavel.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license `
    }
};

console.log(pavel.calcAge());

//Challenge
//"Pavel is a 31 year old courier, and he has a drivers Licence"

console.log(pavel.getSummary());
 */

//Coding challenge #3

//Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
//implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
//Your tasks:
//1. For each of them, create an object with properties for their full name, mass, and
//height(Mark Miller and John Smith)
//2. Create a 'calcBMI' method on each object to calculate the BMI(the same
//method on both objects).Store the BMI value to a property, and also return it
//from the method
//3. Log to the console who has the higher BMI, together with the full name and the
//respective BMI.Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
//Test data: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m
//tall.

/* const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s.bmi (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
} */


//Loops
/* console.log('Ligting weights repetition 1');
console.log('Ligting weights repetition 2');
console.log('Ligting weights repetition 3');
console.log('Ligting weights repetition 4');
console.log('Ligting weights repetition 5');
console.log('Ligting weights repetition 6');
console.log('Ligting weights repetition 7');
console.log('Ligting weights repetition 8');
console.log('Ligting weights repetition 9');
console.log('Ligting weights repetition 10');


//for loop keeps running while condition TRUE
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
} */

// looping array

/* const pavel = [
    'Pavel',
    'Tyshchenko',
    2037 - 1991,
    'courier',
    ['John', 'Petr', 'Jirka'],
    true
];

const types = [];
// console.log(pavel[0])
// console.log(pavel[1])
// ...
// console.log(pavel[4])
//pavel[5] does not exist


for (let i = 0; i < pavel.length; i++) {
    //reading from pavel array
    console.log(pavel[i], typeof pavel[i]);
    // Filling types array
    // types[i] = typeof pavel[i];
    types.push(typeof pavel[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and brake
console.log('---ONLY STRINGS---')
for (let i = 0; i < pavel.length; i++) {
    if (typeof pavel[i] !== 'string') continue;
    console.log(pavel[i], typeof pavel[i]);
}

console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < pavel.length; i++) {
    if (typeof pavel[i] === 'number') break;
    console.log(pavel[i], typeof pavel[i]);
}
 */
//Looping backwards
/* const pavel = [
    'Pavel',
    'Tyshchenko',
    2037 - 1991,
    'courier',
    ['John', 'Petr', 'Jirka'],
    true
];
for (let i = pavel.length - 1; i >= 0; i--) {
    console.log(i, pavel[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------Starting exercise ${exercise}
    `);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exersice}: Lifting weight repetition ${rep}
        `);
    }
} */

//While Loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repetition ${rep}
//    `);
//}

/* let rep = 1;
while (rep <= 10) {
    //console.log(`While:Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;


while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
} */

//Coding challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

/* const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips)); */