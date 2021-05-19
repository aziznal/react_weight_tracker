import React from 'react';

import { getLocalDate, getLocalTime } from '../utils/date-utils';


const NewEntryContext = React.createContext(
	{

		weight: 0,
		unit: 'KG',
		date: getLocalDate(),
		time: getLocalTime(),

		setWeight: () => { },
		setUnit: () => { },
		setDate: () => { },
		setTime: () => { }

	}
);


export default NewEntryContext;
