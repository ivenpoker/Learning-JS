// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Breaks an address of an URL and put it's part into an array.                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 03, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const breakURL = (url) => {
    if (url.length === 0)
        return url;
    let sections = [];
    url.split('/').forEach((unit) => sections.push(unit));
    let temp = sections[0];
    sections = sections.slice(1);
    sections.push(temp.slice(0, temp.length-1));
    return sections.filter((item) => {
        return item.length > 0;
    });
};

const runTests = () => {
    let urlAdd = "https://www.w3resource.com/javascript-exercises/";
    console.log(`Original address: ${urlAdd}`);
    console.log(` Decomposed data: ${breakURL(urlAdd)}`);
};

// Run test program
runTests();