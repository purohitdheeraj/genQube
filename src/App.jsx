import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout, ProtectedLayout } from "./components";
import {
	Login,
	NewMembers,
	Profile,
	Search,
	UploadDocument,
} from "./pages";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				
				<Route element={<ProtectedLayout />}>
					<Route path="/search" element={<Search />} />
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
