import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: '',
      img: ''
    }
  };
  componentWillMount() {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=2GqR3qygi0bX12jeIpTa8k4Fwn9zwXz9bM72c5oT')
      .then(res => {
        console.log(res);
        this.setState({results: res.data.title});
        this.setState({img: res.data.url});
      })
      .catch(err => {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={this.state.img} className="App-logo" alt="logo" />
          <h2>{this.state.results}</h2>
        </div>
          <div id="test"></div>
      </div>
    );
  }
}

export default App;
