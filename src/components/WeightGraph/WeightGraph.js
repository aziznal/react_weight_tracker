import PropTypes from 'prop-types';

import { Line } from 'react-chartjs-2';
import { convertKGtoLBS, convertLBStoKG } from '../../utils/weight-utils';


const WeightGraph = ({ entries, currentWeightUnit, showWeightGraphMenu, setShowWeightGraphMenu }) => {


	const setDynamicClassName = () => {

		return "column weight-graph-menu" +
			(showWeightGraphMenu ? " slide-from-left" : " closed-menu");

	}


	const getGraphData = () => {

		let weights = [];
		let labels = [];

		entries.forEach(element => {

			// one-liners go brrrrrrrrrRRRRRRRRRRRRRR
			weights.push(
				element.unit === currentWeightUnit ? element.weight : currentWeightUnit === 'KG' ? convertLBStoKG(element.weight) : convertKGtoLBS(element.weight)
			);

			labels.push(element.date + "\t" + element.time);

		});

		return {

			labels: labels.slice(-10),

			backgroundColor: "rgba(255, 255, 255, 1)",

			datasets: [{

				label: 'Your last 10 entries (' + currentWeightUnit + ")",

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

	return (
		<div className={setDynamicClassName()} onClick={() => { !showWeightGraphMenu && setShowWeightGraphMenu(true) }}>

			<span className="close-menu-button" onClick={() => { setShowWeightGraphMenu(false) }}>
				&times;
			</span>


			{ createGraph()}

		</div>
	)
}


WeightGraph.propTypes = {

	entries: PropTypes.array,

	showWeightGraphMenu: PropTypes.bool.isRequired,
	setShowWeightGraphMenu: PropTypes.func.isRequired

}


export default WeightGraph
