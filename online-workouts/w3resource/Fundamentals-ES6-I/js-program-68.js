// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Accepts a converging function and a list of branching functions and returns     #
// #                     a function that applies each branching function to the arguments and the        #
// #                     results of the branching functions are passed as arguments to the converging    #
// #                     function.                                                                       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 14, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const converge = (converger, fns) => (...args) => converger(...fns.map(fn => fn.apply(null, args)));

const runTests = () => {
    const average = converge((a, b) => a / b, [
        (arr) => arr.reduce((a, v) => a + v, 0),
        (arr) => arr.length
    ]);
    console.log(average([6, 7]));
    console.log(average([1, 2, 3, 4, 5, 6, 7]));
};

runTests();