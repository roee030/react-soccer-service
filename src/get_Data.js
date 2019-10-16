var  data_file = require ('./result_played.csv')
var  {csv} = require ("d3")

function logging ()
{
  new Promise((resolve,reject)=>{
    resolve(csv(data_file))
  }).then((results)=>{
    console.log(results)
})
}
module.exports = {
    logging
}