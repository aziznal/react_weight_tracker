import PropTypes from 'prop-types';


const propTypes = {

	weightUnit: PropTypes.string.isRequired,
	onWeightUnitChange: PropTypes.func.isRequired

}

const MetricImperialSwitch = ({ weightUnit, onWeightUnitChange }) => {

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

						onChange={() => onWeightUnitChange("LBS")}
					/>

					<label htmlFor="pounds">LBS</label>
				</div>

				<div className="radio-button">

					<input
						name="weight-type"
						type="radio"
						id="kilograms"
						defaultChecked={weightUnit === "KG" ? "checked" : ""}
						onChange={() => onWeightUnitChange("KG")}
					/>

					<label htmlFor="kilograms">KG</label>
				</div>

			</div>

		</div>
	)
}


MetricImperialSwitch.propTypes = propTypes;


export default MetricImperialSwitch
