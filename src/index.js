import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

function Separator() {
    return (
        <div><hr/></div>
    )
}

function Dialog({children}) {
    let items = React.Children.toArray(children);
    let toReturn = [];

    for (let i = 0; i <= items.length - 1; i++) {
        toReturn.push(items[i]);

        // if (i -1 != items.length) {
            toReturn.push(<Separator/>);
        // }
    }
    
    return (
        <div>{toReturn}</div>
    )
}

function Title({children}) {
    return (
        <div>{children}</div>
    )
}

Title.propTypes = {
    children: PropTypes.string.isRequired
}

function Body({children}) {
    return (
        <div>{children}</div>
    )
}

Body.propTypes = {
    children: PropTypes.string.isRequired
}

function Footer({children}) {
    return (
        <div>{children}</div>
    )
}

ReactDOM.render(
    <Dialog>
        <Title>Judul</Title>
        <Body>Badan</Body>
        <Footer>Kaki</Footer>
    </Dialog>,
    document.querySelector('#root')
);