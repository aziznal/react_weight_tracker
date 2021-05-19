import React from 'react';

import NewEntryContext from '../../../../Contexts/NewEntryContext';

import { getLocalDate, getLocalTime } from '../../../../utils/date-utils';



const ManualDateInput = () => {

	const newEntryContext = React.useContext(NewEntryContext);


	function getTimeFieldValue() {
		let timeField = document.getElementById("time-field");

		let fieldVal = timeField.value;

		return fieldVal;

	}

	function getDateFieldValue() {
		let dateField = document.getElementById("date-field");

		let fieldVal = dateField.value;

		return fieldVal;

	}



	function setDateWrapper(event) {

		event.preventDefault();

		let dateVal = getDateFieldValue();

		newEntryContext.setDate(dateVal);

	}

	function setTimeWrapper(event) {

		event.preventDefault();

		let timeVal = getTimeFieldValue();

		newEntryContext.setTime(timeVal);

	}


	return (

		<div className="column">

			<div className="row">
				<label htmlFor="date">Date</label>

				<input
					className="input-field datetime-input"
					type="date"
					id="date-field"
					defaultValue={getLocalDate()}
					onChange={(e) => setDateWrapper(e)}
				/>

			</div>

			<div className="row">
				<label htmlFor="time">Time</label>

				<input
					className="input-field datetime-input"
					type="time"
					defaultValue={getLocalTime()}
					id="time-field"
					onChange={(e) => setTimeWrapper(e)}
				/>

			</div>
		</div >

	)
}


export default ManualDateInput
