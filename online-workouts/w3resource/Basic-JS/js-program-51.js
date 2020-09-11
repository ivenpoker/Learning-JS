// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Converts a number to hours and minutes.                                        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: October 29, 2019.                                                              #
// #                                                                                                    #
// ######################################################################################################

let convert = (someNum) => {
    if (typeof(someNum).toString().indexOf('number') < 0)
        throw new TypeError("Invalid parameter. A number needed");
    if (someNum < 0)
        throw new TypeError('Only positive numbers accepted');
    let time = {
        hours: 0,
        mins: 0,
        toString: function() {
            return `${this.hours} hour(s) and ${this.mins} minute(s)`;
        }
    };
    while (someNum >= 60) {
        time.mins += 1;
        someNum -= 60;
    }
    while (time.mins >= 60) {
        time.mins -= 60;
        time.hours += 1;
    }
    return time;

};

let runTests = () => {
    console.log(`${convert(1233)}`);
    console.log(`${convert(18293)}`);
    console.log(`${convert(1441)}`);
};

runTests();