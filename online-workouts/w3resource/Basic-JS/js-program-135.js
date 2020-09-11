// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Removes all characters from a given string that appears more than once.         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 02, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const removeDuplicateChars = (mainStr) => {
    let nonDups = '';
    mainStr.split('').forEach((char) => {
        let ind = nonDups.indexOf(char);
        if (ind < 0) {
            nonDups += char;
        } else {
            nonDups = nonDups.slice(0, ind) + nonDups.slice(ind+1);
        }
    });
    return nonDups;
};

const runTests = () => {
    console.log(removeDuplicateChars('abcdabc'));
    console.log(removeDuplicateChars('python'));
    console.log(removeDuplicateChars('abcabc'));
    console.log(removeDuplicateChars('1365451'));
};

// Run the script test program
runTests();