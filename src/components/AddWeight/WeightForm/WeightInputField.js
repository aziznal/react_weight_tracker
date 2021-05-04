import PropTypes from 'prop-types';


const WeightInputField = ({ weight, updateWeight, weightUnit }) => {

	const minWeight = 0;
	const maxWeight = 500;


	const convertKGtoLBS = (n) => {
		return n * 2.204;
	}


	const getMinMaxWeightBasedOnUnit = () => {

		if (weightUnit === 'KG') {
			return { min: minWeight, max: maxWeight };
		} else {
			return { min: convertKGtoLBS(minWeight), max: convertKGtoLBS(maxWeight) };
		}

	}


	const clamp = (num, min, max) => {
		return Math.min(Math.max(num, min), max);
	}


	const getWeightFieldValue = () => {

		const weightField = document.getElementById("weight-field")

		let parsedValue = weightField.value;

		// Empty Input Field
		if (parsedValue === "") {
			return minWeight;

		}

		else {

			parsedValue = parseFloat(parsedValue);

			let { min, max } = getMinMaxWeightBasedOnUnit();

			parsedValue = clamp(parsedValue, min, max);

			return parsedValue;
		}

	}


	const updateWeightWrapper = (e) => {

		e.preventDefault();

		let newWeight = getWeightFieldValue();

		updateWeight(newWeight);

	}


	return (

		<div className="container column">

			<div className="row">
				<label htmlFor="weight-field" >Enter your weight in {weightUnit} </label>

				<input
					className="input-field weight-input"
					type="number"
					step="any"

					value={weight}

					min={getMinMaxWeightBasedOnUnit().min}
					max={getMinMaxWeightBasedOnUnit().max}

					id="weight-field"
					name="weight-field"
					onChange={(e) => updateWeightWrapper(e)}
				/>
			</div>

		</div>

	)
}

WeightInputField.propTypes = {

	weight: PropTypes.number.isRequired,
	updateWeight: PropTypes.func.isRequired,

	weightUnit: PropTypes.string.isRequired

}

export default WeightInputField
