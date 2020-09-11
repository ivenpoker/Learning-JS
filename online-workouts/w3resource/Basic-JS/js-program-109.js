// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Sorts an array of all prime numbers between 1 and a given integer.              #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 30, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let isPrime = (num) => {
    if (num < 1) return false;
    if (num === 1) return true;

    let facts = getFactors(num);
    return (facts.length === 2) && (facts[0] === 1) &&
        (facts[1] === num);
};

let getFactors = (num) => {
    let facts = [1];
    for (let i = 2; i <= num/2; i++) {
        if (num % i === 0) {
            facts.push(i);
        }
    }
    facts.push(num);
    return facts;
};

let sortPrime = (high) => {
    if (high < 1) return [];
    let oddNums = [];
    for (let i = 1; i <= high; i++) {
        if (isPrime(i)) {
            oddNums.push(i);
        }
    }
    // At this point we've obtained the odd numbers, let's sort them
    oddNums.sort((a, b) => {
        return a - b;
    });
    return oddNums;

};

let runTests = () => {
    console.log(sortPrime(5));
    console.log(sortPrime(11));
    console.log(sortPrime(19));
};

// Run the test program now
runTests();