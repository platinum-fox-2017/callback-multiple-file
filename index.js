const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file,callback) {
  // your code here...
  fs.readFile(parent_file,'utf-8',function(errPar,dataPar){
    // console.log(JSON.parse(data))
    
    let dataParent = JSON.parse(dataPar)
    fs.readFile(children_file,'utf-8',function(errChild,dataChild){
      // console.log(JSON.parse(dataChild))
      let dataChilds = JSON.parse(dataChild)
      for(let i =0;i<dataParent.length;i++){
        let arrChild = []
        for(let j=0;j<dataChilds.length;j++){
          // console.log(dataParent[0],dataChilds[0])
          if(dataParent[i].last_name === dataChilds[j].family){
            arrChild.push(dataChilds[j].full_name)
            dataParent[i].childrens = arrChild
          }
        }
      }
      // console.log(dataParent)
      sleep.sleep(5)
      callback(dataParent)
    })

  })
}

match_data('./parents.json', './childrens.json',function(dataParents){
  console.log(dataParents)
})
console.log("Notification : Data sedang diproses !");
