
// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Filters out non-unique values in an array based on a provided comparator        #
// #                     function.                                                                       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 10, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const filterOutBasedOnFunc = (arr, compareFunc) => arr.reduce((acc, data) => {
    try {
        acc.forEach((accData) => {
            if (compareFunc(data, accData) === 0) {
                throw true
            }
        })
    } catch (e) {
        return acc
    }
    return [...acc, data];
}, []);

const runTests = () => {
    const persons = [
        {name: 'James', age: 12},
        {name: 'Peter', age: 25},
        {name: 'Suzanne', age: 19},
        {name: 'Smith', age: 5},
        {name: 'James', age: 5},
        {name: 'James', age: 9},
        {name: 'Martha', age: 12},
        {name: 'Rodriguez', age: 56},
        {name: 'Anderson', age: 27},
        {name: 'Jones', age: 26},
    ];

    const filteredByUniqueAge = filterOutBasedOnFunc(persons, (pA, pB) => pA.age - pB.age);
    console.log('Filtered By Unique Age:\n', filteredByUniqueAge);

    const filteredByUniqueName = filterOutBasedOnFunc(persons, (pA, pB) => pA.name === pB.name ? 0 : -1);
    console.log('Filtered By Unique Name:\n', filteredByUniqueName);


};

runTests();