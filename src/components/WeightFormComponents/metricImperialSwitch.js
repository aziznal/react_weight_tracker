import PropTypes from 'prop-types';

const MetricImperialSwitch = ({ updateUnit }) => {



  return (
    <div className="container column">

      <span>Choose your Weight Unit</span>

      <div className="row radio-button-group">

        <div className="row">
          <input name="weight-type" type="radio" id="pounds" onChange={() => updateUnit("LBS")} />
          <label htmlFor="pounds">LBS</label>
        </div>

        <div className="row">
          <input name="weight-type" type="radio" id="kilograms" defaultChecked="checked" onChange={() => updateUnit("KG")} />
          <label htmlFor="kilograms">KG</label>
        </div>

      </div>

    </div>
  )
}


MetricImperialSwitch.propTypes = {

  updateUnit: PropTypes.func.isRequired

}


export default MetricImperialSwitch
