import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedLayout = () => {
	// const [loginState, setLoginState] = useState(true);
	const { user } = useAuth();

	if (!user) {
		return <Navigate to="/login" replace={true} />;
	}

	return <Outlet />;
};
