import React from 'react';
import PhotoBtn from './PhotoBtn';


function Photo(props) {
	const photo = props.photo !== '' ?
		'url(' + require('./images/' + props.photo) + ')'
		:
		'#dddddd';
	const addPhotoBtn = props.photo === '' ? <PhotoBtn /> : '';
	const divStyle = {
		boxShadow: 'inset 0 0 1px 1px #ffffff',
		background: photo,
		backgroundSize: 'cover'
	};

	return (

		<div className={`${props.className} Photo`} style={divStyle}>
			{addPhotoBtn}
		</div>
	);
}

export default Photo;
