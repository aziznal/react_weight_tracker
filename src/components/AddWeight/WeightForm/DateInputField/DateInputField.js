import PropTypes from 'prop-types';

import { getLocalDate, getLocalTime } from '../../../../utils/date-utils';

import ManualDateInput from './ManualDateInput';
import AutoDateInput from './AutoDateInput';


const propTypes = {

	onDateChange: PropTypes.func.isRequired,

	onTimeChange: PropTypes.func.isRequired

}

const DateInputField = ({ onDateChange, onTimeChange }) => {


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


	function onDateChangeWrapper(event) {

		event.preventDefault();

		let dateVal = getDateFieldValue();

		onDateChange(dateVal);

	}

	function onTimeChangeWrapper(event) {

		event.preventDefault();

		let timeVal = getTimeFieldValue();

		onTimeChange(timeVal);

	}



	return (

		<div className="column">

			<ManualDateInput

				onDateChange={onDateChangeWrapper}
				onTimeChange={onTimeChangeWrapper}

				dateFieldVal={getLocalDate()}
				timeFieldVal={getLocalTime()}

			/>

			<AutoDateInput

				onDateChange={onDateChange}

				onTimeChange={onTimeChange}
			/>

		</div >
	)
}


DateInputField.propTypes = propTypes;

export default DateInputField
