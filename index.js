const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  // your code here...
  fs.readFile('./parents.json', 'utf-8', (err, parentsFile) => {
    let parent_data = JSON.parse(parentsFile)
    fs.readFile('./childrens.json', 'utf-8', (err, childrensFile) => {
      let children_data = JSON.parse(childrensFile)
      for (let i = 0; i < parent_data.length; i++) {
        parent_data[i].children = [];
      }
      
      let arrChildren = []
      for (let i = 0; i < parent_data.length; i++) {
        for (let j = 0; j < children_data.length; j++) {
          if (parent_data[i].last_name === children_data[j].family) {
            parent_data[i].children.push(children_data[j].full_name)
          }
        }
      }
      console.log(parent_data)
      sleep.sleep(0)
    })
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");