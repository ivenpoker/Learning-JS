// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Tests a value, x, against a predicate function.                                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 20, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const when = (pred=f=>f, whenTrue=f=>f) =>
    (x) => (pred(x) ? whenTrue(x) : x);

(() => {

    const doubleEvenNumbers = when((x) => x % 2 === 0, (x) => x * 2);

    console.log(doubleEvenNumbers(2));
    console.log(doubleEvenNumbers(1));

})();
