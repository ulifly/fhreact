
import PropTypes from 'prop-types';
import React from 'react';

export const FirstApp = ( {
    //default props
    title = 'No hay titulo',
    subtitle = 'No hay subtitulo',
    nombre = 'nameless'
} ) => {
    return (
        <>
            <h1>Hola {nombre}</h1>  
            <h2>{title}</h2> 
            <h3>{subtitle}</h3>
        </>
    );
}

// antes asi se declaraban los defaultProps


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}
