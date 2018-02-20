const fs = require('fs');
// var sleep = require('sleep');

function match_data(parent_file, children_file, callback) {
  fs.readFile(parent_file, 'UTF-8', function(err, data){
    if(err) console.log(err);
    let dataParent = JSON.parse(data);
    for(let i=0; i<dataParent.length; i++){
      dataParent[i].childrens = [];
    }
    fs.readFile(children_file, 'UTF-8', function(err, data){
      if(err) console.log(err);
      let dataChildren = JSON.parse(data);
      callback(dataParent, dataChildren);
    })
  })
}

function callback(dataParent, dataChildren){
  for(let i=0; i<dataChildren.length; i++){
    for(let j=0; j<dataParent.length; j++){
      if(dataChildren[i].family == dataParent[j].last_name){
        dataParent[j].childrens.push(dataChildren[i].full_name)
      }
    }
  }
  console.log(dataParent);
}


match_data('./parents.json', './childrens.json', callback)
console.log("Notification : Data sedang diproses !");