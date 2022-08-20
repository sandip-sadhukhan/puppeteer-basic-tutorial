const puppeteer = require("puppeteer")
const except = require('chai').expect

describe("My First Puppeteer Test", () => {
	it("should launch the browser", async function () {
		// Initialize the browser
		const browser = await puppeteer.launch({
			headless: true, // will open browser physically
			slowMo: 0, // will add 0ms before executing program
			devtools: false, // devtools: true will open devtools by default
			defaultViewport: false,
		})

		const page = await browser.newPage()

        // timeout
        page.setDefaultTimeout(10000)

        // navigation timeout
        page.setDefaultNavigationTimeout(20000)

		await page.goto("https://example.com")

        const title = await page.title()
        const url = await page.url()
        const text = await page.$eval('h1', element => element.textContent)
        const count = await page.$$eval('p', element => element.length)

        except(title).to.be.a("string", "Example Domain")
        except(url).to.include("example.com")
        except(text).to.be.a("string", "Example Domain")
        except(count).to.equal(2)

		// close the browser
		await browser.close()
	})
})
