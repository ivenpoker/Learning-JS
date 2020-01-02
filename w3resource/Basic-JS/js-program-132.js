// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds all distinct prime factors of a given integer.                            #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 02, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const findAllFactors = (num) => {
    let facts = [1];
    for (let i = 2; i <= num/2; i++) {
        if (num % i === 0) {
            facts.push(i);      // found a factor
        }
    }
    facts.push(num);
    return facts;
};

const isPrime = (num) => {
    let facts = findAllFactors(num);
    return (facts.length === 2) && (facts[0] === 1) && (facts[1] === num);
};

const findAllDistinctPrimeFactors = (num) => {
    let allFacts = findAllFactors(num);
    let distinctFacts = [];

    allFacts.forEach((elem) => {
        if (isPrime(elem) && (distinctFacts.indexOf(elem) < 0)) {
            distinctFacts.push(elem);   // add distinct prime for 'num'
        }
    });

    // based on the problem we've got to remove '1' for solution set
    return distinctFacts.slice(1);
};

const runTests = () => {
    console.log(findAllDistinctPrimeFactors(100));
    console.log(findAllDistinctPrimeFactors(101));
    console.log(findAllDistinctPrimeFactors(103));
    console.log(findAllDistinctPrimeFactors(104));
    console.log(findAllDistinctPrimeFactors(105));
};

// Run tests for this script
runTests();