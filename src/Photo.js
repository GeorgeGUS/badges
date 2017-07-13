import React from 'react';

function Photo(props) {
	const divStyle = {
		backgroundImage: 'url(' + require('./photos/' + props.photo) + ')'
	};

	return (
		<div className="Badge__field Badge__field--photo" style={divStyle}></div>
	);
}

export default Photo;
