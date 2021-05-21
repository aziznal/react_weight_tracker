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


// FIXME: <Header> and <AddWeight> Components are being updated unneccesarily when an entry is deleted.


const HomePage = () => {

	console.log("\n\nHomePage");

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


	// REFACTOR: replace this with useReducer
	const [entries, setEntries] = useState([]);

	const getEntries = async () => {

		const entries = await BackendService.fetchAllEntries();

		setEntries(entries);

	}

	const onSubmitEntry = async () => {

		let entry = {
			weight: newEntryContext.weight,
			unit: newEntryContext.unit,
			date: newEntryContext.date,
			time: newEntryContext.time
		}

		await BackendService.addEntry(entry);

		// Refresh entry list afterwards
		await getEntries();

		scrollEntrySectionToBottom();

	}

	const onDeleteEntry = async (id) => {

		await BackendService.deleteEntry(id);

		await getEntries();

		scrollEntrySectionToBottom();

	}

	useEffect(() => {

		(async () => { await getEntries(); })();

	}, [])

	return (
		<div className="body-wrapper">

			<div className="homepage-container" >

				<Header />


				<div className="separator"></div>

				<WeightList

					entries={entries}
					onDeleteEntry={onDeleteEntry}

				/>

				<div className="row">
					<Link to={'/about'}>About</Link>
				</div>

				<div className="separator"></div>

			</div>


			<AddWeight onSubmitEntry={onSubmitEntry} />

			<WeightGraph entries={entries} />

		</div>
	)
}


export default HomePage
