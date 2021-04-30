import { PropTypes } from 'prop-types';


import ManualDateInput from './DateFieldComponents/manualDate';
import AutoDateInput, {getDateOfToday, getTimeRightNow} from './DateFieldComponents/autoDate';

const DateField = ({ updateDate, updateTime }) => {


  function getTimeFromField() {
    let timeField = document.getElementById("time-field");

    let fieldVal = timeField.value;

    return fieldVal;

  }

  function getDateFromField() {
    let dateField = document.getElementById("date-field");

    let fieldVal = dateField.value;

    return fieldVal;

  }


  function updateDateWrapper(event) {

    event.preventDefault();

    let dateVal = getDateFromField();

    updateDate(dateVal);

  }

  function updateTimeWrapper(event) {

    event.preventDefault();

    let timeVal = getTimeFromField();

    updateTime(timeVal);

  }



  return (

    <div className="container column">

      <ManualDateInput

        updateDate={updateDateWrapper}      
        updateTime={updateTimeWrapper}

        dateFieldVal={getDateOfToday()}
        timeFieldVal={getTimeRightNow()}

      />

      <AutoDateInput

        updateDate={updateDate}
        
        updateTime={updateTime}
      />

    </div >
  )
}


DateField.propTypes = {

  updateDate: PropTypes.func.isRequired,
  updateTime: PropTypes.func.isRequired

}

export default DateField
