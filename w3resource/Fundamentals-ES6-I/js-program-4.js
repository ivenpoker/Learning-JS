// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Converts a comma-separated values string to a 2D array of objects.              #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 04, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const csvToJSON = (data, delimiter=',') => {
    const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
    return data
        .slice(data.indexOf('\n') + 1)
        .split('\n')
        .map((v) => {
            const values = v.split(delimiter);
            return titles.reduce((obj, title, ind) => {
                obj[title] = values[ind];
                return obj;
            }, {});
        });
};

const runTests = () => {
    console.log(csvToJSON('col1,col2\na,b\nc,d'));
    console.log(csvToJSON('col1;col2\na;b\nc;d', ';'));
};

// Run test cases
runTests();