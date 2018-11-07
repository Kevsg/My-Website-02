import React, { Component } from 'react'
import './App.css'
import PrimarySearchAppBar from './components/AppBar'
import SimpleTabs from './components/Tabs'
import { MuiThemeProvider } from '@material-ui/core/styles';
import themeX from './components/Theme'

//import {Route,Link} from 'react-router-dom'
//import BooksIcon from './components/BooksIcon'


class App extends Component {
	
  render() {
	  
    return (
      <MuiThemeProvider theme={themeX}>
      <div className="App">
        <PrimarySearchAppBar/>
        <SimpleTabs center='true'/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;


/*
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/RouteA'>Roster</Link></li>
        <li><Link to='/RouteB'>Schedule</Link></li>
        <Route path='/RouteA' component={SearchField}>RouteA</Route>
          
        <Route path='/RouteB' component={Result}>RouteB</Route>
*/