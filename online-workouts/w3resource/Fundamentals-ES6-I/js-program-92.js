// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates a function that gets the argument at index n.                           #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 17, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const nthArg = (n) => (...args) => args.slice(n)[0];

(() => {

    const third = nthArg(2);

    console.log(third(1, 2, 3));
    console.log(third(1, 2));

    const last = nthArg(-1);

    console.log(last(1, 2, 3, 4, 5));

})();