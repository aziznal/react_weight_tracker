import PropTypes from 'prop-types';


import { getLocalDate, getLocalTime } from '../../../../utils/date-utils';


const propTypes = {

	onDateChange: PropTypes.func.isRequired,

	onTimeChange: PropTypes.func.isRequired

}

const AutoDateInput = ({ onDateChange, onTimeChange }) => {

	const setTimeAndDate = () => {

		onDateChange(getLocalDate());
		onTimeChange(getLocalTime());

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


AutoDateInput.propTypes = propTypes;

export default AutoDateInput
