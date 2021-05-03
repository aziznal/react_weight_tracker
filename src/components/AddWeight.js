import React from 'react'


import WeightForm from "./WeightForm";
import MetricImperialSwitch from './WeightFormComponents/metricImperialSwitch';

import SummarySection from './SummarySection';

const AddWeight = ({ weight, setWeight, currentUnit, setUnit, measureDate, setMeasureDate, measureTime, setMeasureTime, onSubmit, showAddWeight}) => {
    return (
        <div className={"column weight-add-menu" + (showAddWeight === true ? " slide-from-left" : "") }>

            <MetricImperialSwitch
                currentUnit={currentUnit}
                updateUnit={(newUnit) => setUnit(newUnit)}
            />

            <div className="separator"></div>

            <WeightForm

                weight={weight}
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

export default AddWeight
