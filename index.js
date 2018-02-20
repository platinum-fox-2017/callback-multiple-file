const fs = require('fs');
// var sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, (err, data) => {
    if(err) throw err
    let parent_data = JSON.parse(data)
    // sleep.sleep(5)
    fs.readFile(children_file, (err, data) => {
      if(err) throw err
      let children_data = JSON.parse(data)
      // sleep.sleep(5)
      for(let i = 0; i < parent_data.length; i++) {
        parent_data[i].childrens = []
        for(let j = 0; j < children_data.length; j++) {
          if(parent_data[i].last_name === children_data[j].family) {
            parent_data[i].childrens.push(children_data[j].full_name)
          }
        }
      }
      console.log(parent_data)
    }) 
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
