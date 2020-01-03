// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Converts comma-separated values (CSV) string to 2D-array.                       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 03, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const csvToArray = (data, delimiter =',', omitFirstRow = false) => {
    return data.slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
        .split('\n')
        .map((v) => v.split(delimiter));
};

const runTests = () => {
    console.log(csvToArray('a,b\nc,d'));
    console.log(csvToArray('a;b\nc;d', ';'));
    console.log(csvToArray('head1,head2,\na,b\nc,d', ',', true));
};

// Run test cases.
runTests();