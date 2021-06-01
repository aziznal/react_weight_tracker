import React from 'react';

import { useEffect, useState } from 'react';

import './homepage_styles.scss';

import BackendService from '../../../services/BackendService';
import WeightGraph from '../../WeightGraph/WeightGraph';

import { scrollEntrySectionToBottom } from '../../../utils/navigation-utils';

import Header from './Header';

import WeightList from '../../WeightList/WeightList';
import WeightListContext from '../../../Contexts/WeightListContext';



const HomePage = () => {

	const [entries, setEntries] = useState([]);

	const weightListContext = React.useContext(WeightListContext);


	const getEntries = async () => {

		const entries = await BackendService.fetchAllEntries();

		weightListContext.setWeights(entries);

	}


	weightListContext.weights = entries;

	weightListContext.setWeights = setEntries;
	weightListContext.refreshWeights = getEntries;


	const onDeleteEntry = async (id) => {

		await BackendService.deleteEntry(id);

		await weightListContext.refreshWeights();

		scrollEntrySectionToBottom();

	}

	useEffect(() => {

		(async () => { await weightListContext.refreshWeights(); scrollEntrySectionToBottom(); })();

	}, [weightListContext])



	return (
		<div className="homepage-container">

			<Header />

			<div className="separator" style={{ marginBlock: "3em" }} />

			<div className="row">

				<WeightList
					onDeleteEntry={onDeleteEntry}
				/>

			</div>

			<div className="separator" style={{ marginBlock: "3em" }} />

			<div className="row">
				<WeightGraph entries={entries} />
			</div>

		</div>
	)
}


export default HomePage
