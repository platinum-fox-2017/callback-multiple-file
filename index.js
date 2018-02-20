const fs = require('fs');
var sleep = require('sleep');

// fs.readFile(path[, options], callback)
function match_data(parent_file, children_file) {
  fs.readFile(parent_file ,'UTF-8',function(err,dataParent){
    console.log("Notification : Data Parents sedang diproses !")
    sleep.sleep(2);
    fs.readFile(children_file,'UTF-8',function(err,dataChild){
      console.log("Notification : Data Childs sedang diproses !")
      sleep.sleep(2);
      let dataParents = JSON.parse(dataParent)
      let dataChilds = JSON.parse(dataChild)
      for(let i=0;i<dataParents.length;i++){
        dataParents[i].childrens = []
        for(let j=0;j<dataChilds.length;j++){
          if(dataChilds[j].family === dataParents[i].last_name){
            dataParents[i].childrens.push(dataChilds[j])
          }
        }
      }
      console.log(dataParents[0])
      sleep.sleep(2);
      console.log(dataParents[1])
      sleep.sleep(2);
      console.log(dataParents[2])
      sleep.sleep(2);
      console.log(dataParents[3])
      sleep.sleep(2);
      console.log(dataParents[4])
      sleep.sleep(2);
      console.log(dataParents[5])
      sleep.sleep(2);
      console.log(dataParents[6])
      return ''
    })
  })
}

match_data('./parents.json', './childrens.json')

console.log("Notification : Mempersiapkan Data yang akan diproses !");
sleep.sleep(2)
