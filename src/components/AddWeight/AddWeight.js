import PropTypes from 'prop-types';


import WeightForm from "./WeightForm/WeightForm";
import MetricImperialSwitch from './MetricImperialSwitch';

import SummarySection from './SummarySection';


const propTypes = {

	weight: PropTypes.number.isRequired,
	onWeightChange: PropTypes.func.isRequired,

	weightUnit: PropTypes.string.isRequired,
	onWeightUnitChange: PropTypes.func.isRequired,

	date: PropTypes.string.isRequired,
	onDateChange: PropTypes.func.isRequired,

	time: PropTypes.string.isRequired,
	onTimeChange: PropTypes.func.isRequired,

	onSubmitEntry: PropTypes.func.isRequired,

	showAddWeightMenu: PropTypes.bool.isRequired,
	onShowAddWeightMenuChange: PropTypes.func.isRequired

};


// TODO: find a solution to the below train of parameters (officially kinda ran into 'prop-drilling' here. Yay!)
// REFACTOR: Use Component Composition to get rid of this
const AddWeight = ({ weight, onWeightChange, weightUnit, onWeightUnitChange, date, onDateChange, time, onTimeChange, onSubmitEntry, showAddWeightMenu, onShowAddWeightMenuChange}) => {


	const setDynamicClassName = () => {

		return "column weight-add-menu" +
			(showAddWeightMenu ? " slide-from-left" : " closed-menu");

	}

	const showMenu = () => {
		if (!showAddWeightMenu) onShowAddWeightMenuChange(true);	
	}

	const hideMenu = () => {
		if (showAddWeightMenu) onShowAddWeightMenuChange(false);
	}

	return (
		<div className={setDynamicClassName()} onClick={ showMenu }>
			
			<span className="close-menu-button" onClick={ hideMenu }>
				&times;
			</span>

			<MetricImperialSwitch
				weightUnit={weightUnit}
				onWeightUnitChange={(newUnit) => onWeightUnitChange(newUnit)}
			/>

			<div className="separator"></div>

			<WeightForm

				weight={weight}
				updateWeight={onWeightChange}

				onWeightUnitChange={onWeightUnitChange}
				weightUnit={weightUnit}

				onDateChange={onDateChange}

				onTimeChange={onTimeChange}

			/>

			<div className="separator"></div>


			< SummarySection

				weight={weight}

				weightUnit={weightUnit}

				date={date}

				time={time}

				onSubmitEntry={onSubmitEntry}

			/>
		</div>
	)
}

AddWeight.propTypes = propTypes;

export default AddWeight
