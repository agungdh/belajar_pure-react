import React from 'react';
import ReactDOM from 'react-dom';

class ErrorCatcher extends React.Component {
    state: {
        error: null
    }

    componentDidCatch(error, errorInfo) {
        console.log('[ComponentDidCatch]', error);
        this.setState({error: errorInfo.componentStack})
    }

    render() {
        if(this.state) {
            return (
                <div>
                    An error occurred: {this.state}
                </div>
            )
        }

        return this.props.children;
    }
}

class LifecycleDemo extends React.Component{
    state = {counter: 0}

    constructor(props) {
        super(props);
        console.log('[constructor]');
        console.log(' State already set:', this.state);
    }

    componentDidMount() {
        console.log('[componentDidMount]', 'Mounted.');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('[getDerivedStateFromProps]');
        console.log(' Next props:', nextProps);
        console.log(' Prev state:', prevState);
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[shouldComponentUpdate]', 'Deciding to update');
        return true;
    }

    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log('[getSnapshotBeforeUpdate]', 'About to update...');
        return `Time is ${Date.now()}`;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[componentDidUpdate]', 'Updated');
        console.log(' snapshot:', snapshot);
    }

    componentWillUnmount() {
        console.log('[componentWillUnmount]', 'Goodbye cruel world.');
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    causeErrorNextRender = () => {
        this.setState({
            causeError: true
        });
    }

    render() {
        console.log('[render]');
        if(this.state.causeError) {
            throw new Error('oh no !!');
        }

        return (
            <div>
                <span>Counter: {this.state.counter}</span>
                <button onClick={this.handleClick}>Click to increment</button>
                <button onClick={this.causeErrorNextRender}>Throw an error</button>
            </div>
        );
    }
}

ReactDOM.render(

        <LifecycleDemo/>

    ,
    document.querySelector('#root')
);