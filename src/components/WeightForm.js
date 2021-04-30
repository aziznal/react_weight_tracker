import PropTypes from 'prop-types';

import WeightField from './WeightFormComponents/weightField';
import DateField from './WeightFormComponents/dateField';

const WeightForm = ({ currentUnit, updateWeight, updateUnit, updateDate, updateTime}) => {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="container column">

      <WeightField

        currentUnit={currentUnit}
        updateUnit={(newUnit) => updateUnit(newUnit)}
        updateWeight={(newWeight) => updateWeight(newWeight)}

      />

      <div className="separator"></div>

      <DateField updateDate={updateDate} updateTime={updateTime} />

    </form >
  )
}

WeightForm.propTypes = {

  currentUnit: PropTypes.string.isRequired,
  updateWeight: PropTypes.func.isRequired,
  updateUnit: PropTypes.func.isRequired,

  updateDate: PropTypes.func.isRequired,
  updateTime: PropTypes.func.isRequired,

}


export default WeightForm
