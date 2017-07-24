import React from 'react';
import PropTypes from 'prop-types';

function Employeer(props) {
	return (
		<div className={props.className}>
			<h2 className="Badge__text full-name">{props.fullName}</h2>
			<p className="Badge__text profession">{props.profession}</p>
			<div className="director">
				<span className="Badge__text dir-name">Директор</span>
				<span className="Badge__text dir-name">С.Я. Якушев</span>
			</div>
		</div>
	);
}

Employeer.propTypes = {
	className: PropTypes.string,
	fullName: PropTypes.string.isRequired,
	profession: PropTypes.string.isRequired
};

export default Employeer;
