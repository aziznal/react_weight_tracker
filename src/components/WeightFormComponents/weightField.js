import { PropTypes } from 'prop-types';


const WeightField = ({ currentUnit, updateUnit, updateWeight }) => {

  const getWeightFieldValue = () => {

    const weightField = document.getElementById("weight-field")

    return weightField.value;

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
