// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Removes HTML/XML tags from string.												 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: June 10, 2020.                                                                  #
// #                                                                                                     #
// #######################################################################################################

const removeTags = (htmlOrXml) => {
	htmlOrXml = htmlOrXml.trim();
	let tagStartIdx = htmlOrXml.indexOf("<");

	while (tagStartIdx >= 0) {
		let tagEndIdx = htmlOrXml.indexOf(">");

		 if (tagEndIdx < 0) {
		 	throw new Error("Malformed HTML/XML string");
		 }

		let htmlOrXmlStr = htmlOrXml.substr(tagStartIdx, (tagEndIdx - tagStartIdx) + 1);
		htmlOrXml = htmlOrXml.replace(htmlOrXmlStr, "");

		tagStartIdx = htmlOrXml.indexOf("<");
	}
	return htmlOrXml;
};

const stripHTMLTags = (str) => str.replace(/<[^>]*>/g, '');

(function () {

	const htmlStr = "<p><em>lorem</em> <strong>ipsum</strong></p>";

	console.log(removeTags(htmlStr));
	console.log(stripHTMLTags(htmlStr));

})();