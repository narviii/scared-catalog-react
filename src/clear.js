var data = require('./db');

let dataFiltered=[]
console.log(dataFiltered)
data.map(function(elem){
    if (elem.tags.includes('SP fav')){
        elem.fav=true
        elem.tags=elem.tags.filter(i=>i!=='SP fav')
    }
    dataFiltered.push(elem)
    
})
var fs = require('fs');
fs.writeFile ("dbFiltered.json", JSON.stringify(dataFiltered), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);