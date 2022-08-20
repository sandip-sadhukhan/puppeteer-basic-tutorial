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
		await page.goto("https://yahoo.com")

		// get title and other properties
		const title = await page.title()
		const url = await page.url()
		console.log({ title, url })

		// close the browser
		await browser.close()
	})
})
