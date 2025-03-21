
import PropTypes from 'prop-types';
import React from 'react';

export const FirstApp = ( title, subtitle ) => {
    return (
        <>
            <h1>Hola</h1>   
            <h3>{subtitle}</h3>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo'
};