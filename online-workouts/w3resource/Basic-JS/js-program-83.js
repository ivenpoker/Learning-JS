// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the longest string in an array of strings.                                #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: November 30, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let findLongestString = function (data) {
    if (!Array.isArray(data)) {
        throw new TypeError(`Invalid argument type. Expected array got '${typeof(data)}'`);
    }
    let longInd = 0;
    data.forEach(function (elem, ind) {
        if (elem.length > data[longInd].length)
            longInd = ind;
    });
    return data[longInd];
};

let runTests = function () {
    let case1 = ['a', 'aa', 'aaa', 'aaaaa', 'aaaa'];
    let case2 = ['james', 'bro', 'case', 'life', 'jim'];

    console.log(`Longest element in array A: ${findLongestString(case1)}`);
    console.log(`Longest element in array B: ${findLongestString(case2)}`);

};

// Run test cases ....
runTests();