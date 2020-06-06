const StringHelper = {
	removeParenthesesAndReturn: (text) => {
		return text.replace(/ *\([^)]*\) */g, "");
	},
	replaceWhiteSpacesWithDash: (text) => {
		return text.replace(/\s+/g, "-").toLowerCase();
	},
	splitStringAtDashAndReturnFirstItem: (text) => {
		return text.split("-")[0];
	},
};
export default StringHelper;
