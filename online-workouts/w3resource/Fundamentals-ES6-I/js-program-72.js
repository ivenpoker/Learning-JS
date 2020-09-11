// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Detect whether a website is being opened in a mobile device or a desktop/laptop #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 14, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        ? 'Mobile'
        : 'Desktop';

// RUN TESTS (should be done in the browser)

(() => {

    console.log('Device type:', detectDeviceType());

})();