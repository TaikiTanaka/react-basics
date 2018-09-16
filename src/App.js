import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
    state = {
        inputText: 'Input username',
        userName:'User name not set'
    }

    inputHandler = (event) => {
        //console.log(event.target.value)
        this.setState({
            userName:'Hello, ' + event.target.value
        });
    }

    render() {
        const style = {
            backgroundColor:'#ccc',
            font: 'inherit',
            border: '1px solid blue',
            padding:'8px',
            cursor:'pointer'
        }
        return (
            <div className="App">
                <p style={style}>Username Demo</p>
                <UserInput 
                    text = {this.state.inputText}
                    changed={this.inputHandler}>
                </UserInput>
                <UserOutput userName= {this.state.userName}></UserOutput>
            </div>
        );
    }
}

export default App;
