// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Initializes a 2D array of given width and height and value.                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 12, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const initialize2DArray = (width = 0, height = 0, init = 0) =>
    Array(height).fill('0').reduce((acc, _) =>
        ([
            ...acc,
            Array(width).fill(init)
        ]), []);

const runTests = () => {
    console.log(initialize2DArray(2, 2, 0));
    console.log(initialize2DArray(3, 3, 3));
};

runTests();