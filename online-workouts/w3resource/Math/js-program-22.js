// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Creates a UUID identifier.                                                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: November 2, 2020.                                                              #
// #                                                                                                    #
// ######################################################################################################

const create_UUID = () => {
    let dt = (new Date()).getTime();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

(function () {

    console.log(create_UUID());
    console.log(create_UUID());
    console.log(create_UUID());

})();