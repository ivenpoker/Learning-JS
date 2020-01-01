// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether a matrix is an identity matrix or not.                           #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 01, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

let errorHandler = (matrix) => {
    if (!Array.isArray(matrix))
        throw new TypeError(`Invalid object type. Expected 'array' got '${typeof(matrix)}'`);
};

let isIdentityMatrix = (matrix) => {
    errorHandler(matrix);
    for (let i = 0; i < matrix.length; i++) {
        errorHandler(matrix[i]);
        for (let j = 0; j < matrix[i].length; j++) {
            if ((i === j && matrix[i][j] !== 1) || (i !== j && matrix[i][j] !== 0))
                return false;
        }
    }
    return true;
};

let runTests = () => {
    console.log(isIdentityMatrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]));
    console.log(isIdentityMatrix([[1, 0, 1], [0, 1, 0], [0, 0, 1]]));
};

// Run test program
runTests();