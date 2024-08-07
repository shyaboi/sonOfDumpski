const fs = require("fs")
const puppeteer = require("puppeteer");
const exec = require("child_process").exec;

await fs.readFile("classyDump2.txt", "utf8", (err, data) => {
    if (err) throw err;

    const dinus = data.split("\n");

    (async () => {
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
                element.href.includes("File:Flag") &&
                parensRegex.test(element.textContent)
              );
            })
            .map((element) => element.href)
        );

        allLinks.push(...links);
      }

      const linksString = allLinks.join("\n");
      fs.appendFile("classyDump3.txt", linksString, (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log("link barf wrote");
        }
      });

      await browser.close();
    })();
  });