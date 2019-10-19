import React, { Component } from 'react'
import './App.css';
import AutoComplete from './components/AutoComplete';
//import data from './get_Data'
import teams from './components/teams'
var fs = require('fs'); 

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      soccer_teams: [],
      tournaments: [],
      result:[],
      data: []
    }
    
  }
 


  render() {
    return (
      <div>
      {

            } 
      </div>
    )
  }
}
