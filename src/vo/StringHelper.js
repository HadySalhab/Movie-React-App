/*If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.*/
//https://reactjs.org/docs/composition-vs-inheritance.html
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
