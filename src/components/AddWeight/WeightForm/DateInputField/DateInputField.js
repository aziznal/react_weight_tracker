import PropTypes from 'prop-types';

import { getDateOfToday, getTimeRightNow } from '../../../../utils/date-utils';

import ManualDateInput from './ManualDateInput';
import AutoDateInput from './AutoDateInput';

const DateInputField = ({ updateDate, updateTime }) => {


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


	function updateDateWrapper(event) {

		event.preventDefault();

		let dateVal = getDateFieldValue();

		updateDate(dateVal);

	}

	function updateTimeWrapper(event) {

		event.preventDefault();

		let timeVal = getTimeFieldValue();

		updateTime(timeVal);

	}



	return (

		<div className="column">

			<ManualDateInput

				updateDate={updateDateWrapper}
				updateTime={updateTimeWrapper}

				dateFieldVal={getDateOfToday()}
				timeFieldVal={getTimeRightNow()}

			/>

			<AutoDateInput

				updateDate={updateDate}

				updateTime={updateTime}
			/>

		</div >
	)
}


DateInputField.propTypes = {

	updateDate: PropTypes.func.isRequired,

	updateTime: PropTypes.func.isRequired

}

export default DateInputField
