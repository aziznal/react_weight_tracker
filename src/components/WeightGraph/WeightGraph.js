import React from 'react';

import PropTypes from 'prop-types';

import '../common_styles.scss';
import './weightgraphmenu_styles.scss';

import { Line } from 'react-chartjs-2';
import { convertKGtoLBS, convertLBStoKG } from '../../utils/weight-utils';


const propTypes = {
	entries: PropTypes.array
};

const defaultProps = {
	entries: []
}


const WeightGraph = ({ entries }) => {

	const [localWeightUnit, setLocalWeightUnit] = React.useState('KG');

	const [showWeightGraphMenu, setShowWeightGraphMenu] = React.useState(false);

	const setDynamicClassName = () => {

		return "column sliding-menu weight-graph-menu" +
			(showWeightGraphMenu ? " slide-from-left" : " closed-menu");

	}


	const createEntryInLocalWeightUnit = (weights, element) => {

		if ( element.unit === localWeightUnit ) {
			weights.push(element.weight);
		} else {

			if (localWeightUnit === 'KG') {
				weights.push(convertLBStoKG(element.weight));
			} else {
				weights.push(convertKGtoLBS(element.weight));
			}

		}
	}

	const getGraphData = () => {

		let weights = [];
		let labels = [];

		entries.forEach(element => {

			createEntryInLocalWeightUnit(weights, element);

			labels.push(element.date + "\t" + element.time);

		});

		return {

			labels: labels.slice(-10),

			backgroundColor: "rgba(255, 255, 255, 1)",

			datasets: [{

				label: 'Your last 10 entries (' + localWeightUnit + ")",

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
					height={225}

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


			<div>

				<div className="row radio-button-group" style={{ marginTop: 0 }}>

					<div className="radio-button">

						<input
							name="weight-type"
							type="radio"
							id="local-pounds"

							defaultChecked={ localWeightUnit === "LBS" ? "checked" : ""}

							onChange={() => setLocalWeightUnit("LBS")}
						/>

						<label htmlFor="local-pounds">LBS</label>
					</div>

					<div className="radio-button">

						<input
							name="weight-type"
							type="radio"
							id="local-kilograms"
							defaultChecked={localWeightUnit === "KG" ? "checked" : ""}
							onChange={() => setLocalWeightUnit("KG")}
						/>

						<label htmlFor="local-kilograms">KG</label>
					</div>

				</div>

			</div>


			{ createGraph()}

		</div>
	)
};


WeightGraph.propTypes = propTypes;
WeightGraph.defaultProps = defaultProps;


export default WeightGraph
