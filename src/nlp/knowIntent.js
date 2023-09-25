import nlp from "compromise/three";

export function knowIntent(query) {
	const doc = nlp(query);
	const intent = doc.verbs().toTitleCase().out("array")[0];
	const entity = doc.nouns().toTitleCase().out("array")[0];


	return {
		cleanedText: doc.text(),
		intent,
		entity,
	};
}
