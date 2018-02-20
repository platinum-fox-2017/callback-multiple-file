const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file, cb) {
  fs.readFile(parent_file,'utf8',(err, data)=>{
    let parent_data = JSON.parse(data)
    fs.readFile(children_file,'utf8',(err, data2)=>{
      let childrens = JSON.parse(data2)
      for(let i =0; i<parent_data.length; i++){
        parent_data[i].children = []
        for(let j = 0; j<childrens.length; j++){
          if(parent_data[i].last_name === childrens[j].family){
            parent_data[i].children.push(childrens[j].full_name)
          }
        }
      }
      cb(parent_data)
    })
  })
}

match_data('./parents.json', './childrens.json',function(data){
  console.log(data)  
})
console.log("Notification : Data sedang diproses !");
sleep.sleep(5)
