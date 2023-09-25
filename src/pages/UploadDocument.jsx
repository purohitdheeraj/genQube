import { useRef, useState } from "react";
import { uploadDocument } from "../../firebase/firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UploadDocument = () => {
	const [file, setFile] = useState(null);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const fileInputRef = useRef(null);

	const handleFileChange = (e) => {
		const selectedFile = e.target.files[0];
		setFile(selectedFile);
	};

	const clearFileInput = () => {
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!file || !title) {
			alert("Please fill in all required fields.");
			return;
		}

		const newDocument = {
			file,
			title,
			description,
			category,
		};

		console.log("New Document:", newDocument);

		try {
			const downloadURL = await uploadDocument(newDocument);
			toast("🦄 Document Uploaded!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				// progress: undefined,
				theme: "light",
			});

			setCategory("");
			setDescription("");
			// setFile('');
			clearFileInput();
			setTitle("");

			console.log(downloadURL);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="docs-wrapper">
			<ToastContainer />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="file">Select Document:</label>
					<input
						type="file"
						id="file"
						accept=".pdf,.doc,.docx"
						onChange={handleFileChange}
						required
						// value={file}
						ref={fileInputRef}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="title">Title:</label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description:</label>
					<textarea
						id="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
				</div>
				<div className="form-group">
					<label htmlFor="category">Category:</label>
					<select
						id="category"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value="">Select Category</option>
						<option value="Personal">Personal</option>
						<option value="Work">Work</option>
						<option value="Finance">Finance</option>
					</select>
				</div>
				<div className="form-group">
					<button className="btn-upload-doc" type="submit">Upload Document</button>
				</div>
			</form>
		</div>
	);
};
