import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

function ErrorBox({children}) {
    return (
        <div>
            <i className="fas fa-exclamation-triangle"/>
            {children}
        </div>
    )
}

ErrorBox.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]).isRequired
};

ReactDOM.render(
    <ErrorBox>The World Is Ending !!!</ErrorBox>,
    document.querySelector('#root')
);