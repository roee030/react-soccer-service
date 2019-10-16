import React from 'react';
import './App.css';
import data_file from './result_played.csv'
import {csv} from "d3"
 

function App() {
  var data_results = [];
  const results_promise = new Promise((resolve,reject)=>{
    resolve(csv(data_file))
  })
  results_promise.then((results)=>{
    for(var i = 0 ; i < results.length ; i++)
    {
      if(results[i].home_score == 0)
      {
        console.log("אני גאון")
      }
    }
  })
  



    return (
    <div className="App">
   
    </div>
  );
}

export default App;
