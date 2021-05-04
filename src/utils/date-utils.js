
function getDateOfToday() {
	return new Date().toJSON().slice(0, 10);
}


function getTimeRightNow() {
	return new Date().toJSON().slice(11, 16);
}



export {

	getDateOfToday,

	getTimeRightNow
}

