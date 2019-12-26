// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Switches case of the minimum possible number of letters to make a given string  #
// #                     written in the uppercase or the lowercase.                                      #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 26, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let numberOfLowerCasesChars = (someStr) => {
    let cnt = 0;
    someStr.split('').forEach(function (char) {
        if (char === char.toLowerCase())
            cnt++;
    });
    return cnt;
};

let numberOfUpperCaseChars = (someStr) => {
    let cnt = 0;
    someStr.split('').forEach(function (char) {
        if (char === char.toUpperCase())
            cnt++;
    });
    return cnt;
};

let changeCase = (mainStr) => {
    let lowerCnt = numberOfLowerCasesChars(mainStr);
    let upperCnt = numberOfUpperCaseChars(mainStr);
    if (lowerCnt < upperCnt) {
        return mainStr.toUpperCase();
    } else {
        return mainStr.toLowerCase();
    }
};

let runTests = () => {
    console.log(changeCase("Write"));
    console.log(changeCase("PHp"));
    console.log(changeCase("This is JavaScript"))
};

// Run the test cases.
runTests();