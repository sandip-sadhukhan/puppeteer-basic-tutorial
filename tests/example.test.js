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
		await page.goto("https://devexpress.github.io/testcafe/example/")

        // type in input with 200ms delay keystock
        await page.type('#developer-name', 'Sandip Sadhukhan', {delay: 200})
        await page.waitForTimeout(3000)


        // close the browser
		await browser.close()
	})
})
