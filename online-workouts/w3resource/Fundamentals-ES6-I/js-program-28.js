// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Measures the time taken by a function to execute.                               #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 10, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const timeTaken = (callback) => {
    return callback();
};
const runTests = () => {
    console.log('Time taken:', timeTaken(() => Math.pow(2, 10) + ' ms'));
    console.log('Time taken:', timeTaken(() => Math.sqrt(225) + ' ms'));
    console.log('Time taken:', timeTaken(() => Math.sqrt((5 *5) + (6 * 6))) + ' ms');
};

runTests();