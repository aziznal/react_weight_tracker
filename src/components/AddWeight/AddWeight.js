import React from 'react';

import PropTypes from 'prop-types';

import NewEntryContext from '../../Contexts/NewEntryContext';

import '../common_styles.scss';
import './addweightmenu_styles.scss';

import { getLocalDate, getLocalTime } from '../../utils/date-utils';
import { convertKGtoLBS, convertLBStoKG } from '../../utils/weight-utils';

import WeightForm from "./WeightForm/WeightForm";
import MetricImperialSwitch from './MetricImperialSwitch';

import SummarySection from './SummarySection/SummarySection';


const propTypes = {

	onSubmitEntry: PropTypes.func.isRequired

};


const AddWeight = ({ onSubmitEntry }) => {

	const newEntryContext = React.useContext(NewEntryContext);

	const [weight, setWeight] = React.useState(0);
	const [weightUnit, setWeightUnit] = React.useState("KG");

	const [date, setDate] = React.useState(getLocalDate());
	const [time, setTime] = React.useState(getLocalTime());

	const onWeightUnitChange = (newUnit) => {

		// convert weight to given new unit
		setWeightUnit(newUnit);
		let newWeight = Math.round((weightUnit === 'KG' ? convertKGtoLBS(weight) : convertLBStoKG(weight)) * 100) / 100;

		// set current unit to the given new unit
		setWeight(newWeight);

	}

	// Setting NewEntryContext states and onStateChanges
	newEntryContext.weight = weight; newEntryContext.setWeight = setWeight;
	newEntryContext.unit = weightUnit; newEntryContext.setUnit = onWeightUnitChange;
	newEntryContext.date = date; newEntryContext.setDate = setDate;
	newEntryContext.time = time; newEntryContext.setTime = setTime;



	const [showAddWeightMenu, setShowAddWeightMenu] = React.useState(false);

	const setDynamicClassName = () => {

		return "column sliding-menu weight-add-menu" +
			(showAddWeightMenu ? " slide-from-left" : " closed-menu");

	}

	const showMenu = () => {
		if (!showAddWeightMenu) setShowAddWeightMenu(true);
	}

	const hideMenu = () => {
		if (showAddWeightMenu) setShowAddWeightMenu(false);
	}

	return (
		<div className={setDynamicClassName()} onClick={showMenu}>

			<span className="close-menu-button" onClick={hideMenu}>
				&times;
			</span>


			<MetricImperialSwitch />


			<div className="separator"></div>


			<WeightForm />


			<div className="separator"></div>


			<SummarySection onSubmitEntry={onSubmitEntry} />

		</div>
	)
}

AddWeight.propTypes = propTypes;

export default AddWeight
