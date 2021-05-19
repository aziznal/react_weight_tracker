import React from 'react';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './homepage_styles.scss';

import BackendService from '../../../services/BackendService';
import WeightGraph from '../../WeightGraph/WeightGraph';

import { scrollEntrySectionToBottom } from '../../../utils/navigation-utils';
import { getLocalDate, getLocalTime } from '../../../utils/date-utils';
import { convertKGtoLBS, convertLBStoKG } from '../../../utils/weight-utils';

import Header from './Header';

import AddWeight from '../../AddWeight/AddWeight';

import WeightList from '../../WeightList/WeightList';

import NewEntryContext from '../../../Contexts/NewEntryContext';


const HomePage = () => {

	const newEntryContext = React.useContext(NewEntryContext);

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

	// Setting NewEntryContext states and onStateChanges
	newEntryContext.weight = weight; newEntryContext.setWeight = setWeight;
	newEntryContext.unit = weightUnit; newEntryContext.setUnit = onWeightUnitChange;
	newEntryContext.date = date; newEntryContext.setDate = setDate;
	newEntryContext.time = time; newEntryContext.setTime = setTime;


	const [showAddWeightMenu, setShowAddWeightMenu] = useState(false);
	const [showWeightGraphMenu, setShowWeightGraphMenu] = useState(false);

	// REFACTOR: replace this with useReducer
	const [entries, setEntries] = useState([]);

	const [askBeforeDelete, setAskBeforeDelete] = useState(true);


	const getEntries = async () => {

		const entries = await BackendService.fetchAllEntries();

		setEntries(entries);

	}

	// TODO: Use NewEntryContext's values instead of using callback from SummarySection
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

	// REFACTOR: make this useEffect clearer
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


				{/* TODO: move this parent <div> into WeightList */}
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

				onSubmitEntry={onSubmitEntry}

				showAddWeightMenu={showAddWeightMenu}
				onShowAddWeightMenuChange={setShowAddWeightMenu}

			/>

			<WeightGraph
			
				entries={entries}

				showWeightGraphMenu={showWeightGraphMenu}
				onShowWeightGraphMenuChange={setShowWeightGraphMenu}

			/>

		</div>
	)
}


export default HomePage
