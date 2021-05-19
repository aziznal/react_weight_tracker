import React from 'react';

import NewEntryContext from '../../../../Contexts/NewEntryContext';

import { getLocalDate, getLocalTime } from '../../../../utils/date-utils';


const AutoDateInput = ({ onDateChange, onTimeChange }) => {

	const newEntryContext = React.useContext(NewEntryContext);

	const setTimeAndDate = () => {

		newEntryContext.setDate(getLocalDate());
		newEntryContext.setTime(getLocalTime());

	}


	return (
		<div className="row">

			<h3 style={{ marginRight: "1.5em" }}>Shortcuts</h3>

			<button className="btn" onClick={setTimeAndDate}>
				Right Now
      		</button>

		</div>
	)
}


export default AutoDateInput
