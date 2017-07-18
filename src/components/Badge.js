import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Logo from './Logo';
import PassNumber from './PassNumber';
import Photo from './Photo';
import Employeer from './Employeer';

class Badge extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			editing: this.props.editing
		};
	}

	render() {
		console.log(this.state.editing);
		return(
			<div className="Badge">
				<Button
					className="Badge__delete-btn"
					icon="delete_forever"
					title="Удалить бэйдж"
					onClick={() => this.props.handleDeleteBtn(this.props.person.id)}
				/>
				<div className="Badge__container">
					<Logo className="Badge__field"/>
					<PassNumber className="Badge__field" passNum={this.props.person.passNum} editing={this.state.editing} />
					<Photo className="Badge__field" photo={this.props.person.photo} editing={this.state.editing} />
					<Employeer
						className="Badge__field"
						fullName={this.props.person.fullName}
						position={this.props.person.profession}
						editing={this.state.editing}
					/>
				</div>
			</div>
		);
	}
}

Badge.propTypes = {
	person: PropTypes.shape({
		id: PropTypes.number.isRequired,
		passNum: PropTypes.string.isRequired,
		photo: PropTypes.string.isRequired,
		fullName: PropTypes.string.isRequired,
		profession: PropTypes.string.isRequired
	}).isRequired,
	editing: PropTypes.bool
};

export default Badge;
