// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether it is possible to replace $ in a specified expression.           #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 03, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let checkArithmeticExpression = (x, y, z) => {
    return x + y === z || x * y === z || x / y === z || x - y === z;
};

let runTests = () => {
    console.log(checkArithmeticExpression(10, 25, 35));
    console.log(checkArithmeticExpression(10, 25, 250));
    console.log(checkArithmeticExpression(30, 25, 5));
    console.log(checkArithmeticExpression(100, 25, 4.0));
    console.log(checkArithmeticExpression(100, 25, 25));
};

// Run the test cases ...
runTests();