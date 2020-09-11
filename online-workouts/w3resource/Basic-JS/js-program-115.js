// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Check whether a matrix is a diagonal matrix or not.                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 30, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let isDiagonalMatrix = (matrix) => {
    if (!Array.isArray(matrix))
        throw new TypeError(`Invalid  arguments. Expected 'array' got '${typeof(matrix)}'`);

    for (let i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i])) {
            throw new TypeError(`Invalid array content. Must be an array and not ${typeof(matrix[i])}`);
        }
        for (let j = 0; j < matrix[i].length; j++) {
            if ((i !== j) && (matrix[i][j] !== 0)) {
                return false;
            }
        }
    }
    return true;
};

let runTests = () => {
    console.log(isDiagonalMatrix([[1, 0, 0], [0, 2, 0], [0, 0, 3]]));
    console.log(isDiagonalMatrix([[1, 0, 0], [0, 2, 3], [0, 0, 3]]));
};

// run tests
runTests();