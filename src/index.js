import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

function Tail({children, count}) {
    let items = React.Children.toArray(children);

    let toReturn = [];
    for (let i = count; i >= 1; i--) {
        toReturn.push(items[i - 1]);
    }

    return toReturn;
}

Tail.propTypes = {
    children: PropTypes.node.isRequired,
    count: PropTypes.number.isRequired
}

var tailCount= 3;

function Head({children, count}) {
    let items = React.Children.toArray(children);

    let toReturn = [];
    for (let i = 1; i <= count; i++) {
        toReturn.push(items[i - 1]);
    }

    return toReturn;
}

Head.propTypes = {
    children: PropTypes.node.isRequired,
    count: PropTypes.number.isRequired
}

var headCount = 4;

function LastChildOnly({children}) {
    let items = React.Children.toArray(children);

    return items[items.length - 1];
}

LastChildOnly.propTypes = {
    children: PropTypes.node.isRequired
};

function AllChild({children}) {
    return children;
}

AllChild.propTypes = {
    children: PropTypes.node.isRequired
};

function FirstChildOnly({children}) {
    let items = React.Children.toArray(children);

    return items[0];
}

FirstChildOnly.propTypes = {
    children: PropTypes.node.isRequired
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
    <Tail count={tailCount}>
        <TestAja/>
        <TestAjaLagi/>
        <TestAja/>
        <TestAjaLagi/>
        <TestAja/>
        <TestAjaLagi/>
        <TestAja/>
        <TestAjaLagi/>
    </Tail>,
    document.querySelector('#root')
);