const fs = require('fs');
var sleep = require('sleep');




function match_data(parent_file, children_file) {
  let parent_data = fs.readFile(parent_file,'utf-8',function(err,dataParent){
    fs.readFile(children_file,'utf-8',function(err,dataChildren){
      if(err) throw (err)
      let parentData = JSON.parse(dataParent)
      let childrenData = JSON.parse(dataChildren)
      for(let i = 0 ; i < parentData.length; i++){
        parentData[i]['childrens'] = []
        for(let j =0 ; j < childrenData.length ; j++){
          if(parentData[i].last_name === childrenData[j].family){
            parentData[i].childrens.push(childrenData[j].full_name)
          }
        }
      }
      if(err) throw err
      sleep.sleep(5)
      console.log(parentData) 
    })
  })
}


match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
