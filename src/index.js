import React from 'react';
import ReactDOM from 'react-dom';

function Child({onAction}) {
    return (
        <button onClick={onAction}>
            Click Me!
        </button>
    )
}

class CountingParent extends React.Component {
    state = {
        actionCount : 0
    }

    handeAction = (action) => {
        console.log('Child says', action);

        this.setState({
            actionCount: this.state.actionCount + 1
        });
    }

    render() {
        return (
            <div>
                <Child onAction={this.handeAction}/>
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