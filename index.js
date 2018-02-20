const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  // your code here...
  let parent_data = []
  fs.readFile('./parents.json', 'utf-8', (errparent, dataparent) => {
    fs.readFile('./childrens.json', 'utf-8', (errchildren, datachildren) => {
      let children = JSON.parse(datachildren)
      let parent = JSON.parse(dataparent)
      for (let index = 0; index < parent.length; index++) {
        parent_data.push(parent[index])
        parent_data[index].children = []
        for (let indexChildren = 0; indexChildren < children.length; indexChildren++) {
          if (children[indexChildren].family === parent_data[index].last_name) {
            parent_data[index].children.push(children[indexChildren].full_name)
          }
        }
      }
      console.log(parent_data)
    })
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !")
sleep.sleep(5)
