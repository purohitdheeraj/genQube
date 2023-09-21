import { NavLink } from "react-router-dom";
import {
	FaCloudUploadAlt,
	FaDochub,
	FaFileUpload,
	FaPlus,
	FaSearch,
	FaUpload,
} from "react-icons/fa";

import { ImUpload } from "react-icons/im";
import { BsPersonFillAdd } from "react-icons/bs";

export const Header = () => {
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
						{/* initials */}
						<p className="profile-initials">A</p>
					</div>
				</NavLink>
			</div>

			<nav className="nav sub-header-two">
				<ul>
					<li>
						<NavLink
							to="/search"
							className={({ isActive }) =>
								isActive ? "active" : ""
							}
						>
							<FaSearch size={"1em"} />
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/add"
							className={({ isActive }) =>
								isActive ? "active" : ""
							}
						>
							<BsPersonFillAdd size={"1em"} />
						</NavLink>
					</li>
					<li>
						<NavLink
							to="upload"
							className={({ isActive }) =>
								isActive ? "active" : ""
							}
						>
							<FaCloudUploadAlt size={"1em"} />
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
