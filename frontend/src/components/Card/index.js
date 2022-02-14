import React, { useEffect, useState } from "react";
import IconTemp from "../../assets/heat.png";
import IconAvance from "../../assets/speedometer.png";
import IconRotation from "../../assets/timer.png";
import "./style.css";

const Card = ({ iconType, cardType, children }) => {
	const [icon, setIcon] = useState("");

	useEffect(() => {
		if (iconType === "temperature") {
			setIcon(IconTemp);
		} else if (iconType === "avance") {
			setIcon(IconAvance);
		} else if (iconType === "rotation") {
			setIcon(IconRotation);
		}
	}, [iconType]);

	return (
		<div className={`card ${cardType}`}>
			<div className="card-icon">
				<img src={icon} alt="Icone" />
			</div>

			<div className="card-details">{children}</div>
		</div>
	);
};

export default Card;
