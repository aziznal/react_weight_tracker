import PropTypes from 'prop-types';


const propTypes = {

	dateFieldVal: PropTypes.string.isRequired,
	onDateChange: PropTypes.func.isRequired,

	timeFieldVal: PropTypes.string.isRequired,
	onTimeChange: PropTypes.func.isRequired

}

const ManualDateInput = ({ onDateChange, onTimeChange, dateFieldVal, timeFieldVal }) => {

	return (

		<div className="column">

			<div className="row">
				<label htmlFor="date">Date</label>

				<input
					className="input-field datetime-input"
					type="date"
					id="date-field"
					defaultValue={dateFieldVal}
					onChange={(e) => onDateChange(e)}
				/>

			</div>

			<div className="row">
				<label htmlFor="time">Time</label>

				<input
					className="input-field datetime-input"
					type="time"
					defaultValue={timeFieldVal}
					id="time-field"
					onChange={(e) => onTimeChange(e)}
				/>

			</div>
		</div >

	)
}


ManualDateInput.propTypes = propTypes;


export default ManualDateInput

