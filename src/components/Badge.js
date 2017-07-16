import React from 'react';
import PropTypes from 'prop-types';
import DeleteBtn from './DeleteBtn';
import Logo from './Logo';
import PassNumber from './PassNumber';
import Photo from './Photo';
import Employeer from './Employeer';

function Badge(props) {
	let person = props.person;
	return (
		<div className="Badge">
			<DeleteBtn className="Badge__delete-btn" handleClick={() => props.handleDeleteBtn(person.id)} />
			<div className="Badge__container">
				<Logo className="Badge__field"/>
				<PassNumber className="Badge__field" passNum={person.passNum}/>
				<Photo className="Badge__field" photo={person.photo}/>
				<Employeer className="Badge__field" fullName={person.fullName} position={person.profession}/>
			</div>
		</div>
	);
}

Badge.propTypes = {
	person: PropTypes.shape({
		id: PropTypes.number.isRequired,
		passNum: PropTypes.string.isRequired,
		photo: PropTypes.string.isRequired,
		fullName: PropTypes.string.isRequired,
		profession: PropTypes.string.isRequired
	}).isRequired
};

export default Badge;
