import PropTypes from 'prop-types';


import WeightForm from "./WeightForm/WeightForm";
import MetricImperialSwitch from './MetricImperialSwitch';

import SummarySection from './SummarySection';


// TODO: find a solution to the below train of parameters
const AddWeight = ({ weight, setWeight, weightUnit, setWeightUnit, date, setDate, time, setTime, onSubmitEntry, showAddWeightMenu, setShowAddWeightMenu}) => {


	const setDynamicClassName = () => {

		return "column weight-add-menu" +
			(showAddWeightMenu ? " slide-from-left" : " closed-menu");

	}

	return (
		<div className={setDynamicClassName()} onClick={ () => {!showAddWeightMenu && setShowAddWeightMenu(true)} }>
			
			<span className="close-menu-button" onClick={ () => {setShowAddWeightMenu(false)} }>
				&times;
			</span>

			<MetricImperialSwitch
				weightUnit={weightUnit}
				updateWeightUnit={(newUnit) => setWeightUnit(newUnit)}
			/>

			<div className="separator"></div>

			<WeightForm

				weight={weight}
				updateWeight={setWeight}

				updateWeightUnit={setWeightUnit}
				weightUnit={weightUnit}

				updateDate={setDate}

				updateTime={setTime}

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

AddWeight.propTypes = {

	weight: PropTypes.number.isRequired,
	setWeight: PropTypes.func.isRequired,

	weightUnit: PropTypes.string.isRequired,
	setWeightUnit: PropTypes.func.isRequired,

	date: PropTypes.string.isRequired,
	setDate: PropTypes.func.isRequired,

	time: PropTypes.string.isRequired,
	setTime: PropTypes.func.isRequired,

	onSubmitEntry: PropTypes.func.isRequired,

	showAddWeightMenu: PropTypes.bool.isRequired

}

export default AddWeight
