// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Performs string monetary sum.                                                  #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: November 2, 2020.                                                              #
// #                                                                                                    #
// ######################################################################################################

const mainOpTypes =  {
    ADD: "ADD",
    SUB: "SUB",
    MUL: "MUL",
    DIV: "DIV"
};

const performMonetarySum = (monA, monB, opType = mainOpTypes.ADD) => {
    const monADblVal = Number.parseFloat(monA.substr(1));
    const monBDblVal = Number.parseFloat(monB.substr(1));

    if (Object.keys(mainOpTypes).includes(opType)) {
        if (opType === mainOpTypes.ADD) {
            return `$${monADblVal + monBDblVal}`;

        } else if (opType === mainOpTypes.SUB) {
            return `$${monADblVal - monBDblVal}`;

        } else if (opType === mainOpTypes.MUL) {
            return `$${monADblVal * monBDblVal}`;

        } else if (opType === mainOpTypes.DIV) {
            return `$${monADblVal / monBDblVal}`;

        }
    } else {
        return "[invalid-operation]"
    }

    return `$${monADblVal + monBDblVal}`;
}

(function () {

    console.log(performMonetarySum("$40.24", "$21.57"));
    console.log(performMonetarySum("$40.24", "$21.57", mainOpTypes.MUL));
    console.log(performMonetarySum("$40.24", "$21.57", mainOpTypes.DIV));
    console.log(performMonetarySum("$40.24", "$21.57", mainOpTypes.SUB));
    console.log(performMonetarySum("$56.24", "$250.99"));

})();