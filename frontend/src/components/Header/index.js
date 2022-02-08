import React from "react";
import profile from "../../assets/business-3d.png";
import "./style.css";

const Header = () => {
	return (
		<header className="container">
			<div className="header-content">
				<h1>SENAI</h1>

				<div className="profile">
					<img src={profile} alt="profile" />
				</div>
			</div>
		</header>
	);
};

export default Header;
