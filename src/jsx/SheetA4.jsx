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

		this.handleEdit = this.handleEdit.bind(this);
		this.handleAdd = this.handleAdd.bind(this);		
		this.handleDelete = this.handleDelete.bind(this);
	}

	nextId() {
		this._nextId = this._nextId || 4;
		return this._nextId++;
	}

	handleEdit(id, referens) {
		let data = this.state.data.map(dataItem => {
			if(dataItem.id === id) {
				dataItem.editing = true;
				dataItem.passNumber = referens.passNumber;
				dataItem.fullName = referens.fullName;
				dataItem.profession = referens.profession;
			}

			return dataItem;
		});

		this.setState({ data });
	}

	handleAdd() {
		let dataItem = {
			editing: true,
			id: this.nextId(),
			photo: ''
		};

		let data = [...this.state.data, dataItem];

		this.setState({ data });
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
						editing={dataItem.editing}
						key={dataItem.id}
						person={dataItem}
						handleDeleteBtn={this.handleDelete}
						onEdit={this.handleEdit}
					/>)}
				<NewBadge handleClick={this.handleAdd} />
			</div>
		);
	}
}

SheetA4.propTypes = {
	initialData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SheetA4;
