import React from 'react';
import Button from "./Button";


function Photo(props) {
	const background = props.photo === '' ? '#dddddd' :	'url(' + require('../images/' + props.photo) + ')';

	const divStyle = {
		boxShadow: 'inset 0 0 1px 1px #ffffff',
		background: background,
		backgroundSize: 'cover'
	};

	return (
		<div className={`${props.className} Photo`} style={divStyle}>	</div>
	);
}

export default Photo;
