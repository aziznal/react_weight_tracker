
const LOCAL_HOST = "http://localhost:5000/";


const checkArgWasPassed = (param) => {

    if (param === undefined) throw Error("undefined param. must pass param to function");

}


const fetchAllWeights = async () => {

    let weightsRequest = await fetch(LOCAL_HOST + "weights", { method: "GET" })

    let weights = await weightsRequest.json();

    return weights;

}


const fetchWeight = async (weightId) => {

    checkArgWasPassed(weightId);

    let weightRequest = await fetch(LOCAL_HOST + `weights/${weightId}`);

    let weight = await weightRequest.json();

    return weight;

}


const updateWeight = async (weightId, updatedField, updatedVal) => {

    checkArgWasPassed(weightId);

    let originalWeight = await fetchWeight(weightId);

    originalWeight = { ...originalWeight, updatedField: updatedVal };


    let updateRequest = await fetch(
        LOCAL_HOST + `weights/${weightId}`,
        { 
            method: 'PUT',
            
            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify(originalWeight)
        }
    )

}


export {

    fetchAllWeights,
    fetchWeight,
    updateWeight

}
