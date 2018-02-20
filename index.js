const fs = require('fs');
var sleep = require('sleep');


function findChildrens(parentArr, childrenArr, cb) {
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

function parse(file, cb) {
  fs.readFile(file,'utf8', function(err, data){
    if(err) console.log(err);
    else {
      data = JSON.parse(data);
      sleep.sleep(5);
      cb(data);
    }
  });
}

function view(data) {
  console.log(data)
}
function match_data(parent_file, children_file, cb) {
  console.log("Notification : Data sedang diproses !");
  parse(parent_file, function(parent_data){
    parse(children_file, function(children_data){
      findChildrens(parent_data, children_data, function(final_data){
        cb(final_data);
      })
    })
  })
}

match_data('./parents.json', './childrens.json', view)
// console.log("Notification : Data sedang diproses !");
