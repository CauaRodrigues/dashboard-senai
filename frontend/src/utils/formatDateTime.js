const formatDateTime = (dateTime) => {
	let date = dateTime.split("T");
	let newDate = date[0].split("-");
	let time = date[1].split(":");
	let seconds = time[2].split(".");

	const newDateTime = `${
		newDate[2] +
		"/" +
		newDate[1] +
		" - " +
		time[0] +
		":" +
		time[1] +
		":" +
		seconds[0]
	}`;

	return newDateTime;
};

export default formatDateTime;
