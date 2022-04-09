let number = 50;//type in this variable the up to what number you want the prime numbers
let dividers = 0;
let count;
let higherNumber = 0;
let cousins = [];

for (let index = 1; index <= number; index += 1) { //to count from 1 to the entry number
    count = index;

    if (dividers === 2) { //to check if the number of divisors is equal to 2, if so the count will push the number into the cousins array
        cousins.push(count - 1); //this -1 is because the count will be with the next value to be divided and we want the value that has already been divided
    }

    dividers = 0; //to reset the value of the amount of divisors

    for (let index2 = 0; index2 <= count; index2 += 1) { //to divide the number that will be in the count by 0 to itself
        if (count % index2 === 0) {
            dividers += 1; //add +1 to the divisor, if it goes beyond 2 dividers it means it's not prime
        }
    }
}

for (index4 = 0; index4 < cousins.length; index4 += 1){ //to loop through the prime array and compare which one is the mayr
    if (higherNumber < cousins[index4]) {
        higherNumber = cousins[index4];
    }
}

let toString = cousins.toString(""); //transforming array into string

console.log("The prime numbers from 1 to " + number + " are: " + cousins + "."); //printing cousin numbers
console.log("The largest prime number among these is: " + higherNumber + "."); //printing the largest number among them