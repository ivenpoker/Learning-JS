// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Checks if a string contains equal number of p's and t's.                       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: October 29, 2019.                                                              #
// #                                                                                                    #
// ######################################################################################################

function countOccurrences(mainStr, char) {
    let cnt = 0;
    for (let x = 0; x < mainStr.length; x++)
        if (mainStr[x] === char)
            cnt += 1;
    return cnt;
}

function containEqual(mainStr, charA, charB) {
    let valA = countOccurrences(mainStr, charA);
    let valB = countOccurrences(mainStr, charB);

    return valA === valB;
}

function runTests() {
    console.log(containEqual("paatpss", 'p', 't'));
    console.log(containEqual("paatps", 'p', 't'));
}

// Now, lets run our tests.

runTests();