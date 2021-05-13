import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import BackendService from '../../../services/BackendService';

import Header from './Header';
import AddWeight from '../../AddWeight/AddWeight';
import WeightList from '../../WeightList/WeightList';
import { scrollEntrySectionToBottom } from '../../WeightList/Entry/Entry';

const HomePage = ({ weight, setWeight, weightUnit, setWeightUnit, date, setDate, time, setTime }) => {

	const [showAddWeightMenu, setShowAddWeightMenu] = useState(false);

	const [entries, setEntries] = useState([]);

	const [askBeforeDelete, setAskBeforeDelete] = useState(true);


	const getEntries = async () => {

		const entries = await BackendService.fetchAllEntries();

		setEntries(entries);

	}

	const onSubmitEntry = async (entry) => {
		await BackendService.addEntry(entry);

		await getEntries();

		await scrollEntrySectionToBottom();

	}

	const onDeleteEntry = async (id) => {

		await BackendService.deleteEntry(id);

		await getEntries();

		await scrollEntrySectionToBottom();

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

				<button className="btn add-weight-toggle-button" onClick={() => setShowAddWeightMenu(!showAddWeightMenu)}>
					Add Entry
                </button>

				<div className="separator"></div>


				<div>

					<WeightList

						askBeforeDelete={askBeforeDelete}
						setAskBeforeDelete={setAskBeforeDelete}

						entries={entries}
						onDelete={onDeleteEntry}

					/>

				</div>

				<div className="row">
					<Link to={'/about'}>About</Link>
				</div>

				<div className="separator"></div>

			</div>


			< AddWeight

				weight={weight}
				setWeight={setWeight}

				weightUnit={weightUnit}
				setWeightUnit={setWeightUnit}

				date={date}
				setDate={setDate}

				time={time}
				setTime={setTime}

				onSubmitEntry={onSubmitEntry}

				showAddWeightMenu={showAddWeightMenu}

			/>

		</div>
	)
}

HomePage.propTypes = {

	weight: PropTypes.number.isRequired,
	setWeight: PropTypes.func.isRequired,

	weightUnit: PropTypes.string.isRequired,
	setWeightUnit: PropTypes.func.isRequired,

	date: PropTypes.string.isRequired,
	setDate: PropTypes.func.isRequired,

	time: PropTypes.string.isRequired,
	setTime: PropTypes.func.isRequired

}


export default HomePage
