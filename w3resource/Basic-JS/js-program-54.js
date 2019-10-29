// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Count number of vowels in string.                                              #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: October 29, 2019.                                                              #
// #                                                                                                    #
// ######################################################################################################

let vowels = 'aeiou';

function countVowels(mainString) {
    let cnt = 0;
    for (let x = 0; x < mainString.length; x++)
        if (vowels.indexOf(mainString[x]) >= 0)
            cnt++;
    return cnt;
}

function runTests() {
    let strA = "test";
    let strB = "This is a demo string";
    let strC = "Testing the function";
    let strD = '';

    console.log(`String A: ${countVowels(strA)} vowel(s)`);
    console.log(`String B: ${countVowels(strB)} vowel(s)`);
    console.log(`String C: ${countVowels(strC)} vowel(s)`);
    console.log(`String D: ${countVowels(strD)} vowel(s)`);
}

// Now, we run the tests

runTests();