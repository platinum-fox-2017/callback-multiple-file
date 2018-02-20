const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {

  fs.readFile(parent_file, 'UTF-8', (err, parentFile) => {
    let convertDataParent = JSON.parse(parentFile)
    fs.readFile(children_file, 'UTF-8', (err, childrenFile) => {
      let convertDataChildren = JSON.parse(childrenFile)
      let dataParent = new Array();
      let dataFamily = new Array();

      for (let i = 0; i < convertDataParent.length; i++) {
       let objParent = {
        id: convertDataParent[i].id,
        first_name: convertDataParent[i].first_name,
        last_name: convertDataParent[i].last_name,
        age: convertDataParent[i].age,
        childrens: new Array()
       }
       dataParent.push(objParent)
      }
     
      for (let i = 0; i < dataParent.length; i++) {
       for (let j = 0; j < convertDataChildren.length; j++) {
        if (dataParent[i].last_name === convertDataChildren[j].family) {
          dataParent[i].childrens.push(convertDataChildren[j].full_name)
        }
       }
      }
       
      sleep.sleep(5)
      console.log(dataParent)
    });
  });

}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
