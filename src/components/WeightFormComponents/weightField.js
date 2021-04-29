import { PropTypes } from 'prop-types';


const WeightField = ({ currentUnit, updateUnit, updateWeight }) => {

  const minWeight = 0;
  const maxWeight = 500;


  function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }


  const getWeightFieldValue = () => {

    const weightField = document.getElementById("weight-field")

    let parsedValue = weightField.value;

    // Empty Input Field
    if (parsedValue === "") {
      return minWeight;

    } 
    
    else {

      parsedValue = parseFloat(parsedValue);

      parsedValue = clamp(parsedValue, minWeight, maxWeight);

      return parsedValue;
    }

  }


  const updateWeightWrapper = (e) => {

    e.preventDefault();

    let newWeight = getWeightFieldValue();

    updateWeight(newWeight);

  }


  return (

    <div className="container column">

      <div className="row">
        <label htmlFor="weight-field" >Enter your weight in {currentUnit} </label>

        <input
          className="input-field weight-input"
          type="number"
          step="any"

          min={minWeight}
          max={maxWeight}

          id="weight-field"
          name="weight-field"
          onChange={(e) => updateWeightWrapper(e)}
        />
      </div>

    </div>

  )
}

WeightField.propTypes = {

  currentUnit: PropTypes.string.isRequired,
  updateUnit: PropTypes.func.isRequired,
  updateWeight: PropTypes.func.isRequired

}

export default WeightField
