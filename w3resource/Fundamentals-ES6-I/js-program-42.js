// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets a customized coalesce function that returns the first argument that        #
// #                     returns true from the provided argument validation function.                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 12, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const coalesceFactory = (valid) => (...args) => args.find(valid);


const runTest = () => {
    const customCoalesce = coalesceFactory(_ => ![null, undefined, '', NaN].includes(_));
    console.log(customCoalesce(undefined, null, NaN, '', 'Waldo'));
};

runTest();