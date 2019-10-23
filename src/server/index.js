const express = require ( 'express')
const app =express()
const port = 5000 || process.env.PORT  
const result_played = fetch('https://api.myjson.com/bins/otxi0').then(res => res.json())
app.get('./teams',(req,res) => {
    res.send(result_played)
})

app.listen(port, ()=>{
    console.log('Server is up on port' + port)
})