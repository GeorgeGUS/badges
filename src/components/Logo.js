import React from 'react';

function Logo(props) {
	const divStyle = {
		backgroundImage: 'url(' + require('../images/rtrs-logo.png') + ')',
		backgroundSize: '95%'
	};

	return (
		<div className={props.className} style={divStyle}> </div>
	);
}

export default Logo;
