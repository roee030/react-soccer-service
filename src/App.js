import React, { Component } from 'react'
import './App.css';
import AutoComplete from './components/AutoComplete';
import data from './get_Data'
var fs = require('fs'); 

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      soccer_teams: [],
      tournaments: [],
    }
    console.log(data)
   
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
