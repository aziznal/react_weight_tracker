import { useState } from 'react';

import './StyleNormalize.css'
import './App.scss';


import Header from "./components/Header";
import WeightForm from "./components/WeightForm";
import MetricImperialSwitch from './components/WeightFormComponents/metricImperialSwitch';

import WeightDisplay from './components/WeightDisplay';
import DateDisplay from './components/DateDisplay';

import './BackendService';
import BackendService from './BackendService';


const App = () => {

  const [currentUnit, setUnit] = useState("KG");
  const [weight, setWeight] = useState(0);

  const [measureDate, setMeasureDate] = useState();
  const [measureTime, setMeasureTime] = useState();


  
  
  // ### For testing API calls
  (async function(){

    let res = await BackendService.fetchEntry(1);
    console.log(res);

  })();




  return (
    <div className="container body-wrapper">

      {/* ### */}
      <Header />

      {/* ### */}
      <MetricImperialSwitch updateUnit={(newUnit) => setUnit(newUnit)} />

      <div className="separator"></div>

      {/* ### */}
      <WeightForm

        updateWeight={setWeight}
        updateUnit={setUnit}
        currentUnit={currentUnit}

        updateDate={setMeasureDate}
        updateTime={setMeasureTime}

      />

      <div className="separator"></div>


      {/* ### */}
      <WeightDisplay
        currentUnit={currentUnit}
        weight={weight}
        measureDate={measureDate}
        measureTime={measureTime}
      />


      {/* ### */}
      <DateDisplay

        date={measureDate}
        time={measureTime}

      />

    </div>

  )
}

export default App
