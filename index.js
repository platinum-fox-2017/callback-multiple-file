const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  // your code here...
  fs.readFile(parent_file,'utf8',function(err,data){
      sleep.sleep(5);
      let parent_data = JSON.parse(data);
      fs.readFile(children_file,'utf8',function(err2,data2){
          sleep.sleep(5);
          let childrens = JSON.parse(data2);
          for(let i = 0; i < parent_data.length; i++){
              parent_data[i].childrens = new Array();
              for(let j = 0; j < childrens.length; j++){
                  if(parent_data[i].last_name == childrens[j].family){
                      parent_data[i].childrens.push(childrens[j].full_name);
                  }
              }
          }
          console.log(parent_data);
      })
  });
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
