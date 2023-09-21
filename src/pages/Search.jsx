import { Footer } from "../components/Footer";

export const Search = () => {
	const chatMessages = [
		{
			sender: "Alice",
			text: "Hi there! How are you doing today?",
		},
		{
			sender: "Bob",
			text: "Hey Alice! I'm doing well, thanks. How about you?",
		},
		{
			sender: "Alice",
			text: "I'm good too, thanks for asking!",
		},
		{
			sender: "Bob",
			text: "That's great to hear. Did you have a good weekend?",
		},
		{
			sender: "Alice",
			text: "Yes, I had a fantastic weekend. I went hiking with some friends.",
		},
		{
			sender: "Bob",
			text: "Hiking sounds fun! I spent my weekend working on a coding project.",
		},
		{
			sender: "Alice",
			text: "Oh, that sounds interesting. Tell me more about it!",
		},
		{
			sender: "Bob",
			text: "Sure, it's a web application for managing tasks. I used React and Firebase for it.",
		},
		{
			sender: "Alice",
			text: "Hi there! How are you doing today?",
		},
		{
			sender: "Bob",
			text: "Hey Alice! I'm doing well, thanks. How about you?",
		},
		{
			sender: "Alice",
			text: "I'm good too, thanks for asking!",
		},
		{
			sender: "Bob",
			text: "That's great to hear. Did you have a good weekend?",
		},
		{
			sender: "Alice",
			text: "Yes, I had a fantastic weekend. I went hiking with some friends.",
		},
		{
			sender: "Bob",
			text: "Hiking sounds fun! I spent my weekend working on a coding project.",
		},
		{
			sender: "Alice",
			text: "Oh, that sounds interesting. Tell me more about it!",
		},
		{
			sender: "Bob",
			text: "Sure, it's a web application for managing tasks. I used React and Firebase for it.",
		},
		{
			sender: "Alice",
			text: "Wow, that sounds cool! I'd love to see it sometime.",
		},
		{
			sender: "Alice",
			text: "Hi there! How are you doing today?",
		},
		{
			sender: "Bob",
			text: "Hey Alice! I'm doing well, thanks. How about you?",
		},
		{
			sender: "Alice",
			text: "I'm good too, thanks for asking!",
		},
		{
			sender: "Bob",
			text: "That's great to hear. Did you have a good weekend?",
		},
		{
			sender: "Alice",
			text: "Yes, I had a fantastic weekend. I went hiking with some friends.",
		},
		{
			sender: "Bob",
			text: "Hiking sounds fun! I spent my weekend working on a coding project.",
		},
		{
			sender: "Alice",
			text: "Oh, that sounds interesting. Tell me more about it!",
		},
		{
			sender: "Bob",
			text: "Sure, it's a web application for managing tasks. I used React and Firebase for it.",
		},
	];

	return (
		<>
			<div className="search-wrapper">
				{chatMessages.map((message, index) => {
					return <p key={index}>{message.text}</p>;
				})}
			</div>
			<Footer />
		</>
	);
};
