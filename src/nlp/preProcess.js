export function preProcess(userQuery) {
	const cleanQuery = userQuery.toLowerCase();
	const tokens = cleanQuery.split(/\s+/);
	const stopWords = [
		"a",
		"an",
		"the",
		"is",
		"in",
		"for",
		"my",
	];
	const filteredTokens = tokens.filter(
		(token) => !stopWords.includes(token)
	);
	const specialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g;
	const cleanedTokens = filteredTokens.map((token) =>
		token.replace(specialChars, "")
	);
	return cleanedTokens;
}
