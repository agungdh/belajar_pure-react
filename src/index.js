import React from 'react';
import ReactDOM from 'react-dom';

function Child({onAction}) {
    return (
        <button onClick={onAction}>
            Click Me!
        </button>
    )
}

function ResetButton({onAction}) {
    return (
        <button onClick={onAction}>
            Reset
        </button>
    )
}

class CountingParent extends React.Component {
    state = {
        actionCount : 0
    };

    handeAction = (action) => {
        console.log('Child says', action);

        this.setState({
            actionCount: this.state.actionCount + 1
        },
        function() {
            console.log(this.state.actionCount);
        });
    };

    resetCount = (action) => {
        console.log('Child says Reset', action);

        this.setState({
            actionCount: 0
        },
        function() {
            console.log(this.state.actionCount);
        });
    };

    render() {
        return (
            <div>
                <Child onAction={this.handeAction}/>
                <ResetButton onAction={this.resetCount}/>
                <p>Clicked {this.state.actionCount} times</p>
            </div>
        )
    }
}

const Page = () => (
    <div>
        <CountingParent/>
        <CountingParent/>
        <CountingParent/>
    </div>
);

ReactDOM.render(
    <Page/>,
    document.querySelector('#root')
);