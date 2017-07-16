import React from 'react';
import PropTypes from 'prop-types';

function PhotoBtn() {
	return (
		<button className="PhotoBtn icon" title="Добавить фото">
			<i className="PhotoBtn__icon material-icons">add_a_photo</i>
		</button>
	);
}

PhotoBtn.propTypes = {
	onClick: PropTypes.func
};

export default PhotoBtn;