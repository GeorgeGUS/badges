import React, { Component } from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import ImportPhoto from "./ImportPhoto";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: ""
    };
  }

  render() {
    return (
      <form className="Badge__container">
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
                required
              />
            </label>
          </h2>
        </div>

        {/*TODO: Придумать способ передачи данных в инпут или другое  */}

        <ImportPhoto
          className="Badge__field Photo"
          handleImage={this.handleImage}
        />

        <div className="Badge__field">
          <h2 className="Badge__text full-name">
            <input
              className="Badge__input"
              type="text"
              ref="fullName"
              defaultValue={this.props.person.fullName}
              placeholder="ФИО сотрудника"
              required
            />
          </h2>
          <p className="Badge__text profession">
            <input
              className="Badge__input"
              type="text"
              ref="profession"
              defaultValue={this.props.person.profession}
              placeholder="должность"
              required
            />
          </p>
          <div className="director">
            <span className="Badge__text dir-name">Директор</span>
            <span className="Badge__text dir-name">С.Я. Якушев</span>
          </div>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  className: PropTypes.string.isRequired,
  onSubmit: PropTypes.func
};

export default Form;
