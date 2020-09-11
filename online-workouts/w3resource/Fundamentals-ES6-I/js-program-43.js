// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Changes a function that accepts an array into a variadic function.              #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 12, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const collectInfo = (fn) => (...args) => fn(args);

const runTest = () => {
    const Pall = collectInfo(Promise.all.bind(Promise));
    let p1 = Promise.resolve(1);
    let p2 = Promise.resolve(2);
    let p3 = new Promise((resolve) => setTimeout(resolve, 2000, 3));
    Pall(p1, p2, p3).then(console.log);
};

runTest();