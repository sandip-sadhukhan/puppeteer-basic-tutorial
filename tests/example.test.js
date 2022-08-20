const puppeteer = require("puppeteer")

describe("My First Puppeteer Test", () => {
	it("should launch the browser", async function () {
		// Initialize the browser
		const browser = await puppeteer.launch({
			headless: false, // will open browser physically
			slowMo: 10, // will add 10ms before executing program
			devtools: false, // devtools: true will open devtools by default
			defaultViewport: false,
		})

		// create a new page on browser
		const page = await browser.newPage()

		// goto this url
		await page.goto("https://example.com")

        // get text
        const text = await page.$eval('h1', element => element.textContent)

        // how many paragraph
        const count = await page.$$eval('p', element => element.length)

        console.log({text, count})


		// close the browser
		await browser.close()
	})
})
