var fs = require('fs'); 
var parse = require('csv-parse');

var csvData=[];
fs.createReadStream('./result_upcoming.csv')
    .pipe(parse({delimiter: ':',  relax_column_count: true}))
    .on('data', function(csvrow) {
        //console.log(csvrow);
        //do something with csvrow
    })
    .on('end',function() {
      //do something wiht csvData
      const dataJSON = JSON.stringify(csvData)
    fs.writeFileSync('result_upcoming.json',dataJSON)
    });

