// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Chains asynchronous functions.                                                  #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 13, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const chainAsync = (fns) =>
    fns.forEach((func) => func());

const runTests = () => {
    chainAsync([
        () => {
            console.log('0 seconds');
            setTimeout(() => console.log('func 1'), 2000);
        },
        () => {
            console.log('1 second');
            setTimeout(() => console.log('func 2'), 1000);
        }
    ])
};

runTests();