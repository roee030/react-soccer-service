import React, { Component } from 'react'
import './App.css';
import SearchBar from 'react-js-search';
import AutoComplete from './components/AutoComplete';
var data1 = require('./get_Data')
var data2 = require ('./result_played.csv')
var helper = require('./helper')

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      soccer_teams: data1.total_team,
      tournaments: data1.total_tournament
    }
    const rakrega = helper._inputs
    console.log(rakrega)
    
  }
 

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
