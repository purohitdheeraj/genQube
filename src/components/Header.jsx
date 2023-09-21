import { NavLink } from "react-router-dom";
import {
	FaCloudUploadAlt,
	FaDochub,
	FaSearch,
} from "react-icons/fa";
import { BsPersonFillAdd } from "react-icons/bs";
import { useAuth } from "../context/AuthContext";

export const Header = () => {
	const { user } = useAuth();
	const { displayName } = user ?? {
		displayName: "anonymous user",
	};

	const initials = displayName
		.split(" ")
		.map((name) => name[0].toUpperCase())
		.join("");

	return (
		<header className="header">
			<div className="sub-header-one">
				<div className="nav-heading">
					<FaDochub size="2em" className="doc-icon" />
					ocQube
				</div>

				<NavLink
					to="/profile"
					className={({ isActive }) =>
						isActive ? "active" : ""
					}
				>
					<div className="user-profile">
						<p className="profile-initials">{initials}</p>
					</div>
				</NavLink>
			</div>

			<nav className="nav sub-header-two">
				<ul>
					<NavItem
						to="/search"
						icon={<FaSearch size={"1em"} />}
					/>
					<NavItem
						to="/add"
						icon={<BsPersonFillAdd size={"1em"} />}
					/>
					<NavItem
						to="upload"
						icon={<FaCloudUploadAlt size={"1em"} />}
					/>
				</ul>
			</nav>
		</header>
	);
};

// Custom NavItem component for NavLink
const NavItem = ({ to, icon }) => (
	<li>
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive ? "active" : ""
			}
		>
			{icon}
		</NavLink>
	</li>
);
