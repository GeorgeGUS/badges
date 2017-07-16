import React from 'react';
import PropTypes from 'prop-types';

function DeleteBtn(props) {
	return (
		<button className={`${props.className} icon`} onClick={props.handleClick}>
			<i className="material-icons delete-icon" title="Удалить бэйдж">delete_forever</i>
		</button>
	);
}

DeleteBtn.propTypes = {
	onClick: PropTypes.func
};

export default DeleteBtn;
