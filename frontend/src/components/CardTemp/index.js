import React from "react";
import IconTemp from "../../assets/IconTemp.png";

import "./style.css";

const CardTemp = () => {
	return (
		<div className="card">
			<div className="card-icon">
				<img src={IconTemp} alt="Icone de temperatura" />
			</div>

			<div className="card-details">
				<h3>80º</h3>
				<p>Temperatura Máxima</p>
				<p>08/08/2022</p>
			</div>
		</div>
	);
};

export default CardTemp;
