const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file, cb) {
  // your code here...
  fs.readFile(parent_file, 'utf8',function (err, parent) {
    fs.readFile(children_file, 'utf8',function (err, children) {
      let bapak = JSON.parse(parent)
      let anak = JSON.parse(children)
      for (var i = 0; i < bapak.length; i++) {
        bapak[i].childrens = []
        for (var j = 0; j < anak.length; j++) {
          if (anak[j].family === bapak[i].last_name) {
            bapak[i].childrens.push(anak[j].full_name)
          }
        }
      }
      sleep.sleep(5)
      cb(bapak)
    })
  })
}

match_data('./parents.json', './childrens.json', function (data) {
  console.log(data);
})
console.log("Notification : Data sedang diproses !");
