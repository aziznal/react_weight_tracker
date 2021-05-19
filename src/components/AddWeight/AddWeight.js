import PropTypes from 'prop-types';

import '../common_styles.scss';
import './addweightmenu_styles.scss';

import WeightForm from "./WeightForm/WeightForm";
import MetricImperialSwitch from './MetricImperialSwitch';

import SummarySection from './SummarySection/SummarySection';


const propTypes = {

	onSubmitEntry: PropTypes.func.isRequired,

	showAddWeightMenu: PropTypes.bool.isRequired,
	onShowAddWeightMenuChange: PropTypes.func.isRequired

};


const AddWeight = ({ onSubmitEntry, showAddWeightMenu, onShowAddWeightMenuChange}) => {

	const setDynamicClassName = () => {

		return "column sliding-menu weight-add-menu" +
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
