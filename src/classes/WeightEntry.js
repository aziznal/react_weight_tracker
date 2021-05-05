
class WeightEntry {

	constructor( weight, weightUnit, date, time ) {
		this.weight = weight;
		this.weightUnit = weightUnit;
		this.date = date;
		this.time = time;
	}


	get weight() { return this.weight; }
	
	set weight(value) { this.weight = value; }


	
	get weightUnit() { return this.weightUnit; }
	
	set weightUnit(value) { 

		if (value !== "KG" || value !== "LBS") throw Error("Weight unit must be 'KG' or 'LBS'");
		this.weightUnit = value;

	}



	get date() { return this.date; }
	
	set date(value) { this.date = value; }



	get time() { return this.time; }
	
	set time(value) { this.time = value; }





}

export default WeightEntry