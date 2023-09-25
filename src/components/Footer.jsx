/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { query, where, getDocs } from "firebase/firestore";
import { docsCollection } from "../../firebase/firebase-config";

export const Footer = (props) => {
	const { addEntryToSearchResults } = props;
	const [searchQuery, setSearchQuery] = useState("");

	const preprocessQuery = (query) => {
		return query
			.toLowerCase()
			.replace(/[^a-zA-Z0-9 ]/g, "");
	};

	const recognizeIntentAndEntity = (query) => {
		let action = "";
		let targetEntity = "";

		const words = query.split(" ");
		for (const word of words) {
			if (["fetch", "retrieve", "get"].includes(word)) {
				action = word;
			} else if (
				["resume", "report", "file"].includes(word)
			) {
				targetEntity = word;
			}
		}

		return { action, targetEntity };
	};

	async function performSearch(e) {
		e.preventDefault();

		const cleanedQuery = preprocessQuery(searchQuery);

		const { action, targetEntity } =
			recognizeIntentAndEntity(cleanedQuery);

		const searchTerms = [action, targetEntity]
			.filter(Boolean)
			.join(" ");

		console.log(action);
		console.log(targetEntity);

		const q = query(
			docsCollection,
			where("title", "==", targetEntity)
		);

		try {
			const querySnapshot = await getDocs(q);

			const searchResults = [];
			querySnapshot.forEach((doc) => {
				const data = doc.data();
				searchResults.push(data);
			});

			addEntryToSearchResults(searchResults);
		} catch (error) {
			console.error("Error Performing search", error);
		}

		setSearchQuery("");
	}

	return (
		<main className="footer">
			<form
				className="footer search-form"
				onSubmit={performSearch}
			>
				<input
					type="text"
					name="search-docs"
					placeholder="get my resume (try this prompt)"
					className="input-search-docs"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<button type="submit" className="btn btn-send">
					<AiOutlineSend size="2em" />
				</button>
			</form>
		</main>
	);
};
