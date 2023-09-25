import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Card } from "../components";
import { onSnapshot } from "firebase/firestore";
import { docsCollection } from "../../firebase/firebase-config";

export const Search = () => {
	const [searchResults, setSearchResults] = useState([]);
	const [docs, setDocs] = useState([]);

	const addEntryToSearchResults = (result) => {
		// console.log("got the data");
		setSearchResults(result);
	};

	useEffect(() => {
		console.log("loading docs");
		const unsubscribe = onSnapshot(
			docsCollection,
			function (snapshot) {
				const docsArr = snapshot.docs.map((doc) => {
					return { ...doc.data(), id: doc.id };
				});

				setDocs(docsArr);
			}
		);

		return () => unsubscribe;
	}, []);

	return (
		<>
			<div className="search-wrapper">
				{docs.length === 0 ? (
					<>
						<p>
							No Documents in Database please upload your
							documents
						</p>
					</>
				) : (
					<p>
						Hurray! search your docs with nlp based search
					</p>
				)}

				{searchResults.map((result) => {
					return (
						<Card result={result} key={result.userId} />
					);
				})}
			</div>
			<Footer
				addEntryToSearchResults={addEntryToSearchResults}
			/>
		</>
	);
};
