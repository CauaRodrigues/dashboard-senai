import React from "react";
import "./style.css";

const Header = () => {
	const profile =
		"https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_default.jpg";

	return (
		<header className="container">
			<div className="header-content">
				<h1>Dashboard SENAI</h1>

				<div className="profile">
					<img src={profile} alt="profile" />
				</div>
			</div>
		</header>
	);
};

export default Header;
