// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Compares two objects to determine if the first one contains equivalent property #
// #                     values to the second one.                                                       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 03, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const matches = (objA, objB) => {
    return Object.keys(objA).every((key) => {
        return objB.hasOwnProperty(key) && objA[key] === objB[key];
    });
};

const runTests = () => {
    console.log(matches({age: 25, hair: 'long', beard: true}, {hair: 'long', bread: true}));
    console.log(matches({hair: 'long', beard: true}, {age: 25, hair: 'long', beard: true}));
    console.log(matches({hair: 'long', beard: true}, {age: 26, hair: 'long', beard: true}));
};

// Run test program
runTests();