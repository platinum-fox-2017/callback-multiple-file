const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file, callback) {
  // your code here...
  fs.readFile(parent_file,'utf-8',(err,parent) => {
    let parents = JSON.parse(parent)
    fs.readFile(children_file,'utf-8',(err,child) => {
      let children = JSON.parse(child)
      for(let i = 0; i < parents.length; i++) {
        parents[i].children = []
        for(let j = 0; j < children.length; j++) {
          if(children[j].family === parents[i].last_name) {
            parents[i].children.push(children[j].full_name)
          }
        }
      }
      sleep.sleep(5)
      callback(parents)
    })
  })
}

match_data('./parents.json', './childrens.json',parents => {
  console.log(parents);
})
console.log("Notification : Data sedang diproses !");
