import React from 'react';

import NewEntryContext from '../../../Contexts/NewEntryContext';

import { convertKGtoLBS } from '../../../utils/weight-utils';



const WeightInputField = () => {

	const newEntryContext = React.useContext(NewEntryContext);

	const minWeight = 0;
	const maxWeight = 500;

	const getMinMaxWeightBasedOnUnit = () => {

		if (newEntryContext.unit === 'KG') {
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


	const setWeightWrapper = (e) => {

		e.preventDefault();

		let newWeight = getWeightFieldValue();

		newEntryContext.setWeight(newWeight);

	}


	return (

		<div className="container column">

			<div className="row">
				<label htmlFor="weight-field" >Enter your weight in {newEntryContext.unit} </label>

				<input
					className="input-field weight-input"
					type="number"
					step="any"

					value={newEntryContext.weight}

					min={getMinMaxWeightBasedOnUnit().min}
					max={getMinMaxWeightBasedOnUnit().max}

					id="weight-field"
					name="weight-field"
					onChange={(e) => setWeightWrapper(e)}
				/>
			</div>

		</div>

	)
}

export default WeightInputField
