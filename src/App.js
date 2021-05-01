import { useState } from 'react';

import './StyleNormalize.css'
import './App.scss';


import Header from "./components/Header";
import WeightForm from "./components/WeightForm";
import MetricImperialSwitch from './components/WeightFormComponents/metricImperialSwitch';

import SummarySection from './components/SummarySection';

import BackendService from './BackendService';


const App = () => {

  const [currentUnit, setUnit] = useState("KG");
  const [weight, setWeight] = useState(0);

  const [measureDate, setMeasureDate] = useState();
  const [measureTime, setMeasureTime] = useState();

  const onSubmit = async (entry) => {
    await BackendService.addEntry(entry);
  }

  
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


      < SummarySection
      
        currentUnit={currentUnit}
        weight={weight}
        date={measureDate}
        time={measureTime}
        onEntrySubmit={onSubmit}
      
      />

    </div>

  )
}

export default App
