// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Rearranges characters of a given string in such a way that it will become equal #
// #                     to another given string.                                                        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 26, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let rearrangementOfCharacters = (strA, strB) => {
    let first_set = strA.split('');
    let second_set = strB.split('');
    let result = true;

    first_set.sort();
    second_set.sort();

    for (let i = 0; i < Math.max(first_set.length, second_set.length); i++) {
        if (first_set[i] !== second_set[i]) {
            result = false;
        }
    }
    return result;
};

let runTest = () => {
    console.log(rearrangementOfCharacters("xyz", "zyx"));
    console.log(rearrangementOfCharacters("xyz", "zyp"));
};

// Run the test cases
runTest();