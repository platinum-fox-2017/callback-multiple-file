const fs = require('fs');
const views = require("./view.js");
var sleep = require('sleep');

function match_data(parent_file, children_file, callback) {
  fs.readFile(parent_file, 'UTF-8', function(err,data){
    sleep.sleep(5);
    let parentsData = JSON.parse(data);
    fs.readFile(children_file, 'UTF-8', function(err,data){
      sleep.sleep(5);
      let childrensData = JSON.parse(data);
      for(let i=0; i<parentsData.length; i++){
        parentsData[i].childrens = [];
        for(let j=0; j<childrensData.length; j++){
          if(parentsData[i].last_name===childrensData[j].family){
            parentsData[i].childrens.push(childrensData[j].full_name);
          }
        }
      }
      callback(parentsData);
    });
  });
}

match_data('./parents.json', './childrens.json', views);
console.log("Notification : Data sedang diproses !");
