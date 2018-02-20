const fs = require('fs');
// var sleep = require('sleep');

function read(dir, callback){
  fs.readFile(dir, 'utf8', (err, data) => {
    if (err) throw err
    else {
      callback(JSON.parse(data))
    }
  })
}

function match_data(parent_file, children_file, callback) {
  // your code here...
  read(parent_file, (dataParent) => {
    // sleep.sleep(5)
    read(children_file, (dataChildren) => {
      for (let i = 0; i < dataParent.length; i++){
        dataParent[i].childrens = []
      }
      for (let i = 0; i < dataChildren.length; i++){
        switch (dataChildren[i].family){
          case "Campbell": dataParent[0].childrens.push(dataChildren[i].full_name); break;
          case "Katsev": dataParent[1].childrens.push(dataChildren[i].full_name); break;
          case "Robin": dataParent[2].childrens.push(dataChildren[i].full_name); break;
          case "Oliver": dataParent[3].childrens.push(dataChildren[i].full_name); break;
          case "Wood": dataParent[4].childrens.push(dataChildren[i].full_name); break;
          case "Bass": dataParent[5].childrens.push(dataChildren[i].full_name); break;
          case "Caldwell": dataParent[6].childrens.push(dataChildren[i].full_name); break;
        }
      }
      callback(dataParent)
    })

  })
}

match_data('./parents.json', './childrens.json', (data) => {
  console.log(data)
})
console.log("Notification : Data sedang diproses !");
