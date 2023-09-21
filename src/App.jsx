import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import {
	NewMembers,
	Profile,
	Search,
	UploadDocument,
} from "./pages";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/search" element={<Search />} />
				<Route path="/add" element={<NewMembers />} />
				<Route path="/upload" element={<UploadDocument />} />
				<Route path="/profile" element={<Profile />} />
			</Route>
		</Routes>
	);
}

export default App;
