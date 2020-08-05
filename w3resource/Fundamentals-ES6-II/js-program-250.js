// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Create an element from a string (without appending it to the document).	 	 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 05, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

const createElement = (str) => {
	const el = document.createElement("div");
	el.innerHTML = str;
	return el.firstElementChild;
};

(function () {

	const el = createElement(
		`<div class="container">
				<p>Hello!</p>
			 </div>`);
	console.log(el.className);

})();