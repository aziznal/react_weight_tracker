import React from 'react';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './homepage_styles.scss';

import BackendService from '../../../services/BackendService';
import WeightGraph from '../../WeightGraph/WeightGraph';

import { scrollEntrySectionToBottom } from '../../../utils/navigation-utils';

import Header from './Header';

import AddWeight from '../../AddWeight/AddWeight';

import WeightList from '../../WeightList/WeightList';



const HomePage = () => {

	console.log("\n\nHomePage");

	// REFACTOR: replace this with useReducer
	const [entries, setEntries] = useState([]);

	const getEntries = async () => {

		const entries = await BackendService.fetchAllEntries();

		setEntries(entries);

	}

	const onSubmitEntry = async (newEntryContext) => {

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
