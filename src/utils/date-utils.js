

function getDateOfToday() {

	// Note: Returns Local Date

	let date = new Date();

	return date.getFullYear() + "-" + ('0' + (date.getMonth()+1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
}


function getTimeRightNow() {

	// Note: Returns Local Time

	return new Date().toTimeString().slice(0, 5);
}



export {

	getDateOfToday,

	getTimeRightNow
}

