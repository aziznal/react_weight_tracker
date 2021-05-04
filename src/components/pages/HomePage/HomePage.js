import { Link } from 'react-router-dom';
import { useState } from 'react';

import PropTypes from 'prop-types';

import BackendService from '../../../services/BackendService';

import AddWeight from '../../AddWeight/AddWeight';
import Header from './Header';

const HomePage = ({ weight, setWeight, weightUnit, setWeightUnit, date, setDate, time, setTime }) => {

	let [showAddWeightMenu, setShowAddWeightMenu] = useState(false);

	const onSubmitEntry = async (entry) => {
		await BackendService.addEntry(entry);
	}

	return (
		<div className="body-wrapper">

			<div className="homepage-container" >

				<Header />

				<button className="btn add-weight-toggle-button" onClick={() => setShowAddWeightMenu(!showAddWeightMenu)}>
					Add Entry
                </button>

				<div className="separator"></div>

				<div className="row">
					<Link to={'/about'}>About</Link>
				</div>


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
