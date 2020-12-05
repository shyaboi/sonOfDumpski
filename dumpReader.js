const fs = require('fs');
const { CLIENT_RENEG_LIMIT } = require('tls');
const path = require("path")
const exec = require("child_process").exec;
const Shell = require("node-powershell");
const userOS = process.platform;



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
          // exec(`cd dinus/`, (err, stdout, stderr) => {
          //   if (err) {
          //     console.error(err);
          //     return;
          //   }
          // });
      exec(`curl ${element} -o ${ultaBuff}.svg`, (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
        
      // }, 5000);
      });
    }
    console.log("dump donezo")
  });


  // setTimeout(() => {

  // exec(`py movin.py`, (err, stdout, stderr) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log(stdout);})

  // if (userOS === "win32") {
    // const ps = new Shell({
    //   executionPolicy: "Bypass",
    //   noProfile: true,
    // });
  // ps.addCommand('./pythonV.bat')
    
      // console.log(stdout);})}
// }, 5000)
