const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file, callback) {
  // your code here...
  fs.readFile(parent_file, 'utf8', function(err,data){
    if (err) {
      console.log(err);
    } else {
      sleep.sleep(4);
      let parent_data = JSON.parse(data);

      // read
      fs.readFile(children_file, 'utf8', function(err2,data2){
        if (err) {
          console.log(err);
        } else {
          sleep.sleep(4);
          let children_data = JSON.parse(data2);

          for (let i = 0; i < parent_data.length; i++) {
            parent_data[i].childrens = [];
            for (let j = 0; j < children_data.length; j++) {
              if (parent_data[i].last_name === children_data[j].family) {
                parent_data[i].childrens.push(children_data[j].full_name);
              }
            }
          }
          callback(parent_data);
        }
      });
    }
  });
}

match_data('./parents.json', './childrens.json', function(parent_data){
  console.log(parent_data);
});
console.log("Notification : Data sedang diproses !");
