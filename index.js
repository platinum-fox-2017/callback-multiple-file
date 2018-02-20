const fs = require('fs');
// var sleep = require('sleep');

function match_data(parent_file, children_file) {
  // your code here...
  var arrData = [];
  fs.readFile('./parents.json','utf8',function(err,data) {
    if(err) throw err;
    var arrObjParent = JSON.parse(data);
    // console.log(arrObjParent);
    // console.log('=========================================')
    fs.readFile('./childrens.json','utf8',function(err1,data1) {
      if(err1) throw err1;
      var arrObjChildren = JSON.parse(data1);
      // console.log(arrObjChildren);
      
      for (var i = 0; i < arrObjParent.length; i++) {
        var newObj = {};
        newObj.id = arrObjParent[i].id;
        newObj.first_name = arrObjParent[i].first_name;
        newObj.last_name = arrObjParent[i].last_name;
        newObj.age = arrObjParent[i].age

        var arrChildren = [];
        for (var j = 0; j < arrObjChildren.length; j++) {
          if (arrObjParent[i].last_name == arrObjChildren[j].family) {
            arrChildren.push(arrObjChildren[j].full_name);
          }
        }

        newObj.childrens = arrChildren;
        arrData.push(newObj);
      }     
      console.log(arrData);

    })
    
  })




}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
