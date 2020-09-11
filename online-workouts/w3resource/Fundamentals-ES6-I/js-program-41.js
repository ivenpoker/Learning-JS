// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates an object from the given key-value pairs.                               #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 12, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const createObjectFromKeyValuePairs = (keyValuePairs = []) => {
    return keyValuePairs.reduce((acc, keyValuePair) =>
        ({
            ...acc,
            [keyValuePair[0]]: keyValuePair[1]
        }), {})
};

const runTest = () => {
    console.log(createObjectFromKeyValuePairs([['a', 1], ['b', 2]]));
    console.log(createObjectFromKeyValuePairs([[1, 10], [2, 20], [3, 30]]));
};

runTest();