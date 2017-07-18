import React from 'react';
import Button from "./Button";


function Photo(props) {
	const background = props.editing || props.photo === '' ? '#dddddd' :	'url(' + require('../images/' + props.photo) + ')';

	const divStyle = {
		boxShadow: 'inset 0 0 1px 1px #ffffff',
		background: background,
		backgroundSize: 'cover'
	};

	return (
		<div className={`${props.className} Photo`} style={divStyle}>
			{props.editing ? <Button className="Photo__btn" title="Добавить фото" icon="add_a_photo" /> : ''}
		</div>
	);
}

export default Photo;
