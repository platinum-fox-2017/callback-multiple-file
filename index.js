const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  // your code here...
  bacaFile(parent_file, function(data){
    let parent_data = data
    sleep.sleep(5)

    for(let i = 0; i<parent_data.length; i++) {
      parent_data[i].childrens = []

      bacaFile(children_file, function(data){
        let children_data = data

        for(let j=0; j<children_data.length; j++) {
          if(parent_data[i].last_name == children_data[j].family) {
            parent_data[i].childrens.push(children_data[j].full_name)
          }
        }
        console.log(parent_data);
      })
    }
  })
}

function bacaFile(file, callback) {
  fs.readFile(file, 'utf8', function(err, data){
    if (err) console.log(err);
    data = JSON.parse(data)
    callback(data)
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
