const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
 
  // your code here...
  fs.readFile(parent_file,(err,data) =>{
    sleep.sleep(3)
    if(err) throw err
    var parentData = JSON.parse(data)
    
    fs.readFile(children_file,(err,data) =>{
      if(err) throw err
      var childrenData = JSON.parse(data)
      
      // console.log(parentData)
      var arrData = []
      for(let i=0; i<parentData.length; i++){
        var childrens = []
        for(let j=0; j<childrenData.length; j++){
          
          if(parentData[i].last_name == childrenData[j].family){
            childrens.push(childrenData[j].full_name)
          }
          
        }
        parentData[i].children = childrens
        arrData.push(parentData[i])
      }
      console.log(parentData)
    })
    
  })

}




//TES
// function checkData(parent_file){
//   fs.readFile(parent_file,(err,data) =>{
//       if(err) throw err
//       var parseData = JSON.parse(data)
//       console.log(parseData)
      
//   })
// }
// checkData('./childrens.json')



match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
