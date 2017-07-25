import React from "react";
import PropTypes from "prop-types";
import Badge from "./Badge";
import NewBadge from "./NewBadge";

class SheetA4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.initialData
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  nextId() {
    this._nextId = this._nextId || 4;
    return this._nextId++;
  }

  handleSubmit(id, inputs, save) {
    let data = this.state.data.map(dataItem => {
      if (dataItem.id === id) {
        dataItem.photo = inputs.photo;
        dataItem.passNum = inputs.passNum;
        dataItem.fullName = inputs.fullName;
        dataItem.profession = inputs.profession;
      }

      return dataItem;
    });

    save();

    this.setState({ data });
  }

  handleAdd() {
    let dataItem = {
      editing: true,
      id: this.nextId()
    };

    let data = [...this.state.data, dataItem];

    this.setState({ data });
  }

  handleDelete(id) {
    let data = this.state.data.filter(data => data.id !== id);
    localStorage.removeItem("photo_" + id);
    this.setState({ data });
  }

  render() {
    return (
      <div className="SheetA4">
        {this.state.data.map(dataItem =>
          <Badge
            editing={dataItem.editing}
            key={dataItem.id}
            person={dataItem}
            handleDeleteBtn={this.handleDelete}
            handleEdit={this.handleEdit}
            handleSubmit={this.handleSubmit}
          />
        )}
        <NewBadge handleClick={this.handleAdd} />
      </div>
    );
  }
}

SheetA4.propTypes = {
  initialData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SheetA4;
