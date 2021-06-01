import React from 'react';


const WeightListContext = React.createContext(
	{

		weights: [],

		setWeights: () => { },

		refreshWeights: () => { }

	}
);


export default WeightListContext;
