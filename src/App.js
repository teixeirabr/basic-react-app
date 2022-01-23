import './App.css';

import React, { Component } from 'react';

export default class App extends Component {

state={
  message:''
};

handleChange(value) {
  this.setState({ message: value });
}

render() {
  return (
    <div className="App">
      <input onChange={e => this.handleChange(e.target.value)} type="text" />
      <p>{this.state.message}</p>
    </div>
  );
}
}
