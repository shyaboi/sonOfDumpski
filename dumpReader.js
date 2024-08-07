const fs = require("fs");
const { CLIENT_RENEG_LIMIT } = require("tls");
const path = require("path");
const puppeteer = require("puppeteer");
const exec = require("child_process").exec;
const Shell = require("node-powershell");
const userOS = process.platform;

// var ultaBuff = parseInt(fs.readFileSync("universalCounter.txt"));

const bigHonk = async () => {
  const otherHonk = async () => {
    fs.readFile("classyDumpSki.txt", "utf8", async (err, data) => {
      if (err) throw err;
      const dinus = data.split("\n");
      // exec(`mkdir dinus`, (err, stdout, stderr) => {
      //   if (err) {
      //     console.error(err);
      //     return;
      //   }
      // });
      // const parts = dini.split("/");
      // const lastSegment = parts.pop() || parts.pop();
      // // console.log(typeof(dinus));
      // console.log(lastSegment);

      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      const allLinks = [];

      for (const dini of dinus) {
        await page.goto(dini);

        const links = await page.$$eval("a", (elements) =>
          elements
            .filter((element) => {
              const parensRegex = /^((?!\().)*$/;
              return (
                element.href.includes(".svg") &&
                parensRegex.test(element.textContent)
              );
            })
            .map((element) => element.href)
        );

        allLinks.push(...links);
      }

      const linksString = allLinks.join("\n");
      fs.appendFile("classyDump2.txt", linksString, (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log("link barf wrote");
        }
      });

      await browser.close();
    });
  };
  // const honk = async () => {
  //   await exec(`node dump2Reader.js`, (err, stdout, stderr) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //   });
  // };

  // setTimeout(() => {
  // exec(`cd dinus`, (err, stdout, stderr) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  // });

  // exec(
  //   `curl https://en.wikipedia.org/wiki/Zhytomyr_Oblast#/media/File:Flag_of_${lastSegment}.svg -o dinus/${lastSegment}.svg`,
  //   (err, stdout, stderr) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log(stdout);
  //   }
  // );
  // },5000);
  // for (let i = 0; i < dinus.length; i++) {
  //   const element = dinus[i];
  //   console.log(element);
  //   ultaBuff++;
  //   fs.writeFile("universalCounter.txt", ultaBuff, () => {
  //     console.log("double dang!");
  //   });
  // setTimeout(() => {
  // exec(`cd dinus/`, (err, stdout, stderr) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  // });
  // exec(`curl ${element} -o ${ultaBuff}.svg`, (err, stdout, stderr) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log(stdout);

  //   }, 5000);
  // });
  // }
  // console.log("dump donezo");
  otherHonk();
  // await honk();

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
};

bigHonk();
