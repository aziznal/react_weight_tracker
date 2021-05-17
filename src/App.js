import { BrowserRouter as Router, Route } from 'react-router-dom'

import { useState } from 'react';

import './StyleNormalize.css'
import './App.scss';

import { getLocalDate, getLocalTime } from './utils/date-utils';

import HomePage from './components/pages/HomePage/HomePage';
import AboutPage from './components/pages/AboutPage/AboutPage';
import { convertKGtoLBS, convertLBStoKG } from './utils/weight-utils';


const App = () => {

	// TODO: install ESLint and follow guidelines closer
	// TODO: Consider useContext as well ComponentComposition while refactoring app

	// TODO - Design: Opt for tabs-based UI instead of the current weird sliding things. This would also allow a more effective use of Routes

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


	return (

		<Router>

			<Route path='/' exact render={() => (

				<HomePage

					weight={weight}
					onWeightChange={setWeight}

					weightUnit={weightUnit}
					onWeightUnitChange={onWeightUnitChange}

					date={date}
					onDateChange={setDate}

					time={time}
					onTimeChange={setTime}
				/>
			)} />

			<Route path='/about' exact component={AboutPage} />

		</Router>

	)
}

export default App
