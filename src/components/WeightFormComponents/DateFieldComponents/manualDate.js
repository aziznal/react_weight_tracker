

const ManualDateInput = () => {
  return (

    <div className="column">

      <h2>Measurement Time and Date</h2>

      <div className="row">
        <label htmlFor="date">Date</label>
        <input className="input-field date-input" type="date" id="date-field" />
      </div>

      <div className="row">
        <label htmlFor="date">Time</label>
        <input className="input-field date-input" type="time" id="date-field" />
      </div>
    </div >

  )
}

export default ManualDateInput
