import React from 'react';

import ManualDateInput from './ManualDateInput';
import AutoDateInput from './AutoDateInput';



const DateInputField = () => {

	return (

		<div className="column">

			<ManualDateInput />

			<AutoDateInput />

		</div >
	)
}


export default DateInputField
