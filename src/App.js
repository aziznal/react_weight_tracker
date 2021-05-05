import { BrowserRouter as Router, Route } from 'react-router-dom'

import { useState } from 'react';

import './StyleNormalize.css'
import './App.scss';

import { getDateOfToday, getTimeRightNow } from './utils/date-utils';

import HomePage from './components/pages/HomePage/HomePage';
import AboutPage from './components/pages/AboutPage';
import { convertKGtoLBS, convertLBStoKG } from './utils/weight-utils';


const App = () => {


	const [weight, setWeight] = useState(0);
	const [weightUnit, setWeightUnit] = useState("KG");

	const [date, setDate] = useState(getDateOfToday());
	const [time, setTime] = useState(getTimeRightNow());


	const setWeightUnitWrapper = (newUnit) => {

		// When unit is changed, current weight entered will be converted to relevant unit.
		setWeightUnit(newUnit);

		let newWeight = Math.round((weightUnit === 'KG' ? convertKGtoLBS(weight) : convertLBStoKG(weight)) * 100) / 100;

		setWeight(newWeight);

	}


	return (

		<Router>

			<Route path='/' exact render={() => (

				<HomePage

					weight={weight}
					setWeight={setWeight}

					weightUnit={weightUnit}
					setWeightUnit={setWeightUnitWrapper}

					date={date}
					setDate={setDate}

					time={time}
					setTime={setTime}
				/>
			)} />

			<Route path='/about' exact component={AboutPage} />

		</Router>

	)
}

export default App
