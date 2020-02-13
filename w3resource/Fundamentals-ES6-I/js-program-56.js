// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Joins all given URL segments together, then normalizes the resulting URL.       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 13, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const URL_join = (...args) =>
    args
        .join('/')
        .replace(/[\/]+/g, '/')
        .replace(/^(.+):\//, '$1://')
        .replace(/^file:/, 'file:/')
        .replace(/\/(\?|&|#[^!])/g, '$1')
        .replace(/\?/g, '&')
        .replace('&', '?');

const runTests = () => {
    console.log(URL_join('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo'))
};

runTests();