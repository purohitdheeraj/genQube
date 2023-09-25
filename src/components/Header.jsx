/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import {
	FaCloudUploadAlt,
	FaDochub,
	FaSearch,
} from "react-icons/fa";
import { BsPersonFillAdd } from "react-icons/bs";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Header = () => {
	const { user } = useAuth();
	const { displayName, photoURL } = user || {
		displayName: "guest",
	};
	const [isOpen, setIsOpen] = useState(false);

	const handleMouseEnters = () => {
		setIsOpen(true);
	};
	const handleMouseLeave = () => {
		setIsOpen(false);
	};

	return (
		<header className="header">
			<div className="sub-header-one">
				<div className="nav-heading">
					<FaDochub size="2em" className="doc-icon" />
					ocQube
				</div>

				<NavLink
					to="/profile"
					className="user-profile-link"
					onMouseEnter={handleMouseEnters}
					onMouseLeave={handleMouseLeave}
				>
					<div className="user-profile">
						{user ? (
							<img
								src={photoURL}
								className="user-profile"
								alt="user-profile-icon"
							/>
						) : (
							<div className="profile-initials">
								{getInitials(displayName)}
							</div>
						)}
						{/* <div
						className={`initial-tooltip ${
							isOpen ? "show" : ""
						}`}
					>
						{displayName.split(' ')[0]}
					</div> */}
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

const getInitials = (name) =>
	name
		.split(" ")
		.map((word) => word[0].toUpperCase())
		.join("");

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

export { Header };
