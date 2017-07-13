import React from 'react';
import PassNumber from './PassNumber';
import Photo from './Photo';
import Employeer from './Employeer';
import './Badge.css';

function Badge(props) {
	return (
		<div className="Badge">
			<div className="Badge__field Badge__field--logo"></div>
			<PassNumber passNum={props.person.passNum}/>
			<Photo photo={props.person.photo}/>
			<Employeer fullName={props.person.fullName} position={props.person.position}/>
		</div>
	);
}

export default Badge;
