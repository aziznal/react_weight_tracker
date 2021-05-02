
const MetricImperialSwitch = ({ currentUnit, updateUnit }) => {

  return (
    <div className="container column">

      <span>Choose your Weight Unit</span>

      <div className="row radio-button-group">

        <div className="radio-button">
          
          <input
            name="weight-type"
            type="radio"
            id="pounds"

            defaultChecked={ currentUnit==="LBS" ? "checked" : ""}

            onChange={() => updateUnit("LBS")}
          />

          <label htmlFor="pounds">LBS</label>
        </div>

        <div className="radio-button">

          <input
            name="weight-type"
            type="radio"
            id="kilograms"
            defaultChecked={ currentUnit==="KG" ? "checked" : ""}
            onChange={() => updateUnit("KG")}
          />

          <label htmlFor="kilograms">KG</label>
        </div>

      </div>

    </div>
  )
}


export default MetricImperialSwitch
