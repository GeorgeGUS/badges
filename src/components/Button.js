import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick} {...props}>
      {props.icon
        ? <i className="material-icons" title={props.title}>
            {props.icon}
          </i>
        : props.children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Button;
