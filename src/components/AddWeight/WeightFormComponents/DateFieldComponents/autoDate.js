import {PropTypes} from 'prop-types';


function getDateOfToday() {
  return new Date().toJSON().slice(0,10);
}

function getTimeRightNow() {
  return new Date().toJSON().slice(11,16);
}


const AutoDateInput = ({ updateDate, updateTime }) => {

  const setTimeAndDate = () => {

    updateDate(getDateOfToday());
    updateTime(getTimeRightNow());

  }


  return (
    <div className="row">

      <h3 style={{marginRight: "1.5em"}}>Shortcuts</h3>


      <button className="btn" onClick={setTimeAndDate}>
        Right Now
      </button>


    </div>
  )
}


AutoDateInput.propTypes = {

  updateDate: PropTypes.func.isRequired,
  updateTime: PropTypes.func.isRequired

}

export default AutoDateInput

export {
  getDateOfToday,
  getTimeRightNow
}
