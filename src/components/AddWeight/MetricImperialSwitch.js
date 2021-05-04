import PropTypes from 'prop-types';


const MetricImperialSwitch = ({ weightUnit, updateWeightUnit }) => {

	return (
		<div className="container column">

			<span>Choose your Weight Unit</span>

			<div className="row radio-button-group">

				<div className="radio-button">

					<input
						name="weight-type"
						type="radio"
						id="pounds"

						defaultChecked={weightUnit === "LBS" ? "checked" : ""}

						onChange={() => updateWeightUnit("LBS")}
					/>

					<label htmlFor="pounds">LBS</label>
				</div>

				<div className="radio-button">

					<input
						name="weight-type"
						type="radio"
						id="kilograms"
						defaultChecked={weightUnit === "KG" ? "checked" : ""}
						onChange={() => updateWeightUnit("KG")}
					/>

					<label htmlFor="kilograms">KG</label>
				</div>

			</div>

		</div>
	)
}


MetricImperialSwitch.propTypes = {

	weightUnit: PropTypes.string.isRequired,
	updateWeightUnit: PropTypes.func.isRequired

}


export default MetricImperialSwitch
