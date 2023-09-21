import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import {
	Link,
	useLocation,
	useNavigate,
} from "react-router-dom";

// import { handleGoogleSignIn } from "../../firebase/firebase-config";
import { useAuth } from "../context/AuthContext";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { signUpWithGoogle } = useAuth();

	// const { userLogin } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/";
	const redirectMsg = location.state?.message || "";

	const handleLogin = async () => {
		try {
			await signUpWithGoogle();
			navigate("/upload", { replace: true });
		} catch (error) {
			console.error(`error occurred`, error);
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();

		// userLogin();
		navigate(from, { replace: true });

		setEmail("");
		setPassword("");
	};
	return (
		<section className="login-page">
			<h2>DocsQube: The Future of Document Retrieval</h2>
			<p>
				{`DocsQube is your family's digital document
				sanctuary. Seamlessly store, organize, and access
				essential documents from anywhere, ensuring you have
				what you need when you need it. With bank-level
				security and intuitive features, simplify your
				family's document management experience with
				DocsQube`}
			</p>
			{/* <h2>Sign in to your account</h2> */}
			<p className="re-direct">{redirectMsg}</p>

			<button onClick={handleLogin} className="btn-sign-in">
				<FaGoogle size={"2em"} />
				Sign in with Google
			</button>
		</section>
	);
};
