const puppeteer = require("puppeteer")

describe("My First Puppeteer Test", () => {
	it("should launch the browser", async function () {
        // Initialize the browser
		const browser = await puppeteer.launch({
			headless: false, // will open browser physically
			slowMo: 10, // will add 10ms before executing program
			devtools: false, // devtools: true will open devtools by default
		})

        // create a new page on browser
		const page = await browser.newPage()

        // goto this url
		await page.goto("http://example.com/")

        // wait for 3s
        await page.waitForTimeout(3000)

        // wait for an element
		await page.waitForSelector("h1")

        // reload the page
        await page.reload()

        await page.waitForTimeout(3000)
        await page.waitForSelector('h1')

        // close the browser
		await browser.close()
	})
})
