const StringTrimmer = {
	removeParenthesesAndReturn: (text) => {
		return text.replace(/ *\([^)]*\) */g, "");
	},
};
export default StringTrimmer;
