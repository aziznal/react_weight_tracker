import React from 'react';

import './weight_form_styles.scss'

import WeightInputField from './WeightInputField';
import DateInputField from './DateInputField/DateInputField';


const WeightForm = () => {

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<form onSubmit={handleSubmit} className="container column">

			<WeightInputField />

			<DateInputField />

		</form >
	)
}



export default WeightForm
