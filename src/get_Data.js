var  data_file = require ('./result_played.csv')
var  {csv} = require ("d3")
var total_team= [];
var to_JSON = []    
var tempArray = []

var total_tournament = [];
var {inArray} = require('./snippet_code')
var uniqID = require('uniq-id');
var obj = {}

function contains(a, obj) {
  for (var i = 0; i < a.length; i++) {
      if (a[i] === obj) {
          return true;
      }
  }
  return false;
}
function logging ()
{
  new Promise((resolve,reject)=>{
    resolve(csv(data_file))
  }).then((results)=>{
    for(var i = 0 ; i < results.length ; i++)
    {
      if((! contains(total_tournament,results[i].tournament)))
      {
        total_tournament.push( results[i].tournament)
      }
      if((!contains(total_team,results[i].home_team )) )
      {
        total_team.push(results[i].home_team)
      }
      if((!contains(total_team,results[i].away_team )))
        total_team.push(results[i].away_team)
    }
    for(var i = 0 ; i < total_team.length ; i ++)
    {
      tempArray.push({
        id:uniqID(),
        soccer_team: total_team[i]
      })
    }
    
})
}
logging()
module.exports = {
    logging,
    total_team,
    tempArray,
    total_tournament
}