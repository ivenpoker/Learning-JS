// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the smallest prime number strictly greater than a given number.           #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 02, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const factors = (num) => {
   let facts = [1];
   for (let i = 2; i <= num/2; i++) {
       if (num % i === 0) {
           facts.push(i);   // found a prime number
       }
   }
   facts.push(num); // every number is factor of itself.
   return facts;
};

const findSmallestPrimeGreaterThanNumber = (num) => {
    for (let i = num+1;; i++) {
        let facts = factors(i);
        if (facts.length === 2 && (facts[0] === 1) && (facts[1] === i)) {
            return i;
        }
    }
};

const runTests = () => {
    console.log(findSmallestPrimeGreaterThanNumber(3));
    console.log(findSmallestPrimeGreaterThanNumber(17));
};

// Run test cases for program
runTests();
