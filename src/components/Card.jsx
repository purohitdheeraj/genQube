/* eslint-disable react/prop-types */
import { GrDownload, GrView } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export const Card = (props) => {
	const { result } = props;
	const navigate = useNavigate();

	// const viewDocument = () => {
	// 	navigate("/document-viewer", {
	// 		state: { downloadURL: result.downloadURL },
	// 	});
	// };

	const handleDownload = () => {
		// Create a hidden anchor element
		const link = document.createElement("a");
		link.href = result.downloadURL;
		link.target = "_blank"; // Open the link in a new tab
		link.download = "document.pdf"; // Set the desired file name here
		link.click(); // Simulate a click event to trigger the download
	};

	return (
		<div className="result-card">
			<h3 className="title">{result.title.slice(0, 16)}</h3>

			<p className="description">{result.description}</p>

			<div className="meta-data">
				<p className="category">{result.category}</p>
				<p className="name">Dheeraj Purohit</p>
			</div>

			<div className="btn-wrapper">
			

				<button onClick={handleDownload} className="btn">
					<GrDownload />
				</button>
			</div>
		</div>
	);
};
