const fs = require('fs');
var sleep = require('sleep');


function findChildres(parentArr, childrenArr, cb) {
  for(let i = 0; i<parentArr.length; i++) {
    parentArr[i].childrens = [];
    for(let j=0; j<childrenArr.length; j++) {
      if(parentArr[i].last_name == childrenArr[j].family) {
        parentArr[i].childrens.push(childrenArr[j].full_name);
      }
    }
  }
  cb(parentArr)
}

function match_data(parent_file, children_file) {
  console.log("Notification : Data sedang diproses !");
  fs.readFile(parent_file,'utf8', function(err, parent_data){
    if(err) console.log(err);
    else {
      parent_data = JSON.parse(parent_data)
      sleep.sleep(5);
      fs.readFile(children_file,'utf8', function(err, children_data){
        if(err) console.log(err);
        else {
          children_data = JSON.parse(children_data);
          sleep.sleep(5);
          findChildres(parent_data, children_data, function(){
            console.log(parent_data);
          })
        }
      });
    }
  });
}

match_data('./parents.json', './childrens.json')
// console.log("Notification : Data sedang diproses !");
