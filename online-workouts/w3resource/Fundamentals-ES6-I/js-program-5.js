// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Converts an array of objects to a comma-separated values (CSV) string that      #
// #                     contains only the columns specified.                                            #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 04, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const jsonToCSV = (arr, columns, delimiter=',') => {
    return [
        columns.join(delimiter),
        ...arr.map((obj) => {
            columns.reduce(
                (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
                ''
            )
        })
    ].join('\n');
};

const runTests = () => {
    console.log(jsonToCSV([{x: 100, y: 200}, {x: 300, y: 400, z: 500}, {x:6}, {y: 7}], ['x', 'y']));
    console.log(jsonToCSV([{x: 100, y: 200}, {x: 300, y: 400, z: 500}, {x:6}, {y: 7}], ['x', 'y'], ';'));
};

// Run the program now
runTests();