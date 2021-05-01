
class BackendService {


    constructor() {
        this.LOCAL_HOST = "http://localhost:5000/";
    }


    checkArgWasPassed(param) {
        if (param === undefined) throw Error("undefined param. must pass param to function");
    }



    addEntry = async (entry) => {

        // Get all current entries, then add another entry to them and send 'em back.
        // Horrible! but easy to code.

        await fetch(
            this.LOCAL_HOST + "weights",

            {
                method: 'POST',

                headers: {
                    "Content-type": "application/json"
                },

                body: JSON.stringify(entry)
            }

        );

    }


    fetchAllEntries = async () => {

        let weightsRequest = await fetch(this.LOCAL_HOST + "weights", { method: "GET" })

        let weights = await weightsRequest.json();

        return weights;

    }


    fetchEntry = async (entryId) => {

        this.checkArgWasPassed(entryId);

        let weightRequest = await fetch(this.LOCAL_HOST + `weights/${entryId}`);

        let weight = await weightRequest.json();

        return weight;

    }


    updateEntry = async (entryId, updatedField, updatedVal) => {

        this.checkArgWasPassed(entryId);

        let originalWeight = await this.fetchEntry(entryId);

        originalWeight = { ...originalWeight, updatedField: updatedVal };


        await fetch(
            this.LOCAL_HOST + `weights/${entryId}`,
            {
                method: 'PUT',

                headers: {
                    'Content-type': 'application/json'
                },

                body: JSON.stringify(originalWeight)
            }
        );

    }


    deleteEntry = async (entryId) => {

        this.checkArgWasPassed(entryId);

        await fetch(this.LOCAL_HOST + `weights/${entryId}`, { method: 'DELETE' });

    }

}

export default new BackendService();
