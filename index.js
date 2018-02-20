const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, 'utf8', function(err, data){
    if(err){console.log(err)}
    let parseParent = JSON.parse(data)
    
    fs.readFile(children_file, 'utf8', function(err, data){
      if(err){console.log(err)}
      let parseChildren = JSON.parse(data)

      for(let i=0; i<parseParent.length; i++){
        parseParent[i].childrens = []
        for(let j=0; j<parseChildren.length; j++){
          if(parseChildren[j].family === parseParent[i].last_name){
            parseParent[i].childrens.push(parseChildren[j].full_name)
          }
        }
      }
      console.log(parseParent)

    });
    
  });

}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
