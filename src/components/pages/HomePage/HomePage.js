import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import BackendService from '../../../services/BackendService';
import { scrollEntrySectionToBottom } from '../../../utils/navigation-utils';

import Header from './Header';
import AddWeight from '../../AddWeight/AddWeight';
import WeightList from '../../WeightList/WeightList';


import WeightGraph from '../../WeightGraph/WeightGraph';


const propTypes = {

	weight: PropTypes.number.isRequired,
	onWeightChange: PropTypes.func.isRequired,

	weightUnit: PropTypes.string.isRequired,
	onWeightUnitChange: PropTypes.func.isRequired,

	date: PropTypes.string.isRequired,
	onDateChange: PropTypes.func.isRequired,

	time: PropTypes.string.isRequired,
	onTimeChange: PropTypes.func.isRequired

}

const HomePage = ({ weight, onWeightChange, weightUnit, onWeightUnitChange, date, onDateChange, time, onTimeChange }) => {

	const [showAddWeightMenu, setShowAddWeightMenu] = useState(false);
	const [showWeightGraphMenu, setShowWeightGraphMenu] = useState(false);

	// REFACTOR: replace this with useReducer
	const [entries, setEntries] = useState([]);

	const [askBeforeDelete, setAskBeforeDelete] = useState(true);


	const getEntries = async () => {

		const entries = await BackendService.fetchAllEntries();

		setEntries(entries);

	}

	const onSubmitEntry = async (entry) => {
		await BackendService.addEntry(entry);

		await getEntries();

		scrollEntrySectionToBottom();

	}

	const onDeleteEntry = async (id) => {

		await BackendService.deleteEntry(id);

		await getEntries();

		scrollEntrySectionToBottom();

	}

	useEffect(() => {

		const _ = async () => {

			await getEntries();

		}

		_();


	}, [])

	return (
		<div className="body-wrapper">

			<div className="homepage-container" >

				<Header />


				<div className="separator"></div>


				<div>

					<WeightList

						askBeforeDelete={askBeforeDelete}
						onAskBeforeDeleteChange={setAskBeforeDelete}

						entries={entries}
						onDeleteEntry={onDeleteEntry}

					/>

				</div>

				<div className="row">
					<Link to={'/about'}>About</Link>
				</div>

				<div className="separator"></div>

			</div>


			< AddWeight

				weight={weight}
				onWeightChange={onWeightChange}

				weightUnit={weightUnit}
				onWeightUnitChange={onWeightUnitChange}

				date={date}
				onDateChange={onDateChange}

				time={time}
				onTimeChange={onTimeChange}

				onSubmitEntry={onSubmitEntry}

				showAddWeightMenu={showAddWeightMenu}
				onShowAddWeightMenuChange={setShowAddWeightMenu}

			/>

			<WeightGraph
			
				entries={entries}

				showWeightGraphMenu={showWeightGraphMenu}
				onShowWeightGraphMenuChange={setShowWeightGraphMenu}

				currentWeightUnit={weightUnit}

			/>

		</div>
	)
}

HomePage.propTypes = propTypes;


export default HomePage
