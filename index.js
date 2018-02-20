const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file,cb) {
  // your code here...
  fs.readFile(parent_file, 'utf8', (err, parent_data)=>{  
    if (err) throw err;
    parent_data = JSON.parse(parent_data);
    parent_data.map((v,i,a)=>{
      v.children =[];
    });
    fs.readFile(children_file, 'utf8', (err, children_data)=>{  
      if (err) throw err;
      children_data = JSON.parse(children_data);
      parent_data.forEach((v,i,a)=>{
        children_data.forEach((v2,i2,a2)=>{
          if(v.last_name === v2.family) v.children.push(v2.full_name);
        });
        sleep.sleep(3);
        cb(parent_data);
      });
  });
});


}

match_data('./parents.json', './childrens.json',(data)=>{
  console.log(data);
});
console.log("Notification : Data sedang diproses !");
