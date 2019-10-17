var  data_file = require ('./result_played.csv')
var  {csv} = require ("d3")
var total_team= [];
var {inArray} = require('./snippet_code')
var uniqID = require('uniq-id');

function logging ()
{
  new Promise((resolve,reject)=>{
    resolve(csv(data_file))
  }).then((results)=>{
    for(var i = 0 ; i < results.length ; i++)
    {
      if((!total_team.inArray(results[i].home_team )) )
      {
        total_team.push(results[i].home_team)
      }
      if((!total_team.inArray(results[i].away_team )))
        total_team.push(results[i].away_team)
    }
    var tempArray = {}
    for(var i = 0 ; i < total_team.length ; i ++)
    {
      tempArray[i] = {id:uniqID(),team:total_team[i]}
    }
    total_team = tempArray
})
}
logging()
module.exports = {
    logging,
    total_team
}