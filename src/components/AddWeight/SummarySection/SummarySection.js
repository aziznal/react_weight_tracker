import React from 'react';

import NewEntryContext from '../../../Contexts/NewEntryContext';

import './summarysection_styles.scss';


const SummarySection = ({ onSubmitEntry }) => {

	const newEntryContext = React.useContext(NewEntryContext);


	const constructEntry = () => {

		let newEntry = {
			"weight": newEntryContext.weight,
			"unit": newEntryContext.unit,
			"date": newEntryContext.date,
			"time": newEntryContext.time
		}

		return newEntry;

	}


	const checkEntryIsValid = (entry) => {

		let isValid = (
			entry.weight !== 0 &&
			entry.date !== undefined &&
			entry.time !== undefined
		);

		return isValid;

	}


	const onSubmitEntryWrapper = async () => {

		let entry = constructEntry();

		if (checkEntryIsValid(entry)) {

			await onSubmitEntry(entry);

		} else {
			alert("Did you choose Weight (> 0), Date, and Time?");
		}


	}

	return (
		<div>

			<span className="row weight-display">
				You weighed {newEntryContext.weight} {newEntryContext.weightUnit}
			</span>


			<span className="row date-time-display">
				at {newEntryContext.date} - {newEntryContext.time}
			</span>


			<button className="row btn" onClick={onSubmitEntryWrapper}>
				Submit Entry
            </button>

		</div>
	)
}


export default SummarySection
