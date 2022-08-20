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
		await page.goto("https://devexpress.github.io/testcafe/example/")

        // type in input
        await page.type('#developer-name', 'Sandip Sadhukhan')

        // click checkbox(click count by default is 1)
        await page.click('#tried-test-cafe', {clickCount: 1})

        // select dropdown
        await page.select('#preferred-interface', 'JavaScript API')

        // textarea
        await page.type('#comments', 'Let\'s fill that message with some text')
        await page.waitForTimeout(3000)

        // submit form
        await page.click('#submit-button')
        await page.waitForSelector('.result-content')

        // close the browser
		await browser.close()
	})
})
