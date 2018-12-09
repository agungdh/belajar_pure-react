import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

function LastChildOnly({children}) {
    let items = React.Children.toArray(children);

    return items[items.length - 1];
}

LastChildOnly.propTypes = {
    children: PropTypes.node
};

function AllChild({children}) {
    return children;
}

AllChild.propTypes = {
    children: PropTypes.node
};

function FirstChildOnly({children}) {
    let items = React.Children.toArray(children);

    return items[0];
}

FirstChildOnly.propTypes = {
    children: PropTypes.node
};

function TestAja() {
    return (
        <div>
            <p>Test Aja</p>
            <table border="1">
                <tbody>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr><tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr><tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

function TestAjaLagi() {
    return (
        <div>
            <p>Test Aja Lagi</p>
            <table border="1">
                <tbody>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr><tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr><tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(
    <LastChildOnly>
        <TestAja/>
        <TestAjaLagi/>
    </LastChildOnly>,
    document.querySelector('#root')
);