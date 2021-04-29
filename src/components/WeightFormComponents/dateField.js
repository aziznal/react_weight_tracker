import ManualDateInput from './DateFieldComponents/manualDate';
import AutoDateInput from './DateFieldComponents/autoDate';

const DateField = () => {
  return (

    <div className="container column">

      <ManualDateInput />

      <AutoDateInput />

    </div >
  )
}

export default DateField
