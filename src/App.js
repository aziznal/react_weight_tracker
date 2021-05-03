import { BrowserRouter as Router, Route } from 'react-router-dom'

import  {useState} from 'react';

import './StyleNormalize.css'
import './App.scss';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';


const App = () => {


  const [currentUnit, setUnit] = useState("KG");
  const [weight, setWeight] = useState(0);

  const [measureDate, setMeasureDate] = useState();
  const [measureTime, setMeasureTime] = useState();


  const setUnitWrapper = (newUnit) => {

    // When unit is changed, current weight entered will be converted to relevant unit.
    setUnit(newUnit);

    let newWeight = Math.round((currentUnit === 'KG' ? weight * 2.204 : weight / 2.204) * 100) / 100;
    
    setWeight(newWeight);


  }


  return (

    <Router>

      <Route path='/' exact render={() => (
        
        <HomePage

          weight={weight}
          setWeight={setWeight}

          currentUnit={currentUnit}
          setUnit={setUnitWrapper}

          measureDate={measureDate}
          setMeasureDate={setMeasureDate}

          measureTime={measureTime}
          setMeasureTime={setMeasureTime}
        />
        )}/>

      <Route path='/about' exact component={AboutPage} />

    </Router>

  )
}

export default App
