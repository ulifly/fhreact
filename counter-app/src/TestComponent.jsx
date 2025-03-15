import PropTypes from 'prop-types';
import React from 'react';

const TestComponent = ({ message }) => {
    return <h1>{message}</h1>;
}

TestComponent.propTypes = {
    message: PropTypes.string.isRequired
}

TestComponent.defaultProps = {
    message: 'Mensaje por defecto'
};

export default TestComponent;