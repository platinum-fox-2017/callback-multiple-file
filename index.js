const fs = require('fs');
var sleep = require('sleep');

function read_data(file, callback) {
	fs.readFile(file, 'utf8', function (err, data) {
		if (err) console.log(err);
		else callback(JSON.parse(data));
	});
}

function match_data(parent_file, children_file, callback) {
  read_data(parent_file, function (data_parents) {

	sleep.sleep(5);
  	read_data(children_file, function (data_childrens) {
		sleep.sleep(5);
  		for (let i = 0; i < data_parents.length; i++) {
  			let child = [];
  			for (let j = 0; j < data_childrens.length; j++) {
  				if (data_parents[i].last_name == data_childrens[j].family) child.push(data_childrens[j].full_name);
  			}
  			data_parents[i].childrens = child;
  		}
  		callback(data_parents);
  	})
  });
}

match_data('./parents.json', './childrens.json', function (data) {
	console.log(data);
})
console.log("Notification : Data sedang diproses !");