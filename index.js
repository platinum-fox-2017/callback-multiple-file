const fs = require('fs');
var sleep = require('sleep');

function readFile(data,callback){
  fs.readFile(data,'UTF-8',(err,getData)=>{
    let parse = JSON.parse(getData)
    callback(parse)
  })
}

function match_data(parent_file, children_file,cb) {
  readFile(parent_file,(getData)=>{
    readFile(children_file,(getDataChildren)=>{
      let parent = getData, children = getDataChildren
      
      const newData = parent.map(each =>{
        const checkFam = children.reduce((total,eachChildren)=>{
          if(each.last_name === eachChildren.family){
            total.push(eachChildren.full_name)
          }
          return total
        },[])

        each.childrens = checkFam
        return each
      })

      cb(newData)
    })
  })
}



match_data('./parents.json', './childrens.json',function show(data){
  console.log(data)
})
console.log("Notification : Data sedang diproses !");
sleep.sleep(5)

