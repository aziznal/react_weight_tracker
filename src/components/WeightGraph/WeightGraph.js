import React from 'react';

import PropTypes from 'prop-types';

import '../common_styles.scss';
import './weightgraphmenu_styles.scss';

import { Line } from 'react-chartjs-2';
import { convertKGtoLBS, convertLBStoKG } from '../../utils/weight-utils';
import NewEntryContext from '../../Contexts/NewEntryContext';


const propTypes = {
	entries: PropTypes.array
};

const defaultProps = {
	entries: []
}


const WeightGraph = ({ entries }) => {

	// BUG: Weight unit is not being updated here when it's changed from another component
	// FIXME: This is ineffecient because this component only cares about weight unit
	const newEntryContext = React.useContext(NewEntryContext);

	const [showWeightGraphMenu, setShowWeightGraphMenu] = React.useState(false);

	const setDynamicClassName = () => {

		return "column sliding-menu weight-graph-menu" +
			(showWeightGraphMenu ? " slide-from-left" : " closed-menu");

	}


	const getGraphData = () => {

		let weights = [];
		let labels = [];

		entries.forEach(element => {

			// one-liners go brrrrrrrrrRRRRRRRRRRRRRR
			// REFACTOR into something a bit more readeable
			weights.push(
				element.unit === newEntryContext.unit ? element.weight : newEntryContext.unit === 'KG' ? convertLBStoKG(element.weight) : convertKGtoLBS(element.weight)
			);

			labels.push(element.date + "\t" + element.time);

		});

		return {

			labels: labels.slice(-10),

			backgroundColor: "rgba(255, 255, 255, 1)",

			datasets: [{

				label: 'Your last 10 entries (' + newEntryContext.unit + ")",

				data: weights.slice(-10),

				backgroundColor: [
					'rgba(255, 136, 0, 1)'
				],

				borderColor: 'rgba(255, 136, 0, 1)',

				borderWidth: 3
			}]

		}

	}

	const createGraph = () => {


		let data = getGraphData();

		return (
			<div style={{ backgroundColor: "white" }}>
				<Line

					width={600}
					height={275}

					data={data}

					redraw={false}

				/>
			</div>
		)

	}


	const showMenu = () => {
		if (!showWeightGraphMenu) setShowWeightGraphMenu(true);
	}

	const hideMenu = () => {
		if (showWeightGraphMenu) setShowWeightGraphMenu(false);
	}


	return (
		<div className={setDynamicClassName()} onClick={showMenu}>

			<span className="close-menu-button" onClick={hideMenu}>
				&times;
			</span>

			{ createGraph()}

		</div>
	)
};


WeightGraph.propTypes = propTypes;
WeightGraph.defaultProps = defaultProps;


export default WeightGraph
