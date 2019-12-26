// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Find the shortest possible string which can create a string to make it a palin- #
// #                     drome by adding characters to the end of it.                                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 26, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let buildPalindrome = (newStr) => {
    let flag;
    for (let i = newStr.length; ; i++) {
        flag = true;
        for (let j = 0; j < i-j-1; j++) {
            if (i-j-1 < newStr.length && newStr[j] !== newStr[i-j-1]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            for (let j = newStr.length; j < i; j++) {
                newStr += newStr[i-j-1];
            }
            return newStr;
        }
    }
};

let runTest = () => {
    console.log(buildPalindrome("abcddc"));
    console.log(buildPalindrome("122"));
};

// Run test cases for the program
runTest();