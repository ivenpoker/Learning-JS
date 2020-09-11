// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Replaces the names of multiple object keys with the values provided.            #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 10, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const renameKeys = (keysMap, obj) =>
    Object.keys(obj).reduce(
        (acc, key) => ({
            ...acc,
            ...{[keysMap[key] || key] : obj[key]}

        }),
        {}
    );
const runTests = () => {
    const obj = {name: 'Bobo', job: 'Programmer', shoeSize: 100};
    console.log('Original Object');
    console.log(obj);
    console.log('----------------------------------------------');
    const result = renameKeys({name: 'firstName', job: 'Actor'}, obj);
    console.log("New Object");
    console.log(result);
};

// Run program tests
runTests();