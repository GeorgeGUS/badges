import React from 'react';
import Logo from './Logo';
import PassNumber from './PassNumber';
import Photo from './Photo';
import Employeer from './Employeer';

function Badge(props) {
	return (
		<div className="Badge">
			<Logo className="Badge__field" />
			<PassNumber className="Badge__field" passNum={props.person.passNum} />
			<Photo className="Badge__field" photo={props.person.photo} />
			<Employeer className="Badge__field" fullName={props.person.fullName} position={props.person.position} />
		</div>
	);
}

export default Badge;
