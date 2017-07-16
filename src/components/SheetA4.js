import React from 'react';
import PropTypes from 'prop-types';
import Badge from './Badge';
import NewBadge from './NewBadge';

class SheetA4 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: this.props.initialData
		};

		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(id) {
		let data = this.state.data.filter(data => data.id !== id);
		this.setState({ data });
	}

	render() {
		return (
			<div className="SheetA4">
				{this.state.data.map((dataItem) =>
					<Badge
						key={dataItem.id}
						person={dataItem}
						handleDeleteBtn={this.handleDelete}
					/>)}
				<NewBadge />
			</div>
		);
	}
}

SheetA4.propTypes = {
	initialData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SheetA4;
