import { useAuth } from "../context/AuthContext";

export const Profile = () => {
	const { logOut, user } = useAuth();

	const { displayName, photoURL, uid } = user;

	return (
		<>
			<div>Username:{displayName}</div>

			<button onClick={logOut}>Logout</button>
		</>
	);
};
