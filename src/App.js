import React, { Component } from 'react'
import './App.css';
import AutoComplete from './components/AutoComplete';
var fs = require('fs'); 


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      soccer_teams: [],
      tournaments: [],
    }
   
   
  }


  render() {
    return (
      <div>
      {
        this.state.data.map((value) =>
        <div>
          <span>{value.home_team}</span>
         
        </div>
        )
      } 
      </div>
    )
  }
}
