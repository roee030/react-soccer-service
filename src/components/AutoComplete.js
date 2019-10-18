import React, { Component } from 'react'
var data = require('../get_Data')
export default class AutoComplete extends Component {
    constructor(props)
    {
        super(props);
        this.state= {
            teams: data.total_team
        }
    }
    componentDidMount(){
    }
    render() {
        return (
            <div>
                <input onChange={(e) => console.log(e.target.value)} type="text"/>
                <ul>
                </ul>
            </div>
        )
    }
}
