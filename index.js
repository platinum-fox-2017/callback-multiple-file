const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file,'utf-8',function(err,data){
    var datas = JSON.parse(data)
    fs.readFile(children_file,'utf-8',function(err2,data2){
      var datas2 = JSON.parse(data2)
      for(let i=0;i<datas.length;i++){
        var anak=[]
        for(let j=0;j<datas2.length;j++){
          if(datas[i].last_name===datas2[j].family){
            anak.push(datas2[j].full_name)
          }
        }
        datas[i].childrens=anak
      }
      console.log(datas);
    })
  });
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
sleep.sleep(5)
