import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Logo from "./Logo";
import PassNumber from "./PassNumber";
import Photo from "./Photo";
import ImportPhoto from "./ImportPhoto";
import Employeer from "./Employeer";

class Badge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: this.props.editing
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleEdit(evt) {
    evt.preventDefault();
    this.setState({ editing: true });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let inputs = {
      passNum: this.refs.passNumber.value,
      fullName: this.refs.fullName.value,
      profession: this.refs.profession.value
    };
    return inputs;
  }

  handleSave() {
    this.setState({ editing: false });
  }

  renderBadge() {
    return (
      <div className="Badge__container">
        <Logo className="Badge__field" />

        <PassNumber
          className="Badge__field"
          passNum={this.props.person.passNum}
        />
        <Photo className="Badge__field" photo={this.props.person.photo} />
        <Employeer
          className="Badge__field"
          fullName={this.props.person.fullName}
          profession={this.props.person.profession}
        />
      </div>
    );
  }

  renderForm() {
    return (
      <div className="Badge__container">
        <Logo className="Badge__field" />

        <div className="Badge__field">
          <p className="Badge__text company">Новгородский ОРТПЦ</p>
          <h2 className="Badge__text pass-number">
            <label>
              Пропуск №
              <input
                className="Badge__input Badge__input--number"
                type="text"
                ref="passNumber"
                defaultValue={this.props.person.passNum}
              />
            </label>
          </h2>
        </div>

        <ImportPhoto className="Badge__field Photo"/>

        {/* <div className="Badge__field Photo">
          TODO: Дописать функционал вставки и сохранения фото при редактировании бэйджа  
           <Button
            className="Photo__btn"
            title="Добавить фото"
            icon="add_a_photo"
            type="button"
          />           
        </div> */}

        <div className="Badge__field">
          <h2 className="Badge__text full-name">
            <input
              className="Badge__input"
              type="text"
              ref="fullName"
              defaultValue={this.props.person.fullName}
              placeholder="ФИО сотрудника"
            />
          </h2>
          <p className="Badge__text profession">
            <input
              className="Badge__input"
              type="text"
              ref="profession"
              defaultValue={this.props.person.profession}
              placeholder="должность"
            />
          </p>
          <div className="director">
            <span className="Badge__text dir-name">Директор</span>
            <span className="Badge__text dir-name">С.Я. Якушев</span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <form
        className="Badge"
        onSubmit={evt =>
          this.props.handleSubmit(
            this.props.person.id,
            this.handleSubmit(evt),
            this.handleSave
          )}>
        <div className="Badge__controls">
          <Button
            className="Badge__delete-btn"
            icon="delete_forever"
            title="Удалить бэйдж"
            type="button"
            onClick={() => this.props.handleDeleteBtn(this.props.person.id)}
          />
          {this.state.editing
            ? <Button
                className="Badge__save-btn"
                icon="save"
                title="Сохранить бэйдж"
                type="submit"
              />
            : <Button
                className="Badge__edit-btn"
                icon="edit"
                title="Редактировать бэйдж"
                type="button"
                onClick={this.handleEdit}
              />}
        </div>
        {this.state.editing ? this.renderForm() : this.renderBadge()}
      </form>
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
