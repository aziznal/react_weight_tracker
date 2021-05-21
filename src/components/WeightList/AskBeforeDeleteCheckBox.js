import PropTypes from 'prop-types';


const propTypes = {

	askBeforeDelete: PropTypes.bool.isRequired,
	onAskBeforeDeleteChange: PropTypes.func.isRequired

}

const AskBeforeDeleteCheckBox = ({ askBeforeDelete, onAskBeforeDeleteChange }) => {

	
	const getCheckboxValue = () => {

		let checkbox = document.getElementById("ask-before-delete");

		return checkbox.checked;

	}

	const toggleAskBeforeDelete = () => {

		let checkboxValue = getCheckboxValue();
		
		onAskBeforeDeleteChange(checkboxValue);
	}

	return (

		<div className="row ask-before-delete-container">

			<label htmlFor="ask-before-delete">Confirm before deleting entries?</label>

			<input
				name="ask-before-delete"
				id="ask-before-delete"
				type="checkbox"
				defaultChecked={askBeforeDelete}
				onChange={() => toggleAskBeforeDelete()}
			/>
		</div>
	)
}


AskBeforeDeleteCheckBox.propTypes = propTypes;

export default AskBeforeDeleteCheckBox
