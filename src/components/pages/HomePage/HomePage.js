import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './homepage_styles.scss';

import BackendService from '../../../services/BackendService';

import { scrollEntrySectionToBottom } from '../../../utils/navigation-utils';
import { getLocalDate, getLocalTime } from '../../../utils/date-utils';
import { convertKGtoLBS, convertLBStoKG } from '../../../utils/weight-utils';

import Header from './Header';

import AddWeight from '../../AddWeight/AddWeight';

import WeightList from '../../WeightList/WeightList';

import WeightGraph from '../../WeightGraph/WeightGraph';


const HomePage = () => {

	const [weight, setWeight] = useState(0);
	const [weightUnit, setWeightUnit] = useState("KG");

	const [date, setDate] = useState(getLocalDate());
	const [time, setTime] = useState(getLocalTime());


	const onWeightUnitChange = (newUnit) => {

		// convert weight to given new unit
		setWeightUnit(newUnit);
		let newWeight = Math.round((weightUnit === 'KG' ? convertKGtoLBS(weight) : convertLBStoKG(weight)) * 100) / 100;

		// set current unit to the given new unit
		setWeight(newWeight);

	}


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
				onWeightChange={setWeight}

				weightUnit={weightUnit}
				onWeightUnitChange={onWeightUnitChange}

				date={date}
				onDateChange={setDate}

				time={time}
				onTimeChange={setTime}

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


export default HomePage
