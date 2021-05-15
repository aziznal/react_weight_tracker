import PropTypes from 'prop-types';


const propTypes = {

	dateFieldVal: PropTypes.string.isRequired,
	updateDate: PropTypes.func.isRequired,

	timeFieldVal: PropTypes.string.isRequired,
	updateTime: PropTypes.func.isRequired

}

const ManualDateInput = ({ updateDate, updateTime, dateFieldVal, timeFieldVal }) => {

	return (

		<div className="column">

			<div className="row">
				<label htmlFor="date">Date</label>

				<input
					className="input-field datetime-input"
					type="date"
					id="date-field"
					defaultValue={dateFieldVal}
					onChange={(e) => updateDate(e)}
				/>

			</div>

			<div className="row">
				<label htmlFor="time">Time</label>

				<input
					className="input-field datetime-input"
					type="time"
					defaultValue={timeFieldVal}
					id="time-field"
					onChange={(e) => updateTime(e)}
				/>

			</div>
		</div >

	)
}


ManualDateInput.propTypes = propTypes;


export default ManualDateInput

