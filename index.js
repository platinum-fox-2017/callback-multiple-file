const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file,'utf-8',function(err,data) {
    sleep.sleep(5);
    if (err) {
      console.log(err);
    } else {
      var jsonParent = JSON.parse(data);
      fs.readFile(children_file, 'utf-8', function(err1,data1){
        sleep.sleep(5)
        if(err1) {
          console.log(err1);
        } else {
          var jsonReturn   = []
          var jsonChildren = JSON.parse(data1);
          let id = 1;
          for(let i = 0; i < jsonParent.length;i++) {
            let children    = [];
            for(let j = 0; j < jsonChildren.length;j++) {
              if(jsonParent[i].last_name == jsonChildren[j].family) {
                children.push(jsonChildren[j].full_name);
              }
            }
            jsonParent[i].children = children;
            jsonReturn.push(jsonParent[i]);
          }
          console.log(jsonReturn);
        }
      })
    }
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
