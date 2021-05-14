import PropTypes from 'prop-types';

import { Line } from 'react-chartjs-2';


const WeightGraph = ({ entries, showWeightGraphMenu, setShowWeightGraphMenu }) => {


	const setDynamicClassName = () => {

		return "column weight-graph-menu" +
			(showWeightGraphMenu ? " slide-from-left" : " closed-menu");

	}

	return (
		<div className={setDynamicClassName()} onClick={() => { !showWeightGraphMenu && setShowWeightGraphMenu(true) }}>

			<span className="close-menu-button" onClick={() => { setShowWeightGraphMenu(false) }}>
				&times;
			</span>

			<h1>
				Weight Graph
			</h1>

			{/* <Line /> */}

		</div>
	)
}

export default WeightGraph
