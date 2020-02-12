// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates an array of key-value pair array from a given object.                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 12, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const createArrayOfKeyValuePairs = (obj = {}) => {
    return Object.keys(obj).reduce((acc, key) =>
                ([
                    ...acc,
                    {[key]: obj[key]}
                ]), []);
};

const runTest = () => {
    const objA = {
        name: 'James',
        age: 56,
        occupation: 'SE'
    };
    const objB = {
        id: '1234',
        name: 'Jonathan',
        education: 'Masters'
    };
    console.log("Array for 'objA' => ", createArrayOfKeyValuePairs(objA));
    console.log("Array for 'objB' => ", createArrayOfKeyValuePairs(objB));
};

runTest();