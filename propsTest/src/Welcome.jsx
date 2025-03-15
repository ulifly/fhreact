import React from "react";
import PropTypes from "prop-types";

export const Welcome = (props) => {
  console.log(props);
	return <h1>Hello, {props.name}</h1>;
};

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};

Welcome.defaultProps = {
  name: 'Stranger',
};
