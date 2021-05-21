import React from 'react';

import NewEntryContext from '../../../Contexts/NewEntryContext';

import './summarysection_styles.scss';


const SummarySection = ({ onSubmitEntry }) => {

	const newEntryContext = React.useContext(NewEntryContext);


	const checkEntryIsValid = () => {

		return (
			newEntryContext.weight !== 0 &&
			newEntryContext.date !== undefined &&
			newEntryContext.time !== undefined
		);

	}


	const onSubmitEntryWrapper = async () => {

		if (checkEntryIsValid()) {

			await onSubmitEntry(newEntryContext);

		} else {
			alert("Did you choose Weight (> 0), Date, and Time?");
		}


	}

	return (
		<div>

			<span className="row weight-display">
				You weighed {newEntryContext.weight} {newEntryContext.unit}
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
