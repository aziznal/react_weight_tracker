import PropTypes from 'prop-types';

import WeightInputField from './WeightInputField';
import DateInputField from './DateInputField/DateInputField';

const WeightForm = ({ weight, updateWeight, weightUnit, updateWeightUnit, updateDate, updateTime }) => {

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<form onSubmit={handleSubmit} className="container column">

			<WeightInputField

				weightUnit={weightUnit}
				updateWeightUnit={(newUnit) => updateWeightUnit(newUnit)}

				weight={weight}
				updateWeight={(newWeight) => updateWeight(newWeight)}

			/>

			<DateInputField

				updateDate={updateDate}
				updateTime={updateTime}

			/>

		</form >
	)
}

WeightForm.propTypes = {

	weight: PropTypes.number.isRequired,
	updateWeight: PropTypes.func.isRequired,

	weightUnit: PropTypes.string.isRequired,
	updateWeightUnit: PropTypes.func.isRequired,

	updateDate: PropTypes.func.isRequired,

	updateTime: PropTypes.func.isRequired,

}


export default WeightForm
