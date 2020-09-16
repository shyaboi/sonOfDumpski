const puppeteer = require('puppeteer');
const fs = require('fs')
const exec = require("child_process").exec;


// for (let page = 2; page < 10; page++) {

const vgmUrl = `https://boards.4chan.org/wg/thread/7645096#q7645096`;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(vgmUrl);

  const links = await page.$$eval('a', elements => elements.filter(element => {
    const parensRegex = /^((?!\().)*$/;
    return element.href.includes('.jpg') && parensRegex.test(element.textContent);
  }).map(element => element.href));

// for (let i = 0; i < links.length; i++) {
//     const element = links[i];
    
    // mToHtml = `<img class="lazy" src='${element}' width="450" height="500" />`
    // lanks = `<a class="lazy" href='${element}'> Lankssssss</a>`
    fs.writeFile("classyDump.txt", links, ()=> {console.log("link barf wrote")})

// }
  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(vgmUrl);

  const links = await page.$$eval('a', elements => elements.filter(element => {
    const parensRegex = /^((?!\().)*$/;
    return element.href.includes('.png') && parensRegex.test(element.textContent);
  }).map(element => element.href));

// for (let i = 0; i < links.length; i++) {
//     const element = links[i];
    
    // mToHtml = `<img class="lazy" src='${element}' width="450" height="500" />`
    // lanks = `<a class="lazy" href='${element}'> Lankssssss</a>`
    fs.appendFile("walls.txt", links, ()=> {console.log("link barf wrote")})

// }
  await browser.close();
})();

// }



setTimeout(() => {
  exec(`start pythonV.bat`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  console.log('hganding off to dumpreader')
    
})
  
}, 15000);

setTimeout(() => {
  exec(`start scrapeToDump.bat`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  console.log('hganding off to dumpreader')
    
})
  
}, 15000);