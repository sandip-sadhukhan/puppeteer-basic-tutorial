const puppeteer = require("puppeteer")
const except = require("chai").expect

describe("My First Puppeteer Test", () => {
	it("should launch the browser", async function () {
		// Initialize the browser
		const browser = await puppeteer.launch({
			headless: false, // will open browser physically
			slowMo: 10, // will add 0ms before executing program
			devtools: false, // devtools: true will open devtools by default
			defaultViewport: false,
		})

		const page = await browser.newPage()

		// timeout
		page.setDefaultTimeout(10000)

		// navigation timeout
		page.setDefaultNavigationTimeout(20000)

		await page.goto("https://example.com")
        await page.waitForXPath('//h1')

		const title = await page.title()
		const url = await page.url()
		const text = await page.$eval("h1", (element) => element.textContent)
		const count = await page.$$eval("p", (element) => element.length)

		except(title).to.be.a("string", "Example Domain")
		except(url).to.include("example.com")
		except(text).to.be.a("string", "Example Domain")
		except(count).to.equal(2)

		await page.goto("http://zero.webappsecurity.com/")
		await page.waitForSelector("#searchTerm")
		await page.type("#searchTerm", "Hello World")
		await page.keyboard.press("Enter", { delay: 10 })
        await page.waitForTimeout(5000)

		// close the browser
		await browser.close()
	})
})
