import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import SearchField from './components/SearchField'
import Result from './components/Result'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <SearchField/>
        <Result></Result>

        
      </div>
    );
  }
}

export default App;
