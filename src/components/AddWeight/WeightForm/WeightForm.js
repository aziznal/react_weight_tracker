import PropTypes from 'prop-types';

import WeightInputField from './WeightInputField';
import DateInputField from './DateInputField/DateInputField';


const propTypes = {

	weight: PropTypes.number.isRequired,
	updateWeight: PropTypes.func.isRequired,

	weightUnit: PropTypes.string.isRequired,
	onWeightUnitChange: PropTypes.func.isRequired,

	onDateChange: PropTypes.func.isRequired,

	onTimeChange: PropTypes.func.isRequired,

}

const WeightForm = ({ weight, updateWeight, weightUnit, onWeightUnitChange, onDateChange, onTimeChange }) => {

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<form onSubmit={handleSubmit} className="container column">

			<WeightInputField

				weightUnit={weightUnit}
				onWeightUnitChange={(newUnit) => onWeightUnitChange(newUnit)}

				weight={weight}
				updateWeight={(newWeight) => updateWeight(newWeight)}

			/>

			<DateInputField

				onDateChange={onDateChange}
				onTimeChange={onTimeChange}

			/>

		</form >
	)
}

WeightForm.propTypes = propTypes;


export default WeightForm
