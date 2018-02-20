const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file,callback) {
  // your code here...
  fs.readFile(parent_file,(err,parents) => {
    parents = JSON.parse(parents);
    for (var i = 0; i < parents.length; i++) {
      parents[i].childrens = [];
    }
    fs.readFile(children_file,(err1, childrens) => {
     childrens = JSON.parse(childrens);
      for (var i = 0; i < parents.length; i++) {
        let lastName = parents[i].last_name;
        for (var j = 0; j < childrens.length; j++) {
         childrens[i]
         if (childrens[j].family == lastName) {
           parents[i].childrens.push(childrens[j].full_name);
         }
        }
      }
      callback(parents);
    })
  })
}
const printParent = (parents) => {
  console.log(parents);
}

match_data('./parents.json', './childrens.json',printParent)
console.log("Notification : Data sedang diproses !");
