import PropTypes from 'prop-types';


const propTypes = {

	askBeforeDelete: PropTypes.bool.isRequired,
	onAskBeforeDeleteChange: PropTypes.func.isRequired

}

const AskBeforeDeleteCheckBox = ({ askBeforeDelete, onAskBeforeDeleteChange }) => {

	// REFACTOR: use checkbox value instead of toggling state of 'askBeforeDelete'
	const toggleAskBeforeDelete = () => {
		onAskBeforeDeleteChange(!askBeforeDelete);
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
