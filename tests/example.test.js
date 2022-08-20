const puppeteer = require("puppeteer")

describe("My First Puppeteer Test", () => {
	it("should launch the browser", async function () {
        // Initialize the browser
		const browser = await puppeteer.launch({
			headless: false, // will open browser physically
			slowMo: 100, // will add 10ms before executing program
			devtools: false, // devtools: true will open devtools by default
		})

        // create a new page on browser
		const page = await browser.newPage()

        // goto this url
		await page.goto("http://example.com/")
        await page.waitForSelector('h1')
        await page.goto('https://dev.to')
        await page.waitForSelector('#index-container')
        await page.goBack()
        await page.waitForSelector('h1')
        await page.goForward()
        await page.waitForSelector('#index-container')
        await page.reload()

        // close the browser
		await browser.close()
	})
})
