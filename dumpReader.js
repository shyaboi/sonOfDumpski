const fs = require('fs');
const { CLIENT_RENEG_LIMIT } = require('tls');
const path = require("path")
const exec = require("child_process").exec;
var ultaBuff = parseInt(fs.readFileSync('universalCounter.txt'))


fs.readFile('classyDump.txt', 'utf8', (err, data) => {
    if (err) throw err;
    // console.log(data);
  var dinus = data.split(",")
  console.log(dinus)

  
  for (let i = 0; i < dinus.length; i++) {
    const element = dinus[i];
    console.log(element)
    ultaBuff++ 
    fs.writeFile('universalCounter.txt', ultaBuff, ()=> {console.log('double dang!')})
        // setTimeout(() => {
          exec(`cd dinus/`, (err, stdout, stderr) => {
            if (err) {
              console.error(err);
              return;
            }
          });
      exec(`curl ${element} -o ${ultaBuff}.jpg`, (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
        
      // }, 5000);
      });
    }
    
  });


  exec(`py movin.py`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);})