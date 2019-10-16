import React from 'react';
import './App.css';
import data_file from './result_played.csv'
import {csv} from "d3"



function App() {
  const results_promise = new Promise((resolve,reject)=>{
    resolve(csv(data_file))
  })
  results_promise.then((results)=>{
    console.log("success",results)
  })
    return (
    <div className="App">

    </div>
  );
}

export default App;
