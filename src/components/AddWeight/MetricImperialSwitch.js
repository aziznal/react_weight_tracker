import React from 'react';

import NewEntryContext from '../../Contexts/NewEntryContext';


const MetricImperialSwitch = () => {

	const newEntryContext = React.useContext(NewEntryContext);

	// const [weightUnit, onWeightUnitChange] = [newEntryContex.unit, newEntryContext.setUnit ]

	return (
		<div className="container column">

			<span>Choose your Weight Unit</span>

			<div className="row radio-button-group">

				<div className="radio-button">

					<input
						name="weight-type"
						type="radio"
						id="pounds"

						defaultChecked={newEntryContext.unit === "LBS" ? "checked" : ""}

						onChange={() => newEntryContext.setUnit("LBS")}
					/>

					<label htmlFor="pounds">LBS</label>
				</div>

				<div className="radio-button">

					<input
						name="weight-type"
						type="radio"
						id="kilograms"
						defaultChecked={newEntryContext.unit === "KG" ? "checked" : ""}
						onChange={() => newEntryContext.setUnit("KG")}
					/>

					<label htmlFor="kilograms">KG</label>
				</div>

			</div>

		</div>
	)
}


export default MetricImperialSwitch
