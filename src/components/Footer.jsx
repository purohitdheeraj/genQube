// import { IoSend } from "react-icons/io";
import { AiOutlineSend } from "react-icons/ai";

export const Footer = () => {
	return (
		<main className="footer">
			<input
				type="text"
				name="search-docs"
				placeholder="search your docs"
				className="input-search-docs"
			/>
			<button className="btn btn-send">
				<AiOutlineSend size="2em" />
			</button>
		</main>
	);
};
