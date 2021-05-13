import PropTypes from 'prop-types';


const AskBeforeDeleteCheckBox = ({ askBeforeDelete, setAskBeforeDelete }) => {

	const toggleAskBeforeDelete = () => {
		setAskBeforeDelete(!askBeforeDelete);
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


AskBeforeDeleteCheckBox.propTypes = {

	askBeforeDelete: PropTypes.bool.isRequired,
	setAskBeforeDelete: PropTypes.func.isRequired

}

export default AskBeforeDeleteCheckBox
