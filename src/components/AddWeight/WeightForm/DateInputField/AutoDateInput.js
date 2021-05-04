import PropTypes from 'prop-types';


import { getDateOfToday, getTimeRightNow } from '../../../../utils/date-utils';


const AutoDateInput = ({ updateDate, updateTime }) => {

	const setTimeAndDate = () => {

		updateDate(getDateOfToday());
		updateTime(getTimeRightNow());

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


AutoDateInput.propTypes = {

	updateDate: PropTypes.func.isRequired,

	updateTime: PropTypes.func.isRequired

}

export default AutoDateInput
