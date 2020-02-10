// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Sums a given array after mapping each element to a value using the provided
// #                     function.
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 10, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const mapAndSum = (data, func) => data.map((val) => func(val)).reduce((acc, val) => acc + val, 0);

const runTests = () => {

    const persons = [
        {name: 'Peter', age: 12},
        {name: 'Christa', age: 23},
        {name: 'Suzy', age: 67}
    ];
    const getAge = (person) => person.age;
    console.log('Age sum:', mapAndSum(persons, getAge));
};

runTests();