import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout, ProtectedLayout } from "./components";
import {
	Login,
	NewMembers,
	Profile,
	Search,
	UploadDocument,
	DocumentViewer,
	Home,
} from "./pages";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Login/>} />
				<Route element={<ProtectedLayout />}>
					<Route path="/search" element={<Search />} />
					<Route
						path="/document-viewer"
						element={<DocumentViewer />}
					/>
					<Route path="/add" element={<NewMembers />} />
					<Route
						path="/upload"
						element={<UploadDocument />}
					/>
					<Route path="/profile" element={<Profile />} />
				</Route>

				<Route path="/login" element={<Login />} />
			</Route>
		</Routes>
	);
}

export default App;
